import puppeteer, { Page, ScreenshotClip } from 'puppeteer';
import { Pathy } from '@bscotch/pathy';
import { fileURLToPath, pathToFileURL } from 'url';
import { ok } from 'assert';
import path from 'path';

export class PreviewGenerator {
  protected browser = puppeteer.launch({});
  protected viewPort = { width: 1024, height: 512 };
  readonly srcRoot: Pathy;
  readonly outRoot: Pathy;

  constructor(options: { srcRoot: string | Pathy; outRoot: string | Pathy }) {
    this.srcRoot = new Pathy(options.srcRoot);
    this.outRoot = new Pathy(options.outRoot);
  }

  async generatePreviews(options?: {
    /**
     * @default 10
     */
    maxParallelPages?: number;
    cropBySelector?: string;
  }) {
    const maxParallelPages = options?.maxParallelPages || 10;
    await this.outRoot.ensureDirectory();
    const srcPaths = await this.listSourcePaths();

    // Create up to the max number of pages, and
    // have each one render pages in sequence so
    // that they are all maximally overlapping.
    // Basically each "page" is a worker.
    const waits: Promise<any>[] = [];
    let lastClaimedIdx = -1;
    let pagesClosed = 0;
    const renderNextPage = async (page: Page): Promise<void> => {
      lastClaimedIdx += 1;
      if (lastClaimedIdx >= srcPaths.length) {
        await page.close();
        pagesClosed += 1;
        if (pagesClosed === maxParallelPages) {
          await (await this.browser).close();
        }
        return;
      }
      await this.renderPage(page, srcPaths[lastClaimedIdx], {
        cropBySelector: options?.cropBySelector,
      });
      return await renderNextPage(page);
    };
    for (let i = 0; i < maxParallelPages && i < srcPaths.length; i++) {
      waits.push(this.createPage().then((page) => renderNextPage(page)));
    }
    await Promise.all(waits);
  }

  async renderPage(
    page: Page,
    url: Pathy,
    options?: { cropBySelector?: string },
  ) {
    await page.goto(pathToFileURL(url.absolute).toString(), {
      waitUntil: 'networkidle2',
    });
    const relativeUrl = url.relativeFrom(this.srcRoot);
    const destPath = this.outRoot.join(relativeUrl);
    await destPath.up().ensureDirectory();
    console.log(`⛏️ Rendering preview for:\n  ${relativeUrl}`);
    await page.screenshot({
      path: destPath.changeExtension('.html', '.jpg').absolute,
      type: 'jpeg',
      captureBeyondViewport: true,
      clip: await this.computeBoundingBox(page, {
        selector: options?.cropBySelector,
        assert: true,
      }),
    });
  }

  async createPage(): Promise<Page> {
    const page = await (await this.browser).newPage();
    // Set the viewport to a reasonable size for
    // previews (2:1 aspect ratio is supposedly fine).
    await page.setViewport({ width: 1200, height: 600 });

    // Redirect root requests to the filesystem
    await page.setRequestInterception(true);
    page.on('request', async (request) => {
      const url = request.url();
      const isFilePath = url.match(/^file:/);
      // If the target path doesn't exist, it's
      // probably due to the path being absolute
      // in the HTML.
      const targetPath = new Pathy(url);
      if (isFilePath && !(await targetPath.exists())) {
        // Does the relative path exist?
        const oldPath = new Pathy(fileURLToPath(url));
        const newPath = this.srcRoot.join(oldPath);
        if (!(await newPath.exists())) {
          console.log('Non-existent local path:', oldPath.absolute);
          return await request.abort();
        }
        const redirect = pathToFileURL(
          path.resolve(newPath.absolute),
        ).toString();
        // console.log('REDIRECT', url, '➡️', redirect);
        return await request.continue({
          url: redirect,
        });
      }
      await request.continue();
    });
    page.on('requestfailed', (request) => {
      // console.log('Request failed:', request.url());
    });

    return page;
  }

  async computeBoundingBox(
    page: Page,
    options: { selector?: string; assert?: boolean },
  ): Promise<ScreenshotClip> {
    const selection = options.selector && (await page.$(options.selector));
    ok(
      !options.selector || selection || !options.assert,
      `Could not find selector ${options.selector} on page ${page.url()}`,
    );
    const boundingBox = selection && (await selection.boundingBox());
    ok(
      boundingBox || !options.assert,
      `Could not find bounding box for selector ${
        options.selector
      } on page ${page.url()}`,
    );
    return (
      boundingBox || {
        x: 0,
        y: 0,
        width: this.viewPort.width,
        height: this.viewPort.height,
      }
    );
  }

  async listSourcePaths() {
    return await this.srcRoot.listChildrenRecursively({
      includePatterns: [/\.html$/],
    });
  }

  normalizePagePath(pagePath: string) {
    if (!pagePath.match(/^(https?|file):/)) {
      pagePath = new Pathy(pagePath).relativeTo(this.srcRoot);
    }
  }
}
