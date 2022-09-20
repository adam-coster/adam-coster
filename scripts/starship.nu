def find-in-parents [filename] {
  ($env.PWD | path split |  each -n { |it| ( $env.PWD | path split | range 0..($it.index) | path join $filename)} | reverse | where ($it | path exists))
}

def add-header [text,type] {
  insert ($in | length) {text: $text, type: $type}
}

def get-headers [] {

  # If we're in a package, show the package name
  # otherwise, if we're in a repo, show the repo name
  # In either case, show the relative directory (if not '.')
  # Finally, if NEITHER just write the path relative to home

  let pkgJsons = find-in-parents 'package.json'
  let gits = find-in-parents '.git'
  let isPkg = ($pkgJsons | is-empty | not $in)
  let isGit = ($gits | is-empty | not $in)
  let root = ((if ($isPkg) { $pkgJsons | first } else if ($isGit) { $gits | first } else {""}) | path dirname)


  let displayPath = ((if ([$isPkg, $isGit] | any $it) {
    $env.PWD | path relative-to $root
  } else {$env.PWD}) | str replace $nu.home-path '~' --string | str replace --all --string \\ /);

  let pathHeader = (if ($displayPath | is-empty) {[]} else {add-header ($displayPath) 'path'});

  let typeHeader = (if ($isPkg) {
    let pkgName = (open ($pkgJsons | first) | get name | str replace "@[^/]+/" "");
    add-header $' ($pkgName)' 'package'
  } else if ($isGit ) {
    add-header $' ($root | path basename)' 'repo'
  } else {[]});
  let branch = (if ($isGit) {
    let branch = (git branch --show-current | str trim);
    add-header $' ($branch)' 'branch'
  } else {[]});
  ([$pathHeader, $typeHeader, $branch] | flatten) ;
}

export def prompt [bg,colorMap] {
  let headers = get-headers ;
  $headers | reduce -n -f '' { |it, acc| (
    # First part has the text with inverted colors
    let isEnd = ($it.index == ($headers | length) - 1);
    let color = ($colorMap | get $it.item.type);
    let text = $it.item.text;
    let arrowAnsi = (
      if ($isEnd) {
        {fg: $color}
      } else {
        {
          fg: $color,
          bg: (
            $colorMap | get ($headers | get ($it.index + 1) | get 'type'))
        }
      }
    );
    let arrow = $"(ansi -e $arrowAnsi)";
    $acc | $"($acc.item)(ansi -e {bg: $color, fg: $bg}) ($text)(ansi reset)($arrow)"
  )}
}
