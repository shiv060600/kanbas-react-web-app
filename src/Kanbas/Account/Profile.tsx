import React from "react";
import { Link } from "react-router-dom";
export default function Profile(){
    return( 
        <div id = 'wd-profile-screen'>
            <h3>Profile</h3>
            <input id = 'wd-username' type="text" className="form-control" placeholder= "username" value= 'alice' />
            <br />
            <input id = 'wd-password' type="password" className="form-control" placeholder= "password" value= '123' />
            <br />
            <input id = 'wd-firstanem'type="text" className="form-control" placeholder= "firstname" value= "Alice"/>
            <br />
            <input id = 'wd-lastname' type="text" className="form-control" placeholder= "lastname" value = 'Wonderland'/>
            <br />
            <input id = 'wd-dob' type="date" className="form-control" value= '2000-01-01' />
            <br />
            <input id = 'wd-email' type="email" className="form-control" value ='alice@wonderland' />
            <br />
            <select id="wd-role" className="form-control">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <br/>
            <Link to="/Kanbas/Account/Signin" className="btn btn-danger">Sign out</Link>
         </div>

    )
}