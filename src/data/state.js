import {reRenderTree} from './../render.js'

let state={
    postsItems:[
        {message:"elon", name:"space", id:"1", likes:"46"},
        {message:"123", name:"number", id:"2", likes:"32"},
        {message:"zxcvzx", name:"Elon", id:"3", likes:"54"}
      ],

    newPostText:"hello",
      
    dialogeNames:[
        {name:"brown",id:"1"},
        {name:"bob",id:"2"},
        {name:"lawrence",id:"3"}
      ],
      
      messageItems:[
      {message:"Hi, how are you", id:"1"},
      {message:"Nice, and you", id:"2"},
      {message:"Hi, im also felling nice", id:"3"}
      ],

      friends:[
        {name:"lawrence",ava:"1"},
        {name:"bob",ava:"1"},
        {name:"jack",ava:"1"}
      ]
}

export let onPostChange=(text)=>{
  state.newPostText=text
  reRenderTree(state)
}

export let addPost=(postText)=>{
  let newPost={
      message:postText,
      name:"Bob",
      id:4,
      likes:124
  }
  state.postsItems.unshift(newPost)
  console.log(state)
  reRenderTree(state)
}

export let addMessage=(message)=>{
    let newMessage={
      message:message,
      id:4,
    }
    let newName={
      name:"Bob",
      id:4,
    }
    state.messageItems.push(newMessage)
    state.dialogeNames.push(newName)
    console.log(state)
    reRenderTree(state)
}


export default state
