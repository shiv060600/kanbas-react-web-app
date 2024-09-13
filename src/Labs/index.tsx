import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Lab1 from './Lab1/index.tsx'
import Lab2 from "./Lab2/index.tsx"
import Lab3 from "./Lab3/index.tsx" 
import TOC from "./TOC.tsx"
import Kanbas from "../Kanbas/index.tsx";
export default function Labs(){
    return (
    <div id = "wd-labs">

        <h1>Shiv Bhutani CS5610 20596</h1>  
        <h2>Labs</h2>
        <TOC/>
        <Routes>
            <Route path = "/" element = {<Navigate to = "Lab1" />} />
            <Route path = "Lab1" element = {<Lab1 />}/>
            <Route path = "Lab2" element = {<Lab2 />}/>
            <Route path = "Lab3" element = {<Lab3 />}/>
            <Route path = "Kanbas" element = {<Kanbas />}/>   
        </Routes>

    </div>
    )
}

