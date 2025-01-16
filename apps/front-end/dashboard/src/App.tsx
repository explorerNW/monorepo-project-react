import { useEffect, useRef, useState } from 'react';
import { calculator } from '@me/utils';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Input } from '@me/ui';

const performance = () => {
  // 创建一个 PerformanceObserver 实例，并定义一个回调函数来处理性能条目
  const observer = new PerformanceObserver(list => {
    // 回调函数接受一个参数：entries，它是一个性能条目对象的数组
    const entries = list.getEntries();
    entries.forEach(entry => {
      // 处理每个性能条目，例如打印出条目名称和开始时间
      console.log(entry.name, entry.startTime);
    });
  });

  // 指定要观察的性能条目类型，并开始观察
  observer.observe({ entryTypes: ['resource', 'paint'] });
};

function App() {
  const [count, setCount] = useState(0);

  const ref = useRef<{ loaded: boolean }>({ loaded: false });

  useEffect(() => {
    if (!ref.current.loaded) {
      performance();
      calculator([1, 2, 3, 4, 5]).then(res => {
        console.log('res: ', res);
      });
      ref.current.loaded = true;
    }
  }, []);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <Input<{ name: string }>
        className={'border'}
        list={[{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }]}
        field='name'
      />
    </>
  );
}

export default App;
