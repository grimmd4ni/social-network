import React from 'react'
import elon from '../../../images/elonmusk.jpg'
import elonMini from '../../../images/elonmusk.jpg'
import Post from "./post/post.jsx"
function Posts() {
  return (
      <div className="posts">
        <input className="profileInput" type="text" placeholder='type the post' />
        <button className="addPost">Add post</button>
        <Post message="elon" name="space"/>
        <Post message="123" name="number"/>
        <Post message="zxcvzx" name="Elon"/>
      </div>
  );
}

export default Posts;