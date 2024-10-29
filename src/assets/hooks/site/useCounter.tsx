import { useEffect, useState } from "react"
  
const useCounter = (
  initNumber = 0,
  maxNumber = 100,
  speed = 1000
) => {
  const [count, setCount] = useState(initNumber);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= maxNumber) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, speed);
    return () => clearInterval(interval);
  }, []);
  return count;
}
export default useCounter