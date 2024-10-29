import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsGripVertical } from "react-icons/bs";
import { LessonControlButtons } from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment,deleteAssignment,updateAssignment, editAssignment } from "./reducer";
import AddAssignmentEditor from "./AddAssignmentEditor";

export default function Assignments() {
  const { cid } = useParams();
  const [assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state : any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-assignments">
      <div className="d-flex">
        <input
          id="wd-search-assignment"
          type="search"
          className="me-2"
          placeholder="Search for Assignments"
        />
        <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
          <BiPlus /> Group
        </button>
        <button
          id="wd-add-assignment"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#wd-add-assignment-dialog"
        >
          <BiPlus /> Assignment
        </button>

        <AddAssignmentEditor
          dialogTitle="Add Assignment"
          assignmentName={assignmentName}
          setAssignmentName={setAssignmentName}
          addAssignment={() => {
            dispatch(addAssignment({ name: assignmentName, course: cid }));
            setAssignmentName("");
          }}
        />
      </div>
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments
          .filter((assignment:any) => assignment.course === cid)
          .map((assignment:any) => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item">
              <BsGripVertical className="me-2 fs-3" />
              <strong>{assignment.title}</strong>
              <LessonControlButtons />
              <br />
              <small>
                <b>Due</b> {assignment.dueDate}
              </small>
            </li>
          ))}
      </ul>
    </div>
  );
}
