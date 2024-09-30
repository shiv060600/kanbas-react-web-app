import React from "react";
import { Navigate,Routes,Route } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Home from "./Home/index";
import Modules from "./Modules/index";
import Assignments from "./Assignments/index";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
export default function Courses(){
    return(
        <div id = "wd-courses">
            <h2>Course1234</h2>
            <hr />
            <table>
                <tr>
                    <td valign="top">
                        <CoursesNavigation/>
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules/>} />
                            <Route path="Assignments" element={<Assignments/>} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor/>} />
                            <Route path="People" element={<PeopleTable/>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}