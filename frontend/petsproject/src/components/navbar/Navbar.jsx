import React from "react";
import {FaDog} from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav>
           <div>
              <FaDog className="logo"/>
           </div>
           <div>
              <button>Log In</button>
              <button>Sign Up</button>
           </div>
        </nav>
    )
}