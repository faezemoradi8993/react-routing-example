import React from 'react';
import {Link ,BrowserRouter as Router} from 'react-router-dom';


function Nav() {
  return (
    <div className="Nav">
      <nav>
            <h1>logo</h1>
          
                <ul className="nav-links">
                  <Link to="/about">
                      <li>About</li>
                  </Link>
                  <Link to="/shop">
                      <li>Shop</li>
                  </Link>
                  
                </ul>
           
      </nav>
    </div>
  );
}

export default Nav;

