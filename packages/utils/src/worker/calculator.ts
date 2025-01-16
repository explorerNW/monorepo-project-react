const calculator = (values: number[]) => {
  return values.reduce((acc, cur) => acc + cur, 0);
};

self.onmessage = event => {
  const data = event.data;
  const result = calculator(data);
  self.postMessage(result);
};
