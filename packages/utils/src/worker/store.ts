import * as Comlink from 'comlink';
const obj = {
  count: 0,
  increment: () => obj.count++,
  incrementNew() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
};

Comlink.expose(obj);
