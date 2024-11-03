import { BiPlus } from "react-icons/bi";
import AddAssignmentEditor from "./AddAssignmentEditor";
export default function AssignmentControls(
    { assignmentName, setAssignmentName, addAssignment , setAvailableFrom, setAvailableUntil , setDueDate}:
    { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; 
        setAvailableFrom : (date : string) => void; setAvailableUntil : (date:string) => void, setDueDate:(date:string) => void;}){
    return(
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
            data-bs-target="#wd-add-assignment-dialog">
            <BiPlus /> Assignment
            </button>
            <AddAssignmentEditor
            dialogTitle="Add Assignment"
            assignmentName={assignmentName}
            setAssignmentName={setAssignmentName}
            addAssignment={addAssignment}
            setAvailableFrom={setAvailableFrom}
            setAvailableUntil={setAvailableUntil}
            setDueDate={setDueDate}
            />
      </div>
    );
}