import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    }


    return(
        <nav>
            <h1>Kanye West</h1>
        <ul className="nav-links">
            <Link style={linkStyle} to="/">
            <li>Home</li>
            </Link>
            <Link style={linkStyle} to="/music">
            <li>Music</li>
            </Link>
            <Link style={linkStyle} to="/fashion">
            <li>Fashion</li>
            </Link>
        </ul>
        </nav>
    )
}

export default NavBar;