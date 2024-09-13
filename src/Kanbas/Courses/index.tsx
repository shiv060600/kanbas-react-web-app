import React from "react";
import { Navigate,Routes,Route } from "react-router-dom";
import CoursesNavigation from "./Navigation.tsx";
import Home from "./Home/index.tsx";
import Modules from "./Modules/index.tsx";
import Assignments from "./Assignments/index.tsx";
import AssignmentEditor from "./Assignments/Editor.tsx";
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
                            <Route path="Home" element={<h2><Home /></h2>} />
                            <Route path="Modules" element={<h2><Modules/></h2>} />
                            <Route path="Assignments" element={<h2><Assignments/></h2>} />
                            <Route path="Assignments/A1" element={<h2><AssignmentEditor/></h2>} />
                            <Route path="Assignments/A2" element={<h2><AssignmentEditor/></h2>} />
                            <Route path="Assignments/A3" element={<h2><AssignmentEditor/></h2>} />
                            <Route path="People" element={<h2>People</h2>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}