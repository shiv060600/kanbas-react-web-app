import React from "react";
import { useParams } from "react-router";

interface AssignmentEditorProps {
  dialogTitle: string;
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  editAssignment: () => void;
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
  assignmentName,
  setAssignmentName,
  editAssignment,
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
  const { cid } = useParams();

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
                value={assignmentName}
                onChange={(e) => setAssignmentName(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
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
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
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
                value={availableFrom}
                onChange={(e) => setAvailableFrom(e.target.value)}
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
                value={availableUntil}
                onChange={(e) => setAvailableUntil(e.target.value)}
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
              onClick={editAssignment}
              type="button"
              className="btn btn-danger">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
