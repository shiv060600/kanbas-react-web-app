import React, { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi"; // Icon for edit
import { RiDeleteBin6Line } from "react-icons/ri"; // Icon for delete
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} from "./reducer";
import AssignmentControls from "./AssignmentControls";
import AssignmentEditor from "./AssignmentEditor";
import * as assignmentsClient from "./client"
import { useEffect } from "react";


export default function Assignments() {
  const { cid } = useParams();
  const [assignmentName, setAssignmentName] = useState("New Assignment");
  const [description, setDescription] = useState("New Description");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("12/12/2024");
  const [availableFrom, setAvailableFrom] = useState("12/12/2024");
  const [availableUntil, setAvailableUntil] = useState("12/12/2024");
  const [assignments , setAssignments] = useState<any[]>([]);

  const dispatch = useDispatch();

  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { name: assignmentName, course: cid , description : description , points : points, dueDate :dueDate, availableFrom : availableFrom, availableUntil: availableUntil };
    const assignment = await assignmentsClient.createAssignmentForCourse(cid, newAssignment);
    setAssignments([...assignments, assignment]);
  };
  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
  };
  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
    setAssignments(assignments);
  };
  useEffect(() => {
    fetchAssignments();
  }, []);


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
          addAssignment={createAssignmentForCourse}
          setDueDate={setDueDate}
          setAvailableFrom={setAvailableFrom}
          setAvailableUntil={setAvailableUntil}
        />
      </div>
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments
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
                  onClick={() => removeAssignment(assignment._id)}
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