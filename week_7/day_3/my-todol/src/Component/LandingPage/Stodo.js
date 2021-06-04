import React from 'react'

const Stodo = (props) => {


    return ( 
            <>
            <li>{props.text}
                <span>
                    <button onClick={()=>{
                      props.onSelect(props.id)  
                    }}>x</button>
                </span>
            </li>
        </>
    )}

export default Stodo;