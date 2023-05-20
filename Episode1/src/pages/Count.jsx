import React from 'react'
import { useCounter } from '../useCounter'
const Count = () => {
    const { count, increment, resetCount, decrease } = useCounter()
    const { count: count1, increment: increment1, resetCount: resetCount1, decrease: decrease1 } = useCounter()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>
                Increase
            </button>
            <span> {" "} </span>
            <button onClick={resetCount}>
                Increase
            </button>
            <span> {" "} </span>
            <button onClick={decrease}>
                Decrease
            </button>
            <hr />
            <br />
            <h1>{count1}</h1>
            <button onClick={increment1}>
                Increase
            </button>
            <span> {" "} </span>
            <button onClick={resetCount1}>
                Increase
            </button>
            <span> {" "} </span>
            <button onClick={decrease1}>
                Decrease
            </button>
        </div>
    )
}

export default Count