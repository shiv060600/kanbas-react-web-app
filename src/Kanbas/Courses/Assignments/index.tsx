import React from "react";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/A1">
              A1 - ENV + HTML
            </a>
                <p>
                    Multiple Models| <b> Not Available until</b> May 6 at 12am| <br />
                   <b>Due</b> May 13 at 11:59| 100 pts
                </p>
          </li>
          <li className="wd-assignment-list-item">
            <a className= "wd-assignment-link" href= "#/Kanbas/Courses/1234/Assignments/A2">
            A2 - CSS + BOOTSTRAP
            </a>
            <p>
              Multiple Models| <b> Not Available until</b> May 13 at 12am| <br />
              <b>Due</b> May 20 at 11:59| 100 pts
            </p>
          </li>
          <li className="wd-assignment-list-item">
            <a href="#/Kanbas/Courses/1234/Assignments/A3">
            A3 - JAVASCRIP + REACT
            </a>
            <p>
              Multiple Models| <b> Not Available until</b> May 20 at 12am| <br />
              <b>Due</b> May 27 at 11:59| 100 pts
            </p>
          </li>
        </ul>
      </div>
  );}
  