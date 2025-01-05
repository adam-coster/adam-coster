---
"$schema": schemas/post.schema.json
title: Creating decent GIFs for game descriptions on Steam
description: Steam allows GIFs on store pages, but they need to be small and
  look decent. Here's how to use ffmpeg to create them.
publishedAt: 2024-11-12T23:52:25.984Z
editedAt: 2024-12-10T18:21:24Z
tags:
  - gamedev
  - marketing
  - tools
crossPosts: []
---

Selling video games is hard. They are an _experienced_ good that can't be portrayed with mere static images. So videos are the best format for game marketing materials.

> TL;DR: If you've got a source video and need some GIFs for your Steam page, [try out this Steam GIF-generator app on GitHub](https://github.com/bscotch/steam-gifs).

Steam of course lets you include videos on your store page via the carousel, but sadly it doesn't let you include videos in the game description. (Other game stores don't let you do this either, so Steam isn't an outlier here.)

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

That's pretty tedious, error-prone, and gives zero feedback during the process. So I put together a little app to slap a GUI in front of those commands, which makes it easy to crop, trim, and adjust quality settings with clear visual feedback. All the GIFs you make accumulate in the UI, so you can compare their quality and size side-by-side to pick the best one. Check it out [on GitHub](https://github.com/bscotch/steam-gifs).


**UPDATE (2024/11/13):** For even more ffmpeg options, see Alan Smith's ["ffmpeg GIF Maker Command (2023 Edition)"](https://www.alanwsmith.com/en/2x/jk/jc/yl/).

**UPDATE (2024/12/10):** I had originally linked to a CLI tool I made to solve this problem, but have since made a GUI app for this purpose. The post and links have been updated accordingly.