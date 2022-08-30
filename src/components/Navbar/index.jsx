import React from 'react';
import classes from './Navbar.module.css'
import NavbarLink from './NavbarLink';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={classes.links}>
            <Link to="brewery"><NavbarLink>Barbarian <br/>Brewery</NavbarLink></Link>
            <Link to="beer"><NavbarLink>Barbarian <br/>Beer</NavbarLink></Link> 
            <Link to="hops"><NavbarLink>Barbarian <br/>Hops</NavbarLink></Link> 
            <Link to="laboratory"><NavbarLink>Barbarian <br/>Laboratory</NavbarLink></Link>
        </nav>
    );
}

export default Navbar;
