import React from "react";
import Modules from "../Modules/index.tsx";
import CourseStatus from "./status.tsx";

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
  