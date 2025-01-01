// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FunctionProtocol<T> = T extends (...args: infer P) => any ? P : never;

export type Params<T> = FunctionProtocol<keyof T>;
