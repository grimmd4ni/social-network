import React from 'react'
import './profile.css';
import Posts from "./posts/posts.jsx"
import Me from "./profileInfo/profileInfo.jsx"
function Profile() {
  return (
    <div className="profile">
      <Me/>
      <Posts/>
        
    </div>
  );
}

export default Profile;