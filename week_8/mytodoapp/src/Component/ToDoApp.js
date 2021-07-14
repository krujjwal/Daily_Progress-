import React, {useState} from 'react'

const ToDoApp=()=>{
    
    const [inputList,setInputList] = useState("")
    const [items,setitems] = useState([])

    const itemEvent =(e) =>{
        setInputList(e.target.value)
    };

    return(
        <>
            <p>TodoAPP</p>
            <input type="text" placeholder="add an Item" onChange={itemEvent} value={inputList} />
            <ol>
                {

                }
            </ol>
        </>
    )
}



export default ToDoApp