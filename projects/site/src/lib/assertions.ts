export function assert(claim: any, message?: string): asserts claim {
  if (!claim) {
    throw new Error(message || 'Assertion failed');
  }
}
