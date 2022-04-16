import React from "react";

export default function <T>() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<T | []>([]);

  const fetch = React.useCallback(
    async (fetchPromise: Promise<any>): Promise<any> => {
      setIsLoading(true);
      setResults([]);

      const result = await fetchPromise;

      setResults(result);
      setIsLoading(false);
    },
    []
  );

  return {
    results,
    isLoading,
    fetch,
  };
}
