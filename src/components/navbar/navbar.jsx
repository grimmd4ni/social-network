import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';
import pfp1 from '../../images/pfp1.jfif'

function Navbar(props) {
  return (
    <div className="navbar">
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/dialoges">Dialoges</NavLink>
        <div className="friends">
            <h2>Friends</h2>
            {props.friends.map((e)=>
                <NavLink to="/dialoges">
                    <img src={pfp1} alt="" />
                    <br/>
                    <p>{e.name}</p>
                </NavLink>
            )

            }
        </div>
    </div>
  );
}

export default Navbar;