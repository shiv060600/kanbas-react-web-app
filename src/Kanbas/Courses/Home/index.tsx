import React from "react";
import Modules from "/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/Courses/Modules.tsx";
import CourseStatus from "/Users/shivvinnybhutani/Desktop/Web Design/kanbase-react-web-app/src/Kanbas/Courses/Home/status.tsx";

export default function Home() {
    return (
      <table id="wd-home">
        <tr>
          <td valign="top">
            <Modules />
          </td>
          <td valign="top">
            <CourseStatus />
          </td>
        </tr>
      </table>
    );
  }
  