/** @type {import('tailwindcss').Config} */
const { buttonStyles } = require('./src/Button/buttonStyles');

const safelist = [];

// 添加 `base` 类名
if (typeof buttonStyles.base === 'string') {
  safelist.push(...buttonStyles.base.split(' ')); // 将类名拆分为数组
}

// 遍历 `variants`，添加所有可能的类名
if (buttonStyles.variants) {
  Object.keys(buttonStyles.variants).forEach(variantKey => {
    const variantValues = buttonStyles.variants[variantKey];
    if (typeof variantValues === 'object') {
      Object.values(variantValues).forEach(value => {
        if (typeof value === 'string') {
          safelist.push(...value.split(' ')); // 将类名拆分为数组
        }
      });
    }
  });
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // 扫描所有可能的文件
  safelist,
  theme: {
    extend: {},
  },
  plugins: [],
};
