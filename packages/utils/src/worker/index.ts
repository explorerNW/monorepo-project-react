const calculatorWorker = new Worker(
  new URL('./calculator.ts', import.meta.url),
  { type: 'module' }
);

const calculator = (values: number[]): Promise<number> => {
  calculatorWorker.postMessage(values);
  return new Promise(resolve => {
    calculatorWorker.onmessage = event => {
      resolve(event.data);
    };
  });
};

export { calculator };
