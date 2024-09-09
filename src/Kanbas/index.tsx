import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom'
import Account from '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/Account/index.tsx' 
import Dashboard from "/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/dashboard.tsx"
import KanbasNavigation from "/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/Nagivation.tsx";
import Courses from "/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/Courses/index.tsx";
export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <table>
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Account"/>} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard />}/>
              <Route path="/Courses/:cid/*" element={<Courses />}/>
              <Route path="/Calendar" element = {<h1>Calendar</h1>}/>
              <Route path="/Inbox" element = {<h1>Inbox</h1>}/>
            </Routes>
            </td>
        </tr>
        </table>
      </div>
  );}
  
