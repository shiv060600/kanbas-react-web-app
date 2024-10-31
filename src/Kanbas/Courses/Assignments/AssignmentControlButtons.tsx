import React from "react";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
  editAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
  editAssignment: (assignmentId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center gap-3">
      <FaPencil
        id="wd-edit-assignment"
        data-bs-toggle="modal"
        data-bs-target="#wd-edit-assignment-dialog"
        onClick={() => editAssignment(assignmentId)}
      />
      <FaTrash
        className="text-danger me-2"
        onClick={() => deleteAssignment(assignmentId)}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
