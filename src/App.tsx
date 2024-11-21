
import './App.css';
import React from 'react'
import Labs from "./Labs/index"
import Kanbas from "./Kanbas/index"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Kanbas/store";
import Session from "./Kanbas/Account/session"
export default function App() {
  return (
    <Provider store = {store}>
      <HashRouter>
        <div>
          <Routes>
            <Route path= "/" element = {<Navigate to= "Labs"/>}/>
            <Route path= "/Labs/*" element = {<Labs />}/>
            <Route path="/Kanbas/*" element ={<Kanbas />}/>
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}


