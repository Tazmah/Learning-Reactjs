import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    const decrease = () => {
        setCount(count - 1)
    }
    return { count, increment, resetCount, decrease }
}