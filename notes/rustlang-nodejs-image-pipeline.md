I need to rework our art pipeline (going from raw source images to in-game sprites), and figured that the problem domain was a good candidate for trying out Rust instead of using Node (with Sharp). The image pipeline includes a lot of file-discovery, but otherwise requires a lot of image processing (finding bounding boxes, auto-cropping, applying bleeds) so I figured that was a good Rust problem.

Interesting findings:

- I don't know Rust at all, but with Copilot and ChatGPT 4 I was able to write a small Rust program (~300 LOC) to solve most of my problems in less than a day
- Before committing to the Rust approach, I wanted to directly compare perf against Node. Thanks again to Copilot I was able to auto-convert my Rust code to Typescript with fairly minor cleanup. Only took like 30min.
- Surprisingly, the Node app was basically the same speed as the Rust app! In fact faster for some parts of the problem. In particular, Node is way faster at serializing/deserializing JSON.

Notably, I think that this particular problem might be more disk i/o bound than I thought, so there's enough overhead from i/o that speed differences in the languages may just not matter that much. Also I may be just writing suboptimal Rust code -- I've been writing enough JavaScript that I have a good sense of the optimization problems there but don't really know about Rust optimization problems.

All that said, I was still surprised by this result. And also glad, because that means I can keep things in the Node stack instead of adding Rust to the mix!

Also of note, I used Piscina for parallelization in Node and that had the same effect as using rayon in Rust: in both cases the test set took ~24sec without parallelization and ~7sec with those simple out-of-the-box parallelization solutions.

--- 

"sprite_count": 904,
"frame_count": 1362,

Huh. I wanted to get an idea of how much faster this Rust program would be than a Node function that does exactly the same thing, before going all-in on figuring out how to integrate Rust stuff into the Stitch stack, only to find that the difference probably doesn't matter. It's significant, but once I have caching and parallielization in Node it's still fast enough that it probably doesn't matter?

- Without caching or parallization: Rust (~21s) Node (~24s)
- With parallelization: Rust (~7.4s) Node (~7.8s)
- With caching & paralleization: Rust (~125ms) Node (~870ms)

So the best-case timing for Rust is way faster (~6x), but the total time for Node is still under 1s for Crashlands2. It seems that there are tradeoffs for these languages for this particular kind of problem, where Rust is slower than Node in some things (JSON serialization in particular) and not enough-faster than Node in others to make up the difference.

CONCLUSION: I'm going to stick with Node for the art pipeline refactor for now, since I could probably cut down the time even more if necessary and it's best to avoid mixed-tech stacks