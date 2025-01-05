<script lang="ts">
  import { run } from 'svelte/legacy';

  import Image, { type ImageSource } from './Image.svelte';

  function urlFromSize(size: 343 | 686 | 1372) {
    return `/images/adam-coster_portrait_${size}.jpg`;
  }

  interface Props {
    size: 'small' | 'large';
  }

  let { size }: Props = $props();

  let srcset: ImageSource[] = $state([]);
  let width = $state('320px');
  run(() => {
    srcset =
      size === 'small'
        ? [
            { url: urlFromSize(343), pixelDensity: 1 },
            { url: urlFromSize(686), pixelDensity: 2 },
            { url: urlFromSize(1372), pixelDensity: 4 },
          ]
        : [
            { url: urlFromSize(686), pixelDensity: 1 },
            { url: urlFromSize(1372), pixelDensity: 2 },
          ];
    width = size === 'small' ? `320px` : '640px';
  });
</script>

<Image
  src="/images/adam-coster_portrait_343.jpg"
  {width}
  alt="Portrait of Adam Coster"
  {srcset}
  style="display: inline-block; border-radius:5% 15% 5% 15%;"
/>
