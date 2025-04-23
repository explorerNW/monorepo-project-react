import { useEffect, useState } from 'react';

export const useVisible = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('visibilitychange', () => {
      setVisible(document.visibilityState === 'visible');
    });
    return () => {
      window.removeEventListener('visibilitychange', () => {});
    };
  }, []);
  return { visible };
};
