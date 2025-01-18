export const productionHost = 'adamcoster.com';

//@ts-expect-error
export const version: string = SITE_VERSION;
//@ts-expect-error
export const cwd: URL | undefined = CWD ? new URL(CWD) : undefined;
//@ts-expect-error
export const dev: boolean = DEV;
