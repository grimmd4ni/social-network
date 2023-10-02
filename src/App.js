import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx'
import Profile from './components/profile/profile.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Dialoges from './components/dialoges/dialoges.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App(props) {
  return (
    <div className="Wrapper">
        <BrowserRouter>
              <Header/>
              <Navbar friends={props.state.friends}/>
              <Switch>
                  <Route exact path="/" render={()=><Profile postsItems={props.state.postsItems} addPost={props.addPost} newPostText={props.state.newPostText} onPostChange={props.onPostChange} />}></Route>
                  <Route exact path="/profile" render={()=><Profile postsItems={props.state.postsItems} addPost={props.addPost} newPostText={props.state.newPostText} onPostChange={props.onPostChange} />}></Route>
                  <Route exact path="/dialoges" render={()=><Dialoges dialogeNames={props.state.dialogeNames} messageItems={props.state.messageItems} addMessage={props.addMessage} />}></Route>
              </Switch>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
