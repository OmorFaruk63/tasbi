import { useState } from "react";
import './Tasbih.css';

function Tasbih(props) {

    console.log(props);
    const { sub, bgcolor } = props
    const [count, setCount] = useState(0)
    function incriment() {
        if (count < 10) {
            setCount(count + 1)
        }
    }
    function descriment() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    function reset() {
        setCount(0)
    }
    return (
        <div className="card" style={{ backgroundColor: bgcolor }}>
            <h1>{sub}: {count}</h1>
            <button onClick={incriment}>count</button>
            <button onClick={descriment}>descriment</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Tasbih;
