import React from 'react'
import {NavLink} from "react-router-dom"
function DialogesItem(props) {
    return (
        <div className="user">
            <NavLink to={`/dialoges/${props.id}`}>{props.name}</NavLink>
            
        </div>
            
            
        
    );
  }
  
  export default DialogesItem;