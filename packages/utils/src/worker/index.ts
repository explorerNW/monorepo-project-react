import * as Comlink from 'comlink';

const calculatorWorker = new Worker(
  new URL('./calculator.ts', import.meta.url),
  { type: 'module', credentials: 'same-origin' }
);

export function calculator(values: number[]): Promise<number> {
  calculatorWorker.postMessage(values);
  return new Promise(resolve => {
    calculatorWorker.onmessage = event => {
      resolve(event.data);
    };
  });
}

export async function counter(): Promise<
  Comlink.Remote<{
    count: number;
    increment: () => void;
    decrement: () => void;
  }>
> {
  const worker = new Worker(new URL('./store.ts', import.meta.url), {
    type: 'module',
    credentials: 'same-origin',
  });

  return Comlink.wrap(worker);
}
