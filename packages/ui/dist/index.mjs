import { useState as e } from 'react';
import { Fragment as n, jsx as a } from 'react/jsx-runtime';
function r({ className: r }) {
  const { value: t, onChange: o } = (() => {
    const [n, a] = e();
    return {
      value: n,
      onChange: e => {
        a(e.target.value);
      },
    };
  })();
  return a(n, {
    children: a('input', { className: r, value: t, onChange: o }),
  });
}
export { r as Input };
