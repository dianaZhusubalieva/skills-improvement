import React, {useState} from 'react';
import "./styles.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1)
    return (
        <div>
            <button onClick={onIncrement} className={"green-button"}>click</button>
            {count}
        </div>
    );
};
