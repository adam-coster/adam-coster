---
slug: silently-skipped-async-tests-mochajs
title: Beware silently skipped tests in Mocha
description: >
  Any Mocha.js tests defined within an async describe
  function will be silently skipped! (Don't use async
  functions in your describe() callbacks.)
editedAt: 2021-03-26T22:53:16.483Z
publishedAt: 2021-03-03T17:01:28.039Z
tags:
  - webdev
  - javascript
  - node
  - testing
  - tdd
  - mochajs
crossPosts:
  - https://dev.to/adamcoster/beware-silently-skipped-tests-in-mocha-449h
---

I'm a big believer in test-driven development, though I admit I'm a recent convert. My framework of choice is [Mocha](https://mochajs.org/).

There are a couple of gotchas when using Mocha that can cause you to accidentally _skip tests_. The scary version of this results in Mocha telling you that all your tests have passed, when in fact some of your tests _weren't run at all_!

Here are the two causes of this that have hit me particularly hard, and that are both easy to fix:

1. Async errors thrown outside of test definitions are silently swallowed by Mocha.js.
2. If you frequently use the `.only` flag to limit test runs to a subset of tests, you might forget to remove that flag.

### Silent, swallowed errors.

A while ago there was a CLI tool I was building that had been merrily passing all of its tests for _weeks_. When I finally made it available for the team, it was completely broken. Weirdly, it was broken in ways that I _knew_ I had test coverage for. How could this be?

It turns out that errors thrown in async contexts can cause Mocha to exit early without registering all tests, all while swallowing the error that that caused it to happen! Observe:

```js
describe('My test suite', async function () {
  // throw new Error("Bwahahaha! Tricked you!");

  it('can pass this test', async function () {
    // This will "pass", even without any code,
    // since Mocha tests pass unless an error is thrown.
  });

  it('cannot pass this test', async function () {
    throw new Error('OH NOOOOOO!');
  });
});
```

This test runs as expected, informing us that one test passed and one failed:

![Screenshot of the expected output of a failed Mocha test.](https://i.imgur.com/2bScqem.png)

But what happens if we uncomment out that extra thrown error? Despite there now being _two_ explicitly thrown errors in that little Mocha snippet, we get this:

![Screenshot of Mocha output falsely showing that a test didn't fail.](https://i.imgur.com/iEdXgXe.png)

Yeah, sure it says _zero_ passed, which sounds like a failure. But that's in green, because Mocha saw _zero tests_! This is a _success state_, because Mocha doesn't care about things that pass (or that nothing passed), only things that _fail_. And nothing failed, according to Mocha.

When something fails, Mocha exits with a non-zero status. That non-zero exit would be used to inform downstream tools that something has gone wrong, preventing your automated pipelines from continuing when tests fail. But here we got a `0` status despite obvious test failures.

Even without the automation problem, this same bug can be hard to spot when doing things manually. Sure, in this case "0 tests passed" is quite obviously wrong. But this problem can cause a _subset_ of tests to get skipped, so you might see "321 tests passed" when there should have been "351". If you hadn't memorized how many tests you had there'd be no way to realize you were skipping tests.

As a workaround, you can tell the Node process to catch such errors and force a non-zero exit status:

```js
function onUncaught(err){
  console.log(err);
  process.exit(1);
}

process.on('unhandledRejection', onUncaught);

describe('My test suite', async function(){

  throw new Error("Bwahahaha! Tricked you!");
  // ...
```

And now we get:

![Screenshot showing the error no longer being silently swallowed.](https://i.imgur.com/HZNqDWV.png)

**_NOTE:_** _While you can, technically, use `async` callbacks in your `describe()`s, it very likely will not behave the way that you expect! If you remove the `async` in the example's `describe`, the thrown error is no longer swallowed. The protection mechanism shown here should be treated as a backup for accidentally making a `describe()` async!_

### Forgotten `.only()`

When you're actively working on a new feature, or debugging an existing one, the test-driven approach is to first write the tests, ensure they're failing where they should be, and then code until all tests are passing.

If you're doing this in the context of a large project, you probably don't want to be running _all_ tests just to see if the current thing is working. Mocha provides a few mechanisms for dealing with that, the easiest one being to use `.only` to indicate that _only that test_ (and any others similarly flagged) should be run:

```js
describe('My test', function () {
  it.only('will run this test', function () {});
  it('will not run this test', function () {});
});
```

But what happens when you inevitably forget to remove that `.only` to ensure your other tests run again? You'll be bypassing tests that might be failing! I've done this countless times myself.

Mocha has a great solution for this: the `--forbid-only` flag.

When you add this flag to your CLI call, Mocha treats the mere _existence_ of `.only` in _any_ part of your test code as a test failure, and exits with a non-zero status.

For my build pipelines I _always_ use this flag. It pairs nicely with `--bail`, which aborts as soon as a single test fails so that you don't waste time running other tests on a bad build.

_This article was adapted from the [DevChat newsletter](https://www.bscotch.net/post/devchat-6)._
