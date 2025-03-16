import { useEffect, useState } from "react";

const Counter = ({ initNumber = 24, delay = 75 }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (!(initNumber <= number)) {
        setTimeout(() => {
          setNumber((prev) => prev + 1);
        }, delay);
      }
    }, delay);
  }, [number]);

  return <span>{number}</span>;
};

export default Counter;
