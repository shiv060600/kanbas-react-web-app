import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Lab1 from '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Labs/Lab1/index.tsx'
import Lab2 from "/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Labs/Lab2/index.tsx"
import Lab3 from "/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Labs/Lab3/index.tsx" 
import TOC from "/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Labs/TOC.tsx"
import Kanbas from "/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/index.tsx";
export default function Labs(){
    return (
    <div id = "wd-labs">
        <h1>Labs</h1>  
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

