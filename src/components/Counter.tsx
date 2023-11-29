import React, {useState} from 'react';
import "./Counter.module.scss";
import classes from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1)
    return (
        <div>
            <button onClick={onIncrement} className={classes.btn}>click</button>
            {count}
        </div>
    );
};
