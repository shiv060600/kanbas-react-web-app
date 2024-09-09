import React from 'react';
import Signin from '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/Account/Signin.tsx';
import Profile from '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/Account/Profile.tsx';
import Signup from '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/Account/Signup.tsx';
import AccountNavigation from '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/Account/Navigation.tsx'
import { Routes, Route, Navigate } from "react-router";
export default function Account() {
    return (
      <div id="wd-account-screen">
        <table>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/"
                       element={<Navigate to="/Kanbas/Account/Signin" />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup />} />
              </Routes>
            </td>
          </tr>
        </table>
      </div>
  );}
  
  
