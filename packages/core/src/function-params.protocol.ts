type FunctionProtocol<T> = T extends (...args: infer P) => any ? P : never;

type Params<T> = FunctionProtocol<keyof T>;

