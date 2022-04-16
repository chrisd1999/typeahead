import React from "react";

export default function useDebounce<T>(debounceValue: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState(debounceValue);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(debounceValue);
    }, delay);

    return () => clearTimeout(timeout);
  }, [debounceValue]);

  return debouncedValue;
}
