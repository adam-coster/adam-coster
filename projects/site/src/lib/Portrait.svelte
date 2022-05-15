<script lang="ts">
  import Image from './Image.svelte';

  const allSizes = [640];
  export let width: number = 320;
  let sizes = allSizes.filter(
    (size, i) => size >= width || i === allSizes.length - 1,
  );

  function urlFromSize(size: number) {
    return `/images/adam-coster-square_${size}.jpg`;
  }

  const srcset = sizes.map((size) => {
    return {
      url: urlFromSize(size),
      pixelDensity: Math.round((size / width) * 10) / 10,
    };
  });
</script>

<a class="portrait" href="/" title="Navigate to the home page.">
  <Image
    src="/images/adam-coster-round_320.png"
    {width}
    height={width}
    alt="Portrait of Adam Coster"
    {srcset}
    style="clip-path: circle(43% at center);"
  />
</a>

<style>
  .portrait {
    clip-path: circle(44% at center);
    background-color: rgb(255, 166, 0);
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
