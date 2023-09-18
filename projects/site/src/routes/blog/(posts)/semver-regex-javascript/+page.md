The official [semver docs](https://semver.org/) list a couple of regular expressions for parsing and validating semver strings. However, the one with named capture groups is not compatible with JavaScript's flavor of regex.

Here's the official regex with minimal edits to make it JavaScript compatible:

```js
/** Regex matching the official semver spec, with named capture groups. */
const semverPattern = /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/

/** Pattern matching the official semver spec, with named capture groups, that can be used as a RegExp source. */
const semverPatternString = '^(?<major>0|[1-9]\\d*)\\.(?<minor>0|[1-9]\\d*)\\.(?<patch>0|[1-9]\\d*)(?:-(?<prerelease>(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$'
```

See it in action: [https://regex101.com/r/M4Un5m/1](https://regex101.com/r/M4Un5m/1)

And here's a semver parser that uses the above regex:

```js
const semverPattern = /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/

/**
 * Get the components of a semver string.
 * @param {string} semverString
 * @returns {{ major: number, minor: number, patch: number, prerelease: string[], buildmetadata: string[] }}}
 */
function parseSemver(semverString) {
  const match = semverPattern.exec(semverString);
  if (!match) return null;
  const { major, minor, patch, prerelease, buildmetadata } = match.groups;
  return {
    major: +(major),
    minor: +(minor),
    patch: +(patch),
    prerelease: prerelease
      ? splitPrereleaseString(prerelease)
      : [],
    buildmetadata: buildmetadata
      ? splitPrereleaseString(buildmetadata)
      : [],
  }
}

/**
 * @returns {(string | number)[]}
 */
function splitPrereleaseString(prereleaseString) {
  return prereleaseString.split('.').map((str) => {
      const num = +str;
      return Number.isNaN(num) ? str : num;
    });
}

// Test cases
console.log(parseSemver('1.2.3')); // { major: 1, minor: 2, patch: 3, prerelease: [], buildmetadata: [] }
console.log(parseSemver('1.2.3-alpha')); // { major: 1, minor: 2, patch: 3, prerelease: ['alpha'], buildmetadata: [] }
console.log(parseSemver('1.2.3-alpha.1')); // { major: 1, minor: 2, patch: 3, prerelease: ['alpha', 1], buildmetadata: [] }
console.log(parseSemver('1.2.3+build.1')); // { major: 1, minor: 2, patch: 3, prerelease: [], buildmetadata: ['build', 1] }
console.log(parseSemver('1.2.3-alpha.1+build.1')); // { major: 1, minor: 2, patch: 3, prerelease: ['alpha', 1], buildmetadata: ['build', '1'] }
```
