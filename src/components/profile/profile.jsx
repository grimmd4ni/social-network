import React from 'react'
import './profile.css';
import elon from '../../images/elonmusk.jpg'
import Posts from "./posts/posts.jsx"
function Profile() {
  return (
    <div className="profile">
      <div className="me">
        <img src={elon} alt="" />
        <p>Elon Musk</p>
      </div>
      <Posts/>
        
    </div>
  );
}

export default Profile;