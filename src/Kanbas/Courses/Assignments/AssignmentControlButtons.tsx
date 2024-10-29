import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";


export function AssignmentControlButtons({ addAssignment}: {
     addAssignment:() => void;}) 
     {
  return (
    <div className="float-end">
        <BsPlus className="fs-1" onClick = {() => addAssignment()} />
        <IoEllipsisVertical className="fs-4" />
    </div>
  );}