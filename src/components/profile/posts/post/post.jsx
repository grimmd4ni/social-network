import React from 'react'
import elonMini from '../../../../images/elonmusk.jpg'
function Post(props) {
  return (
        <div className="post ">
            <img src={elonMini} alt="" />
            <span >{props.name}</span>
            <p>{props.message}</p>
            <span>{props.likes } Likes</span>
        </div>
  );
}

export default Post;