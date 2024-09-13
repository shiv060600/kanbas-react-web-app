import React from "react";

export default function Modules() {
    return (
      <div>
        <button id = "wd-modules-collapse-all-button">Collapse All</button>
        <button id = "wd-modules-view-progress-button">View Progress</button>
        <select id = "wd-modules-publish">
          <option id = "wd-modules-publush-all"value="publish-all">Publish All</option>
          <option id = "wd-modules-puhslish-none"value="publish-none">Publish None</option>
        </select>
        <button id = "wd-modules-add-module">+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  