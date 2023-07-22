import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav>
      <div className="navigasi">
          <h1 className="h-1">.</h1>
          <div className="text-wrapper-3">
            <div className="b-link">
              <Link to='/'>Home</Link>
            </div>
            <div className="b-link">
              <Link to='/dashboard'>Dashboard</Link>
            </div>
          </div>
        </div>
      
      {/* <div>
      <Link to='/'>Home</Link>
      <Link to='/Register'>Register</Link>
      <Link to='/Login'>Login</Link>
        
      </div> */}
    </nav>
    );
  }
}

export default Navbar;
