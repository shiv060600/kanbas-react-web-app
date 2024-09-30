import { Link } from "react-router-dom";
import React from "react";
export default function Signin(){
    return (
        <div id = 'wd-signin-screen'>
            <h3> Sign In</h3>
            <input id = 'wd-username' placeholder="username" className="form-control mb-2"/>
            
            <input id = "wd-password" placeholder= "password" type= "password" className="form-control mb-2"/>
            
            <Link id = 'wd-signin-button' to = '/Kanbas/Dashboard' className="btn btn-primary w-100">Sign In</Link>
            
            <Link id = 'wd-signup-link' to = '/Kanbas/Account/Signup'>Sign up</Link>
        </div>
    );
}