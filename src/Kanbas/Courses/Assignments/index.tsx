import React, { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi"; // Icon for edit
import { RiDeleteBin6Line } from "react-icons/ri"; // Icon for delete
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} from "./reducer";
import AssignmentControls from "./AssignmentControls";
import AssignmentEditor from "./AssignmentEditor";


export default function Assignments() {
  const { cid } = useParams();
  const [assignmentName, setAssignmentName] = useState("New Assignment");
  const [description, setDescription] = useState("New Description");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("12/12/2024");
  const [availableFrom, setAvailableFrom] = useState("12/12/2024");
  const [availableUntil, setAvailableUntil] = useState("12/12/2024");
  
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const handleEditAssignment = (assignment: any) => {
    setAssignmentName(assignment.title);
    setDescription(assignment.description);
    setPoints(assignment.points);
    setDueDate(assignment.dueDate);
    setAvailableFrom(assignment.availableFrom);
    setAvailableUntil(assignment.availableUntil);
  };

  const saveAssignment = (assignmentId: string) => {
    dispatch(updateAssignment({
      id: assignmentId,
      title: assignmentName,
      description: description,
      points : points,
      dueDate: dueDate,
      availableFrom:availableFrom,
      availableUntil:availableUntil
    }));
    
  };
  return (
    <div id="wd-assignments">
      <div id="wd-assignmentcontrols">
        <AssignmentControls
          assignmentName={assignmentName}
          setAssignmentName={setAssignmentName}
          addAssignment={() => {
            console.log({dueDate})
            dispatch(addAssignment({ name: assignmentName, course: cid , description : description , dueDate : dueDate , 
              availableFrom : availableFrom , availableUntil :availableUntil, points : points
            }));
          }}
          setDueDate={setDueDate}
          setAvailableFrom={setAvailableFrom}
          setAvailableUntil={setAvailableUntil}
        />
      </div>
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li
              key={assignment._id}
              className="wd-assignment-list-item list-group-item"
            >
              <BsGripVertical className="me-2 fs-3" />
              <strong>{assignment.title}</strong>
              <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                <BiEdit
                  className="me-2"
                  onClick={() => dispatch(editAssignment(assignment._id))}
                  data-bs-toggle="modal"
                  data-bs-target="#wd-edit-assignment-dialog"
                />
                <RiDeleteBin6Line
                  className="me-2"
                  onClick={() => dispatch(deleteAssignment(assignment._id))}
                />
              </span>
              <br />
              <small> Available From : {assignment.availableFrom} | </small>
              <small> Available Until : {assignment.availableUntil} | </small>
              <small> Due : {assignment.dueDate} | </small>
              <small> Points : {assignment.points} | </small>
              <AssignmentEditor
                dialogTitle="Edit Assignment"
                assignment={assignment}
                _id = {assignment._id}
                assignmentName={assignmentName}
                setAssignmentName={setAssignmentName}
                //updateAssignment={(assignment :any) => dispatch(updateAssignment(assignment))}
                description={description}
                setDescription={setDescription}
                points={points}
                setPoints={setPoints}
                dueDate={dueDate}
                setDueDate={setDueDate}
                availableFrom={availableFrom}
                setAvailableFrom={setAvailableFrom}
                availableUntil={availableUntil}
                setAvailableUntil={setAvailableUntil} 
                />
            </li>
          ))}
      </ul>
    </div>
  );
}