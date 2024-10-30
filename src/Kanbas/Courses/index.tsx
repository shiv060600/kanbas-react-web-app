import React from "react";
import { Navigate,Routes,Route,useParams,useLocation } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Home from "./Home/index";
import Modules from "./Modules/index";
import Assignments from "./Assignments/index";
import AssignmentEditor from "./Assignments/AssignmentEditor"
import PeopleTable from "./People/Table";
//import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa";
export default function Courses({ courses }: { courses: any[]; }){
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid)
    return(
        <div id = "wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1"/>
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
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
                            {/* <Route path="Assignments/:aid" element={<AssignmentEditor/>} /> */}
                            <Route path="People" element={<PeopleTable/>} />
                        </Routes>
                    
                    
                    </td>
                </tr>
            </table>
        </div>
    );
}