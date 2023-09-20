import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx'
import Profile from './components/profile/profile.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Dialoges from './components/dialoges/dialoges.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className="Wrapper">
        <BrowserRouter>
              <Header/>
              <Navbar/>
              <Switch>
                  <Route exact path="/" component={Profile}></Route>
                  <Route exact path="/profile" component={Profile}></Route>
                  <Route exact path="/dialoges" component={Dialoges}></Route>
              </Switch>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
