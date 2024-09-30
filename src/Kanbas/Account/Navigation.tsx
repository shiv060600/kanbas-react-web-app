import { Link } from "react-router-dom";
import React from "react";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link to={`/Kanbas/Account/Signin`} className="text-decoration-none text-danger fs-5"> Signin  </Link> <br/>
      <Link to={`/Kanbas/Account/Signup`} className="text-decoration-none text-danger fs-5" > Signup  </Link> <br/>
      <Link to={`/Kanbas/Account/Profile`}className="text-decoration-none text-danger fs-5"> Profile </Link> <br/>
    </div>
);}

