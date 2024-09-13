import React from "react"
import Labs from '../Labs/index.tsx';
import Kanbas from '../Kanbas/index.tsx';
import { HashRouter, Routes, Route, Navigate,Link } from "react-router-dom";

export default function TOC() {
    return (
        <ul>
            <li> <Link to = "/Labs">Labs</Link> </li>
            <li><Link to = '/Labs/Lab1'>Lab1</Link></li>
            <li><Link to = '/Labs/Lab2'>Lab2</Link></li>
            <li><Link to = '/Labs/Lab3'>Lab3</Link></li>
            <li><Link to= "/Kanbas">Kanbas</Link></li>
            <li><Link to="https://github.com/shiv060600/kanbas-react-web-app"></Link></li>
        </ul>
    )
}