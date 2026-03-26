import { useState, useEffect } from 'react';
export function useDebounce<T>(value: T, delay: number): T {
  const [db, setDb] = useState(value);
  useEffect(() => {
    const h = setTimeout(() => setDb(value), delay);
    return () => clearTimeout(h);
  }, [value, delay]);
  return db;
}
