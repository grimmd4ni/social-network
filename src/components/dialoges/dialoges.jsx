import React from 'react'
import "./dialoges.css"
function Dialoges() {
    return (
        <div className="dialoges">
          <div class="message">
                <p>Brown</p>
                <p>Hi, how's it going </p>
          </div>
          <div class="message">
                <p>Jackson</p>
                <p>Its going nice</p>
          </div>
          <div class="message">
                <p>Brown</p>
                <p>Fine </p>
          </div>
          <input type="text" placeholder='type your message' />
          <button>Submit</button>
        </div>
        
    );
  }
  
  export default Dialoges;