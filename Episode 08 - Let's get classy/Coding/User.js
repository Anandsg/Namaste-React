import React from "react";
import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1,)
    }
    return (
        <div>
            <h3>count: {count}</h3>
            <h2>{props.name}</h2>
            <h3>State: KA</h3>
            <button onClick={increment}>increase</button>
        </div>
    );
};

export default User;