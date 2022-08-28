<script lang="ts" context="module">
	export interface ImageSource {
		/** URI for the image */
		url: string;
		/**
		 * At which pixel density this image
		 * will be displayed. E.g. a value of `2`
		 * means that this image is roughly twice
		 * the dimensions of the baseline width x height,
		 * so that a browser with a 2x pixel density should
		 * display that one instead.
		 */
		pixelDensity: number;
	}
</script>

<script lang="ts">
	export let width: string;
	export let height: string | 'auto' = 'auto';
	/**
	 * The baseline src image, which should have
	 * aspect ratio specified by `width` & `height`,
	 * and optionally higher-density images in `srcset`.
	 */
	export let src: string;
	export let alt: string;
	export let srcset: ImageSource[] | undefined = undefined;
	export let style: string | undefined = undefined;

	function srcsetToString(
		srcset: ImageSource[] | undefined,
	): string | undefined {
		if (!srcset?.length) {
			return;
		}
		return srcset
			.map(({ url, pixelDensity }) => `${url} ${pixelDensity}x`)
			.join(', ');
	}
</script>

<img
	loading="lazy"
	{src}
	srcset={srcsetToString(srcset)}
	{alt}
	{width}
	{height}
	{style}
/>

<style>
	img {
		max-width: 100%;
		max-height: 100%;
		transition-property: height, width, left, top;
		transition-duration: 300ms;
		object-fit: cover;
	}
</style>
