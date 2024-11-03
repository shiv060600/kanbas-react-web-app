import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { updateAssignment } from "./reducer";

interface AssignmentEditorProps {
  dialogTitle: string;
  assignment : any;
  _id :any;
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  //updateAssignment: (assignment:any) => void;
  description: string;
  setDescription: (desc: string) => void;
  points: number;
  setPoints: (points: number) => void;
  dueDate : string;
  setDueDate: (date: string) => void;
  availableFrom: string;
  setAvailableFrom: (date: string) => void;
  availableUntil: string;
  setAvailableUntil: (date: string) => void;
}

export default function AssignmentEditor({
  dialogTitle,
  assignment,
  _id,
  assignmentName,
  setAssignmentName,
  //updateAssignment,
  description,
  setDescription,
  points,
  setPoints,
  dueDate,
  setDueDate,
  availableFrom,
  setAvailableFrom,
  availableUntil,
  setAvailableUntil,
}: AssignmentEditorProps) {
  console.log(assignment)
  console.log(_id)
  const [assignmentEdit,setAssignmentEdit] = useState(assignment)
  const dispatch = useDispatch();
  const { aid } = useParams();
  return (
    <div id="wd-edit-assignment-dialog" className="modal" tabIndex={-1}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{dialogTitle}</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="assignmentName" className="form-label">
                Assignment Name
              </label>
              <input
                id="assignmentName"
                className="form-control"
                value={assignmentEdit.title}
                onChange={(e) => setAssignmentEdit({...assignment, title: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                className="form-control"
                rows={3}
                value={assignmentEdit.description}
                onChange={(e) => setAssignmentEdit({...assignment, description: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="points" className="form-label">
                Points
              </label>
              <input
                id="points"
                type="number"
                className="form-control"
                value={assignmentEdit.points}
                onChange={(e) => setAssignmentEdit({...assignment, points: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dueDate" className="form-label">
                Due Date
              </label>
              <input
                id="dueDate"
                type="date"
                className="form-control"
                value={assignmentEdit.dueDate}
                onChange={(e) => setAssignmentEdit({...assignment, dueDate: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="availableFrom" className="form-label">
                Available From
              </label>
              <input
                id="availableFrom"
                type="date"
                className="form-control"
                value={assignmentEdit.availableFrom}
                onChange={(e) => setAssignmentEdit({...assignment, availableFrom: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="availableUntil" className="form-label">
                Available Until
              </label>
              <input
                id="availableUntil"
                type="date"
                className="form-control"
                value={assignmentEdit.availableUntil}
                onChange={(e) => setAssignmentEdit({...assignment, availableUntil: e.target.value })}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              onClick={() => dispatch(updateAssignment(assignmentEdit))}
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}