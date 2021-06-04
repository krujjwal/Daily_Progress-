import React, {useState} from 'react'
import Stodo from './Stodo'


const TodoList=() =>{

    const [inputList,setInputList] = useState("")
    const [items,setItems] = useState([])
    const [tick,setTick] = useState([])
    const [a,setA] = useState([])
    

    const itemEvent =(e) =>{
        setInputList(e.target.value)
    };

    const listItem =()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList]
        })

        setInputList('')
    };

    const cancelB =(id) =>{
       
        setItems((oldItems)=>{
            return oldItems.filter((_arrEl,index)=>{
                return index !== id 

            })
        })

        setTick((oldTick)=>{
            return items.filter((_arrEl,index)=>{
                return index == id
            })
        })



        setA((oldA=>{
            return[...oldA,tick]
        }))
    }

    return (
        <>
            <div className="main_div" style={{display:'flex'}}>
                <div className="center_div">
                    <br />
                        <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="add an Item" onChange={itemEvent} value={inputList} />
                    <button onClick={listItem}>+</button>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {items.map((itemVal,index)=>{
                            
                           return <Stodo 
                                key = {index}
                                id = {index}
                                text = {itemVal}
                                onSelect  = {cancelB}
                            />
                        })
                        }
                    </ol>
                </div>

                <div style={{marginTop:"200px",marginLeft:"100px"}}>
                    <h3>Completed</h3>
                    <ol>
                        {a.map((e)=>{
                            return <li>{e}</li>
                        })}
                    </ol>
                </div>
            </div>
            
        </>
    )
}



export default TodoList
    

