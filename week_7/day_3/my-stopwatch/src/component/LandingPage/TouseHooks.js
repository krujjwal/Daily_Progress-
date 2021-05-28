import React,{useState,useEffect} from 'react'
import './StopW.js'

const TouseHooks = () => {
    const [count,setCount]=useState(0);
    useEffect(() => {
        console.warn(count)
    },[count==2])
    return (
        <div>
            <button onClick={(()=>{setCount(count+1);})}>update</button>
            <h2>{count}</h2>
        </div>
    )
}

export default TouseHooks
