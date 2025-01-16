import React, { useState, useMemo, useCallback } from 'react';

function useInput<T>(list: T[] = [], field: string) {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  const filteredList = useMemo(() => {
    return list.filter(item => item[field].includes(value));
  }, [list, value, field]);

  return { value, filteredList, onChange };
}

export function Input<T>({
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
