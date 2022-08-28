export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
	Required<Pick<T, K>>;

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type MaybePromise<T> = T | Promise<T>;

export type ArrayOrItem<T> = T | T[];
