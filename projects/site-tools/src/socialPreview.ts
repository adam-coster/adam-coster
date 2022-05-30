import puppeteer, { Page, ScreenshotClip } from 'puppeteer';
import { Pathy } from '@bscotch/pathy';
import { pathToFileURL } from 'url';
import { ok } from 'assert';

export class PreviewGenerator {
  protected browser = puppeteer.launch();
  protected viewPort = { width: 1024, height: 512 };
  readonly srcRoot: Pathy;
  readonly outRoot: Pathy;

  constructor(options: { srcRoot: string; outRoot: string }) {
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
    await this.outRoot.ensureDirectory();
    const srcPaths = await this.listSourcePaths();

    // Create up to the max number of pages, and
    // have each one render pages in sequence so
    // that they are all maximally overlapping.
    // Basically each "page" is a worker.
    const waits: Promise<any>[] = [];
    let lastClaimedIdx = -1;
    const renderNextPage = async (page: Page): Promise<void> => {
      lastClaimedIdx += 1;
      if (lastClaimedIdx >= srcPaths.length) {
        return;
      }
      await this.renderPage(page, srcPaths[lastClaimedIdx], {
        cropBySelector: options?.cropBySelector,
      });
      return await renderNextPage(page);
    };
    for (
      let i = 0;
      i < (options?.maxParallelPages || 10) && i < srcPaths.length;
      i++
    ) {
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
    await page.screenshot({
      path: destPath.changeExtension('.html', '.jpg').absolute,
      type: 'jpeg',
      captureBeyondViewport: false,
      clip: await this.computeBoundingBox(page, {
        selector: options?.cropBySelector,
        assert: true,
      }),
    });
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

  async createPage(): Promise<Page> {
    const page = await (await this.browser).newPage();
    await page.setViewport({ width: 1200, height: 600 });
    return page;
  }

  normalizePagePath(pagePath: string) {
    if (!pagePath.match(/^(https?|file):/)) {
      pagePath = new Pathy(pagePath).relativeTo(this.srcRoot);
    }
  }
}
