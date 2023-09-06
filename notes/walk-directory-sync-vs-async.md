I have a file-system i/o heavy application and kept finding that walking the directory tree was one of the more costly parts of it. I suspected that switching from synchronous to asynchronous file-system calls would help, but I wanted to measure the difference.

Notably, using the `withFileTypes` option of `readdir` instead of separately calling `stat` to 

Results from a monorepo with tons of folders:

- async [844ms] Found 64872 dirs
- sync [2880ms] Found 64872 dirs
- slow-async [5314ms] Found 64872 dirs
- slow-sync [13444ms] Found 64872 dirs

---

Notably, using the `withFileTypes` option of `readdir` instead of separately calling `fs.lstat` has a dramatic impact on performance (also note that you need to use `lstat` instead of `stat` to get the same behavior as `readdir`).

---

```ts

export async function getDirs(
  rootFolder: string,
  maxDepth = Infinity,
): Promise<string[]> {
  const spriteDirs: string[] = [];

  async function walk(dir: string, depth = 1): Promise<void> {
    if (depth > maxDepth) return;
    const files = await fsp.readdir(dir, { withFileTypes: true });
    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
          spriteDirs.push(filePath);
          await walk(filePath, depth + 1);
        }
      }),
    );
  }

  await walk(rootFolder);
  return spriteDirs;
}

export async function getDirsSlowly(
  rootFolder: string,
  maxDepth = Infinity,
): Promise<string[]> {
  const spriteDirs: string[] = [];

  async function walk(dir: string, depth = 1): Promise<void> {
    if (depth > maxDepth) return;
    const files = await fsp.readdir(dir);
    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(dir, file);
        try {
          const stats = await fsp.lstat(filePath);
          if (stats.isDirectory()) {
            spriteDirs.push(filePath);
            await walk(filePath, depth + 1);
          }
        } catch {}
      }),
    );
  }

  await walk(rootFolder);
  return spriteDirs;
}

export function getDirsSync(rootFolder: string, maxDepth = Infinity): string[] {
  const spriteDirs: string[] = [];

  function walk(dir: string, depth = 1): void {
    if (depth > maxDepth) return;
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      const filePath = path.join(dir, file.name);
      if (file.isDirectory()) {
        spriteDirs.push(filePath);
        walk(filePath, depth + 1);
      }
    }
  }

  walk(rootFolder);
  return spriteDirs;
}

export function getDirsSyncSlowly(
  rootFolder: string,
  maxDepth = Infinity,
): string[] {
  const spriteDirs: string[] = [];

  function walk(dir: string, depth = 1): void {
    if (depth > maxDepth) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.lstatSync(filePath);
        if (stat.isDirectory()) {
          spriteDirs.push(filePath);
          walk(filePath, depth + 1);
        }
      } catch {}
    }
  }

  walk(rootFolder);
  return spriteDirs;
}

```