import { Link, useParams,useLocation } from "react-router-dom";
import React from "react";
import {courses} from "../Database";
export default function CoursesNavigation(){
    const { cid } = useParams();  // Dynamically get the course ID from the URL
    const location = useLocation();  // Get the current path

    const links = [
        { id: "wd-course-home-link", name: "Home", path: `/Kanbas/Courses/${cid}/Home` },
        { id: "wd-course-modules-link", name: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
        { id: "wd-course-piazza-link", name: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
        { id: "wd-course-zoom-link", name: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
        { id: "wd-course-quizzes-link", name: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
        { id: "wd-course-assignments-link", name: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
        { id: "wd-course-grades-link", name: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
        { id: "wd-course-people-link", name: "People", path: `/Kanbas/Courses/${cid}/People` }, ]
    return(
            <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
                {links.map((link) => (
                <Link
                    key={link.id}
                    id={link.id}
                    to={link.path}
                    className={`list-group-item border border-0 ${location.pathname === link.path ? "text-dark" : "text-danger"}`}
                    >
                    {link.name}
                </Link>
                ))}
            </div>
        

    );
}