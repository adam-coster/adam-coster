import { Pathy } from '@bscotch/pathy';
import { ok } from 'assert';
import { PreviewGenerator } from './socialPreview.js';

describe('Social Preview', function () {
  it('can generate a social preview', async function () {
    const outRoot = 'tmp';
    const expectedFile = new Pathy(outRoot).join('test-page.jpg');
    await expectedFile.delete({ force: true });
    const generator = new PreviewGenerator({
      srcRoot: 'samples',
      outRoot: outRoot,
    });

    await generator.generatePreviews({
      cropBySelector: '.preview',
    });
    ok(await expectedFile.exists(), 'preview image was not created');
  });
});
