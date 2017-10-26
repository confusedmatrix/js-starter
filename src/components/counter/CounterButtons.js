import React from 'react'

export const CounterButtons = ({ increment, decrement, reset }) => (
    <div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
    </div>
)

export default CounterButtons