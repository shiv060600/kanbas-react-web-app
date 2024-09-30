import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
export  function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
export function ModuleControlButtons(){
    return(
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus/>
      <IoEllipsisVertical className="fs-4" />
    </div>

    );
}
