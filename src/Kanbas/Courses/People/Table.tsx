import { FaUser, FaUserCircle } from "react-icons/fa";
import React from "react";
import { useParams } from "react-router-dom";
import {users,enrollments} from "../../Database"
export default function PeopleTable() {
  const {cid} = useParams();
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <tbody>
        {users
          .filter((usr) =>
          enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid))
          .map((user: any) => (
          <tr key={user._id}>
            <tr>
                <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>
                    <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td> 
            </tr>
          </tr>
          ))}
         </tbody>
      </  table>
    </div> );}