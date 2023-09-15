import React from 'react'
import './profile.css';
import elon from '../../images/elonmusk.jpg'
import elonMini from '../../images/elonmusk.jpg'
function Profile() {
  return (
    <div className="profile">
      <div className="me">
        <img src={elon} alt="" />
        <p>Elon Musk</p>
      </div>
      <div className="posts">
        <input className="profileInput" type="text" placeholder='type the post' />
        <button className="addPost">Add post</button>
        <div className="post">
            <img src={elonMini} alt="" />
            <span >Elon Musk</span>
            <p>Some text</p>
        </div>
      </div>
        
    </div>
  );
}

export default Profile;