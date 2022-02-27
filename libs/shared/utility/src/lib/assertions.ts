export function assert(
  claim: any,
  failureMessage: string | undefined,
): asserts claim {
  if (!claim) {
    throw new Error(failureMessage || 'Something went wrong');
  }
}
