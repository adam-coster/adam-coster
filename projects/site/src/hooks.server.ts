import * as Sentry from '@sentry/sveltekit';
import { handleErrorWithSentry, sentryHandle } from "@sentry/sveltekit";
import { sequence } from "@sveltejs/kit/hooks";

Sentry.init({
  dsn: 'https://ac21bcaf1105c3acc99a755a82648889@o4506293707210752.ingest.sentry.io/4506293712388096',
  tracesSampleRate: 1.0
});

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(sentryHandle());

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
