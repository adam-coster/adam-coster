MongoDB has transactions, but they're tricky to use.

They can only be run in a replicaset.

Each query in the transaction must be SEQUENTIAL. Therefore use of `Promise.all` can create random errors due to requests overlapping.

That leads to error messages like this:

> Given transaction number 84 does not match any in-progress transactions. The active transaction number is 83

(Got the hint from this comment: https://stackoverflow.com/a/77692912/5346534)