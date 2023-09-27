import React from 'react'
import elon from '../../../images/elonmusk.jpg'
function profileInfo() {
  return (
      <div className="me">
        <img src={elon} alt="" />
        <p>Elon Musk</p>
      </div>
  );
}

export default profileInfo;