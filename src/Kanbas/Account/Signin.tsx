import { Link } from "react-router-dom";
import React from "react";
export default function Signin(){
    return (
        <div id = 'wd-signin-screen'>
            <h3> Sign In</h3>
            <input id = 'wd-username' placeholder="username"/>
            <br />
            <input id = "wd-password" placeholder= "password" type= "password"/>
            <br />
            <Link id = 'wd-signin-button' to = '/Kanbas/Account/Profile'>Sign In</Link>
            <br />
            <Link id = 'wd-signup-button' to = '/Kanbas/Account/Signup'>Signup</Link>
        </div>
    );
}