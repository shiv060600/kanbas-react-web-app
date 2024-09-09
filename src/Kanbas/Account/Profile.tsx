import React from "react";
import { Link } from "react-router-dom";
export default function Profile(){
    return( 
        <div id = 'wd-profile-screen'>
            <h3>Profile</h3>
            <input id = 'wd-username' type="text" placeholder= "username" value= 'alice' />
            <br />
            <input id = 'wd-password' type="password" placeholder= "password" value= '123' />
            <br />
            <input id = 'wd-firstanem'type="text" placeholder= "firstname" value= "Alice"/>
            <br />
            <input id = 'wd-lastname' type="text" placeholder= "lastname" value = 'Wonderland'/>
            <br />
            <input id = 'wd-dob' type="date" value= '2000-01-01' />
            <br />
            <input id = 'wd-email' type="email" value ='alice@wonderland' />
            <br />
            <select id="wd-role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select><br/>
            <Link to="/Kanbas/Account/Signin" >Sign out</Link>
         </div>

    )
}