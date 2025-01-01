export const bootstrap = () => {
  console.log('app1 bootstrap');
  return Promise.resolve().then(() => {});
};

export const mount = () => {
  console.log('app1 mount');
  return Promise.resolve().then(() => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = 'app1';
    const a = document.createElement('a');
    a.href = '/app2';
    a.textContent = 'to app2';
    div.appendChild(span);
    div.appendChild(a);
    document.body.appendChild(div);
  });
};

export const unmount = () => {
  console.log('app1 unmount');
  return Promise.resolve().then(() => {});
};

export const update = () => {
  console.log('app1 update');
  return Promise.resolve().then(() => {});
};
