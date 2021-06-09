import React, {useState,useEffect} from 'react'
import axios from "axios"
import GitFile2 from './GitFile2'

const GitApi =()=>{

    const [inputList,setInputList] = useState("")
    const [names,setName] = useState([])
    const [pic,setPic] = useState([])
    const details=() => {
        
        async function getApi(){
            const res =await axios.get(`https://api.github.com/users/${inputList}`)
            console.log(res.data.name)
            const a = res.data.name
            const b =  `${res.data.avatar_url}`
            console.log(b)
           setName((oldItems)=>{
               return[...oldItems,a]
           })

           setPic((oldItems)=>{
               return [...oldItems,b]
           })
           
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
                    names.map((e)=>{
                        return <GitFile2 
                                    text = {e}
                                />
                    })
                }
            </oL>

            <oL>
                {

                    pic.map((e)=>{
                        return <li><img src={e}/></li>
                    })
                }
            </oL>
        </>
    )
}
export default GitApi