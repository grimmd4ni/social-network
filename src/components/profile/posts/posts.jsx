import React from 'react'
import elon from '../../../images/elonmusk.jpg'
import elonMini from '../../../images/elonmusk.jpg'
import Post from "./post/post.jsx"

let postText=React.createRef()

function Posts(props) {
  let addPost=()=>{
    props.addPost(postText.current.value)
  }
  let onPostChange=()=>{
    props.onPostChange(postText.current.value)
    console.log(props)
  }
  return (
      <div className="posts">
        <input onChange={onPostChange} value={props.newPostText} ref={postText} className="profileInput" type="text" placeholder='type the post' />
        <button onClick={addPost} className="addPost">Add post</button>
        {props.postsItems.map((e)=>
            <Post message={e.message} name={e.name} id={e.id} likes={e.likes}/>
            )}
      </div>
  );
}

export default Posts;