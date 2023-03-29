import React from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css'

function Navigation({isAuth, toggleAuth}) {
    return (
        <nav>
            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                {isAuth === true ? <> <li> <NavLink to="/blog"> Blogposts </NavLink> </li>
                <li> <NavLink to="/uitloggen"> Uitloggen</NavLink> </li> </> : <li> <NavLink to="/login"> Login </NavLink> </li>}
            </ul>
        </nav>
    );

}

export default Navigation;