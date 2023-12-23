import React from 'react'
import {MdDeleteOutline} from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'


const TodoItem = (props) => {
  return (
    <div className='todoitem'>
        <div >
            <h4 className={props.complete ? 'complete' : "notcomplete"}>{props.text}</h4>
            <div>
            <button style={{textAlign:"end"}} onClick={() => props.handleDelete(props.id)} ><MdDeleteOutline /> </button>
            <button onClick={() => props.handleComplete(props.id)}><AiOutlineCheckCircle /></button>

            </div>
         
        </div>

    </div>
  )
}

export default TodoItem