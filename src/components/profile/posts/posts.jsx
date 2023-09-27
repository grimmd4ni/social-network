import React from 'react'
import elon from '../../../images/elonmusk.jpg'
import elonMini from '../../../images/elonmusk.jpg'
import Post from "./post/post.jsx"

let postsItems=[
    {message:"elon", name:"space", id:"1", likes:"46"},
    {message:"123", name:"number", id:"2", likes:"32"},
    {message:"zxcvzx", name:"Elon", id:"3", likes:"54"}
]
function Posts() {
  return (
      <div className="posts">
        <input className="profileInput" type="text" placeholder='type the post' />
        <button className="addPost">Add post</button>
        {postsItems.map((e)=>
            <Post message={e.message} name={e.name} id={e.id} likes={e.likes}/>
            )}
      </div>
  );
}

export default Posts;