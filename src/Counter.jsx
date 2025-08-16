import { use, useEffect } from "react";

const Counter = ({ count, data }) => {

    useEffect(() => {
        console.log("mounting phase")
    }, [])

    useEffect(()=>{
    console.log("updating phase")
    },[count])

    useEffect(()=>{
        return ()=>{
            console.log("unmounting phase");
        }
    },[])

    return (
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}

export default Counter;