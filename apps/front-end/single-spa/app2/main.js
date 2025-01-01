export const bootstrap = () => {
  console.log('app2 bootstrap');
  return Promise.resolve().then(() => {});
};

export const mount = () => {
  console.log('app2 mount');
  return Promise.resolve().then(() => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = 'app2';
    const a = document.createElement('a');
    a.href = '/app1';
    a.textContent = 'to app1';
    div.appendChild(span);
    div.appendChild(a);
    document.body.appendChild(div);
  });
};

export const unmount = () => {
  console.log('app2 unmount');
  return Promise.resolve().then(() => {});
};

export const update = () => {
  console.log('app2 update');
  return Promise.resolve().then(() => {});
};
