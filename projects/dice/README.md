# Dice Notation

Supported [dice notation](https://en.wikipedia.org/wiki/Dice_notation) string patterns:

- Dice Roll + (Optional) Keep Lowest/Highest
  - Pattern: `/(?<diceCount>\d+)?d(?<sides>\d+|%)(?:kh?(?<keepHighest>\d+)|kl(?<keepLowest>\d+))?/`
  - Examples:
    - `d10` (roll 1 d10)
    - `1d10` (same as above)
    - `5d6` (roll and sum 5 d6s)
    - `10d%k3` (roll 10 d100s, summing the highest 3)
    - `10d100kh3` (same as above)
    - `3d4kl2` (roll 3 d4s, summing the lowest 2)
  - `diceCount` defaults to 1
  - `sides` can be a positive integer or `%`, which is interpreted as `100`
  - `k` and `kh` both mean "Keep Highest"
  - `kl` means "Keep Lowest"
- Dice Pools (get the count satisfying a condition, rather than summing values)
  - Pattern: `/(?<diceCount>\d+)?d(?<sides>\d+|%)(?:>(?<countGreater>\d+)|<(?<countLesser>\d+))?/`
  - Examples:
    - `6d4>2` (roll 6 d4s, count those greater than 2)
    - `10d%<30` (roll 10 d100s, count those less than 30)