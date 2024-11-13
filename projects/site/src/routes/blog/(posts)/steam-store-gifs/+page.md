Selling video games is hard. They are an _experienced_ good that can't be portrayed with mere static images. So videos are the best format for game marketing materials.

Steam of course lets you include videos on your store page via the carousel, but sadly it doesn't let you include videos in the game description. (Other game stores let you do this either, so they aren't an outlier here.)

But! Steam _does_ let you use GIFs in your game description. And GIFs are basically videos! Except that they're videos in a garbage format that results in either enormous files, terrible quality, or both.

Usually both.

Today I was fighting with ffmpeg to try to get a decent GIF from a video to use on Steam. After a lot of trial and error, I finally got what seems to be the process that is _most likely_ (certainly not guaranteed) to create the best mix of decent quality and small(ish) file size:

1. Start with a source video of good quality (must be very short)
2. Create a new video, scaled down to the width of Steam's descriptions (616px).
3. Create a "palette" for GIF conversion, so it doesn't look grainy and horrible.
4. Create the GIF using the down-scaled video and palette.

That ends up being a sequence of ffmpeg commands that look like this:

```bash
# Create a down-scaled video.
# (Note that the -2 means autoscale the width, but round to an even number)
ffmpeg -y -i source-video.mp4 -vf "scale=616:-2" source-video_steam.mp4

# Create a color palette
# (You can experiment with different FPS values)
ffmpeg -y -i source-video_steam.mp4 -vf "fps=15,palettegen" palette.png

# Use the down-scaled video and color palette to
# generate a respectable GIF
ffmpeg -y -i source-video_steam.mp4 -i palette.png -filter_complex "[0:v]fps=15[v];[v][1:v]paletteuse" source-video_steam.gif
```

If you need to make a lot of these, it's pretty tedious and error-prone to repeat the process. So I put it all together into [a little CLI program](https://github.com/bscotch/steam-gifs) that just takes the input video and frame rate as inputs, and does all the rest.

**UPDATE (2024/11/13):** For even more configuration options, see Alan Smith's ["ffmpeg GIF Maker Command (2023 Edition)"](https://www.alanwsmith.com/en/2x/jk/jc/yl/).
