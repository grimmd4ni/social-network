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

  getState(){
    return this._state
  },

   reRenderTree(){
      console.log("its a fake function")
  },

   onPostChange(text){
    this._state.newPostText=text
    this.reRenderTree(this._state)
  },

  onMessageChange(text){
    this._state.newMessageText=text
    this.reRenderTree(this._state)
  },

  addPost(postText){
    let newPost={
        message:postText,
        name:"Bob",
        id:4,
        likes:124
    }
    this._state.postsItems.unshift(newPost)
    console.log(this._state)
    this.reRenderTree(this._state)
  },

  addMessage(message){
      let newMessage={
        message:message,
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
  },


  subscribe(observer){
      this.reRenderTree=observer
  },
}

export default store