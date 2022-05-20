import { ok } from 'assert';
import { list as listDrives } from 'drivelist';
import fs from 'fs-extra';

async function findMacropadDrive() {
  const macropadDrive = (await listDrives()).find((d) =>
    d.description.match(/macropad rp2040/i),
  )?.mountpoints[0]?.path;

  ok(macropadDrive, 'macropad drive not found');

  return macropadDrive;
}

async function transferMacropadFiles() {
  const macropadDrive = await findMacropadDrive();
  await fs.copy('./src/', macropadDrive);
}

await transferMacropadFiles();
