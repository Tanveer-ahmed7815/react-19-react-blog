import { useEffect } from "react";

const Counter = ({ count, data }) => {

    const getCounter = () => {
        console.log("call only")
    }

    useEffect(() => {
        getCounter();
    }, [])

    return (
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}

export default Counter;