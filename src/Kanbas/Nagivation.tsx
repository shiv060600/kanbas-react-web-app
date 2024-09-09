import React from "react";
import { Link } from "react-router-dom";
export default function KanbasNavigation(){
    return(
        <div id = "wd-kanbas-navigation">
            <a href="https://www.northeastern.edu/" id = "wd-neu-link" target="_blank">Northeastern</a>
            <br />
            <Link id = "wd-account-link" to ="/Kanbas/Account">Account</Link>
            <br />
            <Link id = "wd-dashboard-link" to = "/Kanbas/Dashboard">Dashboard</Link>
            <br />
            <Link id = "wd-course-link" to = "/Kanbas/Courses">Courses</Link>
            <br />
            <Link id = "wd-calendar-link" to= "/Kanbas/Calendar">Calendar</Link>
            <br />
            <Link id = "wd-indbox-link" to= "/Kanbas/Inbox">Inbox</Link>
            <br />
            <Link id = "wd-labs-link" to= "/Labs">Labs</Link>
        </div>

    );
}