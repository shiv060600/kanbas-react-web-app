import React from 'react';
import Signin from './Signin.tsx';
import Profile from './Profile.tsx';
import Signup from './Signup.tsx';
import AccountNavigation from './Navigation.tsx'
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
  
  
