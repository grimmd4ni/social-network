import React from 'react'
import "./dialoges.css"
import {NavLink} from "react-router-dom"
import DialogesItem from "./dialogesItem/dialogesItem.jsx"
import Message from "./message/message.jsx"

let messageText=React.createRef()

function Dialoges(props) {
  let addMessage=()=>{
    props.addMessage(messageText.current.value)
  }
  let onMessageChange=()=>{
    props.onMessageChange(messageText.current.value)
    console.log(props)
  }
    return (
        <div className="dialoges">
          <div className="dialoge">
            
            {props.dialogeNames.map((e)=>
            <DialogesItem name={e.name} id={e.id}/>
            )}
            
            
          </div>
          <div className="messages">
                  
                  {props.messageItems.map((e)=>
                  <Message message={e.message} id={e.id}/>
                  )}
          </div>
          <div className="inputs">
                  <input onChange={onMessageChange} ref={messageText} type="text" placeholder='type your message' />
                  <button onClick={addMessage}>Submit</button>
          </div>
          
        </div>
        
    );
  }
  
  export default Dialoges;