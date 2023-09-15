import logo from '../../images/spacex.jpg'
import React from 'react'
import './header.css';

function Header() {
  return (
    <div className="header">
        <img src={logo} alt="" className="headerImg" />
    </div>
  );
}

export default Header;