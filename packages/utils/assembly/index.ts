// The entry file of your WebAssembly module.

export function calculator(numbers: i32[]): i32 {
  return numbers.reduce((a, b) => a + b, 0);
}
