import React from 'react'
import "./dialoges.css"
import {NavLink} from "react-router-dom"
import DialogesItem from "./dialogesItem/dialogesItem.jsx"
import Message from "./message/message.jsx"

let dialogeNames=[
    {name:"brown",id:"1"},
    {name:"bob",id:"2"},
    {name:"lawrence",id:"3"}
]
let messageItems=[
  {message:"Hi, how are you", id:"1"},
  {message:"Nice, and you", id:"2"},
  {message:"Hi, im also felling nice", id:"3"}
]
function Dialoges() {
    return (
        <div className="dialoges">
          <div className="dialoge">
            
            {dialogeNames.map((e)=>
            <DialogesItem name={e.name} id={e.id}/>
            )}
            
            
          </div>
          <div className="messages">
                  
                  {messageItems.map((e)=>
                  <Message message={e.message} id={e.id}/>
                  )}
          </div>
          <div className="inputs">
                  <input type="text" placeholder='type your message' />
                  <button>Submit</button>
          </div>
          
        </div>
        
    );
  }
  
  export default Dialoges;