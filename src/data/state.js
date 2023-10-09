const ADD_POST="Add-Post"
const ADD_MESSAGE="Add-Message"
const ON_POST_CHANGE="Post-Change"
const ON_MESSAGE_CHANGE="Message-Change"


let store={

   _state:{
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

          newMessageText:"hi",

          friends:[
            {name:"lawrence",ava:"1"},
            {name:"bob",ava:"1"},
            {name:"jack",ava:"1"}
          ]
    },
  dispatch(action){
    if (action.type===ADD_POST){
      let newPost={
        message:this._state.newPostText,
        name:"Bob",
        id:4,
        likes:124
    }
    this._state.postsItems.unshift(newPost)
    console.log(this._state)
    this.reRenderTree(this._state)
    }
    else if(action.type===ON_POST_CHANGE){
      this._state.newPostText=action.text
      this.reRenderTree(this._state)
    }
    else if(action.type===ADD_MESSAGE){
      let newMessage={
        message:this._state.newMessageText,
        id:4,
      }
      let newName={
        name:"Bob",
        id:4,
      }
      this._state.messageItems.push(newMessage)
      this._state.dialogeNames.push(newName)
      console.log(this._state)
      this.reRenderTree(this._state)
    }
    else if(action.type===ON_MESSAGE_CHANGE){
      this._state.newMessageText=action.text
      this.reRenderTree(this._state)
    }
  },

  getState(){
    return this._state
  },

   reRenderTree(){
      console.log("its a fake function")
  },

  subscribe(observer){
      this.reRenderTree=observer
  },
}

export default store

export let onPostChangeAC=(text)=>{
  return{
    type:"Post-Change",
    text:text
  }
}
export let addPostAC=()=>{
  return{
    type:"Add-Post",
    id:1
  }
}

export let onMessageChangeAC=(text)=>{
  return{
    type:"Message-Change",
    text:text
  }
}
export let addMessageAC=()=>{
  return{
    type:"Add-Message",
    id:1
  }
}