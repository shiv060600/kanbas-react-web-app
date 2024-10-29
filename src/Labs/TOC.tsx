import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to="/Labs" className="nav-link">Labs</Link>
            </li>
            <li className="nav-item">
                <Link to="/Labs/Lab1" className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</Link>
            </li>
            <li className="nav-item">
                <Link to="/Labs/Lab2" className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</Link>
            </li>
            <li className="nav-item">
                <Link to="/Labs/Lab3" className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</Link>
            </li>
            <li className="nav-item">
                <Link to="/Labs/Lab4" className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>Lab 4</Link>
            </li>
            <li className="nav-item">
                <Link to="/Kanbas" className="nav-link">Kanbas</Link>
            </li>
            <li className="nav-item">
                <a id="wd-github" href="https://github.com/shiv060600" className="nav-link" target="_blank" rel="noopener noreferrer">My GitHub</a>
            </li>
        </ul>
    );
}
