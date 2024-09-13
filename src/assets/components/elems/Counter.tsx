import useCounter from "@/assets/hooks/useCounter";
import { FC } from "react";

type CounterProps = {
  initNumber?: number;
  maxNumber?: number;
  speed?: number;
}

const Counter:  FC<CounterProps> = ({
  initNumber,
  maxNumber,
  speed
}) => {
  const count = useCounter(initNumber, maxNumber, speed)
  return (
    <span>{count}</span>
  )
}

export default Counter