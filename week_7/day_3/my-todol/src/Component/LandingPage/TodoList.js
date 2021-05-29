import React, {useState} from 'react'

const TodoList=() =>{

    const [inputList,setInputList] = useState("")
    const [items,setItems] = useState([])
    const itemEvent =(e) =>{
        setInputList(e.target.value)
    };

    const listItem =()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList]
        })
        setInputList('')
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                        <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="add an Item" onChange={itemEvent} value={inputList} />
                    <button onClick={listItem}>+</button>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {items.map((itemVal)=>{
                            
                            return <li>{itemVal}
                                    <span>
                                        <button>x</button>
                                    </span>
                                </li>
                        })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}



export default TodoList
    

