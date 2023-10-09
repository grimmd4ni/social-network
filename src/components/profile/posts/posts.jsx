import React from 'react'
import elon from '../../../images/elonmusk.jpg'
import elonMini from '../../../images/elonmusk.jpg'
import Post from "./post/post.jsx"
import {addPostAC, onPostChangeAC} from "../../../data/state.js"

let postText=React.createRef()

function Posts(props) {
  let addPost=()=>{
    // props.addPost(postText.current.value)
    props.dispatch(addPostAC())
  }
  let onPostChange=()=>{
    // props.onPostChange(postText.current.value)
    // console.log(props)
    props.dispatch(onPostChangeAC(postText.current.value))
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