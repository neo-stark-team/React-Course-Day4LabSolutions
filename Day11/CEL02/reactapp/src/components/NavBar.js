import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = ({title}) =>{
 
        return (
            <nav className="navbar  bg-primary">
            <h1>
             {title}
            </h1>
            <ul>
                <li>
                <Link to='/singers'>Singers</Link>
                </li>
                <li>
                <Link to='/albums'>Albums</Link>
                </li>
                <li>
                <Link to='/'>Home</Link>
                </li>
            </ul>
          </nav>
        )
    
}
 Navbar.defaultProps={
  title:'Music World'
};
export default Navbar;