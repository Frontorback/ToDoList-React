import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="nav">
            <div >NAVIGATION</div>
            <NavLink activeClassName='active' to='/'  exact>Home</NavLink>
            <NavLink activeClassName='active' to='/second'  >Second</NavLink>

        </div>
    )
}
export default Header