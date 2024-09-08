import React from "react"
import Labs from '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Labs/index.tsx';
import Kanbas from '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/index.tsx';
import { HashRouter, Routes, Route, Navigate,Link } from "react-router-dom";

export default function TOC() {
    return (
        <ul>
            <li> <Link to = "/Labs"> Labs </Link> </li>
            <li><Link to = '/Labs/Lab1'></Link></li>
            <li><Link to = '/Labs/Kanbas'>Kanbas</Link></li>
        </ul>
    )
}