
import '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/App.css';
import React from 'react'
import Labs from '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Labs/index.tsx';
import Kanbas from '/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/index.tsx';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path= "/" element = {<Navigate to= "Labs"/>}/>
          <Route path= "/Labs/*" element = {<Labs />}/>
          <Route path="/Kanbas/*" element ={<Kanbas />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}


