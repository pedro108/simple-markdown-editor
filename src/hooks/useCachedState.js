import { useState } from "react";

function useCachedState(cacheKey, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    return localStorage.getItem(cacheKey) || initialValue;
  });

  function setValue(newValue) {
    localStorage.setItem(cacheKey, newValue);
    setStoredValue(newValue);
  }

  return [storedValue, setValue];
}

export default useCachedState;
