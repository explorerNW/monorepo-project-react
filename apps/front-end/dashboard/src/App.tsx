import { useEffect, useRef } from 'react';
import { worker, assembly } from '@me/utils';

import './App.css';

import { Input } from '@me/ui';

const performance = () => {
  // 创建一个 PerformanceObserver 实例，并定义一个回调函数来处理性能条目
  const observer = new PerformanceObserver(list => {
    // 回调函数接受一个参数：entries，它是一个性能条目对象的数组
    const entries = list.getEntries();
    entries.forEach(entry => {
      // 处理每个性能条目，例如打印出条目名称和开始时间
      console.log(entry.name, entry.startTime, 'ms');
    });
  });

  // 指定要观察的性能条目类型，并开始观察
  observer.observe({ entryTypes: ['resource', 'paint'] });
};

function App() {
  const ref = useRef<{ loaded: boolean }>({ loaded: false });

  useEffect(() => {
    if (!ref.current.loaded) {
      performance();
      console.log(
        'assembly.calculator: ',
        assembly.calculator([1, 2, 3, 4, 5, 6, 7, 8, 9])
      );
      worker.calculator([1, 2, 3, 4, 5, 6, 7, 8, 9]).then(res => {
        console.log('worker.calculator: ', res);
      });
      worker.counter().then(async obj => {
        await obj.increment();
        console.log('obj.count:', await obj.count);
      });
      ref.current.loaded = true;
    }
  }, []);

  return (
    <>
      <div className='flex flex-col gap-4'>
        <Input<{ name: string }>
          className={'border'}
          list={[{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }]}
          field='name'
        />
      </div>
    </>
  );
}

export default App;
