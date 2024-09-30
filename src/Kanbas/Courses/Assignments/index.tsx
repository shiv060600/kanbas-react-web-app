import React from "react";
import { BiPlus } from "react-icons/bi";
import { BsGripVertical } from "react-icons/bs";
import { LessonControlButtons, ModuleControlButtons } from "../Modules/LessonControlButtons";
import { BiSearch } from "react-icons/bi";
import { FaPencilAlt } from "react-icons/fa";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <div className="d-flex">
          
          <input id="wd-search-assignment" type= "search"  className = "me-2" placeholder="Search for Assignments" />
          
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
              <BiPlus/>Group
          </button>
          <button id="wd-add-assignment" className= "btn btn-danger" >
             <BiPlus/>Assignment
          </button>
        </div>

        <br />
        <div>
          

        </div>
        <ul id="wd-assignment-list" className=" list-group rounded-0 list-group">
          <li className="wd-assignment-list-title list-group-item p-0 mb-5 border gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className = "me-2 fs-3" />
                ASSIGNMENTS
                <ModuleControlButtons/>
              </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                  <BsGripVertical className = "me-2 fs-3"/>
                  <a href="#/Kanbas/Courses/1234/Assignments/A1">
                    <FaPencilAlt style={{ color: "green",marginRight:"8px" }} />
                  </a>
                  <strong>A1</strong>
                  <LessonControlButtons/>
                  <br />
                  <small>
                  <a href="#/Kanbas/Courses/1234/Assignments/A1">Multiple Modules</a> | 
                   <b> Not Available until </b> May 6 at 12:00am | 
                   <b>Due</b> May 13 at 11:59pm
                  </small>
              </li>
              <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                  <BsGripVertical className = "me-2 fs-3"/>
                  <a href="#/Kanbas/Courses/1234/Assignments/A2">
                    <FaPencilAlt style={{ color: "green",marginRight:"8px" }} />
                  </a>
                  <strong>A2</strong>
                  <LessonControlButtons/>
                  <br />
                  <small>
                  <a href="#/Kanbas/Courses/1234/Assignments/A2">Multiple Modules</a> | 
                   <b> Not Available until </b> May 13 at 12:00am | 
                   <b>Due</b> May 20 at 11:59pm
                  </small>
              </li>
              <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                  <BsGripVertical className = "me-2 fs-3"/>
                  <a href="#/Kanbas/Courses/1234/Assignments/A3">
                    <FaPencilAlt style={{ color: "green",marginRight:"8px" }} />
                  </a>
                  <strong>A3</strong>
                  <LessonControlButtons/>
                  <br />
                  <small>
                  <a href="#/Kanbas/Courses/1234/Assignments/A3">Multiple Modules</a> | 
                   <b> Not Available until </b> May 20 at 12:00am | 
                   <b>Due</b> May 27 at 11:59pm
                  </small>
              </li>
            </ul> 
        </li>
        </ul>
      </div>
  );}
  