import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-navigation">
      {/* Show Signin and Signup links if not signed in */}
      {!currentUser && (
        <>
          <Link to={`/Kanbas/Account/Signin`} className="text-decoration-none text-danger fs-5">
            Signin
          </Link>
          <br />
          <Link to={`/Kanbas/Account/Signup`} className="text-decoration-none text-danger fs-5">
            Signup
          </Link>
          <br />
        </>
      )}
      {/* Show Profile link if signed in */}
      {currentUser && (
        <Link to={`/Kanbas/Account/Profile`} className="text-decoration-none text-danger fs-5">
          Profile
        </Link>
      )}
    </div>
  );
}