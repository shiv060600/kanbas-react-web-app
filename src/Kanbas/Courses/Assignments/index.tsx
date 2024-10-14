import React from "react";
import { BiPlus } from "react-icons/bi";
import { BsGripVertical } from "react-icons/bs";
import { LessonControlButtons, ModuleControlButtons } from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import { assignments } from "../../Database"

import { BiSearch } from "react-icons/bi";
import { FaPencilAlt } from "react-icons/fa";
export default function Assignments() {
  const { cid } = useParams();

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
        
        <ul id="wd-assignment-list" className=" list-group rounded-0 list-group">
          <li className="wd-assignment-list-title list-group-item p-0 mb-5 border gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className = "me-2 fs-3" />
                ASSIGNMENTS
                <ModuleControlButtons/>
              </div>
            <ul className="wd-lessons list-group rounded-0">
            {assignments.
              filter((assignment : any) => assignment.course === cid).
              map((assignment:any) => (
              <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                  <BsGripVertical className = "me-2 fs-3"/>
                  <a href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    <FaPencilAlt style={{ color: "green",marginRight:"8px" }} />
                  </a>
                  <strong>{assignment.title}</strong>
                  <LessonControlButtons/>
                  <br />
                  <small>
                  <a href= {`#/Kanbas/Courses/${cid}/Modules`}>Multiple Modules</a> | 
                   <b> Not Available until </b> May 6 at 12:00am | 
                   <b>Due</b> May 13 at 11:59pm
                  </small>
              </li>
              ))}
            </ul> 
        </li>
        </ul>
      </div>
  );}
  