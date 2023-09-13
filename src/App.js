import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx'
import Profile from './components/profile/profile.jsx'
import Navbar from './components/navbar/navbar.jsx'


function App() {
  return (
    <div className="Wrapper">
        <Header/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;
