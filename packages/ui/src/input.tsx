import { useState, useMemo, useCallback } from 'react';

interface Itemtype {
  [key: string]: string;
}

function useInput<T extends Itemtype>(list: T[] = [], field: string) {
  const [value, setValue] = useState('');
  const onChange = useCallback((e: { target: { value: string } }) => {
    setValue(e.target.value);
  }, []);
  const filteredList: T[] = useMemo(() => {
    return list.filter(item => item[field].includes(value));
  }, [list, value, field]);

  return { value, filteredList, onChange };
}

export function Input<T extends Itemtype>({
  className,
  list,
  field,
}: {
  className: string;
  list: T[];
  field: string;
}) {
  const { value, filteredList, onChange } = useInput<T>(list, field);

  return (
    <>
      <input className={className} value={value} onChange={onChange} />
      <div>
        <ul>
          {filteredList.map((item, index) => {
            return (
              <li key={index}>
                {field}: {item[field]}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
