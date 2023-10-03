import {Link} from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
        <div>
            <Link to='' data-testid='main-link-testid'>Main</Link>
            <Link to='/about' data-testid='about-link-testid'>About</Link>
            <Link to='/users' data-testid='users-link-testid'>Users</Link>
            <Link to='/hello' data-testid='hello-link-testid'>Hello!</Link>
        </div>
    );
};

export default Navbar;
