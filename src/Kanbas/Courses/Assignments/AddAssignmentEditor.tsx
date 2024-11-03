import React from "react";


export default function AddAssignmentEditor({
  dialogTitle,
  assignmentName,
  setAssignmentName,
  addAssignment,
  setAvailableUntil,
  setAvailableFrom,
  setDueDate,
}: {
  dialogTitle: string;
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  addAssignment: () => void;
  setAvailableUntil : (date : string) => void;
  setAvailableFrom : (date:string) => void;
  setDueDate : (date:string) => void;
}) {
  return (
    <div
      id="wd-add-assignment-dialog"
      className="modal fade"
      tabIndex={-1}
      aria-labelledby="assignmentDialogLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="assignmentDialogLabel">
              {dialogTitle}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12 mb-3">
                <label htmlFor="assignmentName" className="form-label">
                  Assignment Name
                </label>
                <input
                  id="assignmentName"
                  className="form-control"
                  value={assignmentName}
                  placeholder="New Assignment"
                  onChange={(e) => setAssignmentName(e.target.value)}
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="assignmentDescription" className="form-label">
                  Assignment Description
                </label>
                <textarea
                  id="assignmentDescription"
                  className="form-control"
                  placeholder="New Assignment Description"
                  rows={5}
                />
              </div>
              <div className="col-8 offset-4 mb-3">
                <div className="row align-items-center">
                  <label htmlFor="points" className="col-3 col-form-label">
                    Points
                  </label>
                  <div className="col-9">
                    <input
                      id="points"
                      type="number"
                      className="form-control"
                      defaultValue={100}
                      min={0}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 offset-6 mb-3">
                <div className="row align-items-center">
                    Assign
                    <div className="border p-3 rounded">
                        <div className="row mb-2">
                            <label htmlFor="dueDate" className="form-label col-4">
                            Due
                            </label>
                            <input
                            id="dueDate"
                            type="date"
                            className="form-control col-8"
                            onChange={(e) => setDueDate(e.target.value)}
                            />
                        </div>
                        <div className="row mb-2">
                            <label
                            htmlFor="availableFrom"
                            className="form-label col-4"
                            >
                            Available from
                            </label>
                            <input
                            id="availableFrom"
                            type="date"
                            className="form-control col-8"
                            onChange={(e) => setAvailableFrom(e.target.value)}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="until" className="form-label col-4">
                            Until
                            </label>
                            <input
                            id="until"
                            type="date"
                            className="form-control col-8"
                            onChange={(e) => setAvailableUntil(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                
              </div>
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
              onClick={addAssignment}
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
