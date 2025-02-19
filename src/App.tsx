
import './App.css';
import React from 'react'
import Labs from "./Labs/index.tsx"
import Kanbas from "./Kanbas/index.tsx"
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


