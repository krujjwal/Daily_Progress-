import React, {useState,useEffect} from 'react'
import axios from "axios"


const GitApi =()=>{

    const [inputList,setInputList] = useState("")
    const [name,setName] = useState([])
    const details=() => {
        
        async function getApi(){
            const res =await axios.get(`https://api.github.com/users/${inputList}`)
            console.log(res.data.name)
           setName(res.data.name)
        }
        getApi()
    }

    return(
        <>
            <h1>you chose userName: {inputList}</h1>
            {/* <h1>you chose Name: {name}</h1> */}
            {/* <h1>you chose userName: {}</h1> */}
            <input type="text" placeholder="type userName" onChange={(event)=>{
                setInputList(event.target.value)
            }}/>

            <button onClick={details}>Click For Details</button>

            <oL>
                {
                    name.map((e)=>{
                        return <li>{e}</li>
                    })
                }
            </oL>
        </>
    )
}
export default GitApi