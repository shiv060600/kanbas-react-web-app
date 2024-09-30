import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control" type="text" />
      <input placeholder="password" type="password"  className="form-control"/>
      <input placeholder="verify password" type="password" className="form-control" />
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary" > Sign up </Link>
      <br />
      <Link to="/Kanbas/Account/Signin" >Sign in</Link>
    </div>
);}
