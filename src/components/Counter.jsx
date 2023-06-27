import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <button className="button" onClick={handleClick}>
            {count}
        </button>
    );
}

export default Counter;
