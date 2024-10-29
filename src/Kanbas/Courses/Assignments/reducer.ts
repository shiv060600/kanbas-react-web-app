import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments : assignments
}
const assignmentsSlice = createSlice ({
    name : "assignments" , 
    initialState,
    reducers:{
        addAssignment : (state, {payload : assignment}) => {
            const newAssignment : any = {
                _id : new Date().getTime().toString(),
                title : assignment.title,
                course : assignment.course
            };
            state.assignments = [...assignments , newAssignment] as any;
        },

        deleteAssignment : (state,{payload : assignmentId}) => {
            state.assignments = state.assignments.filter((a:any) => a._id !== assignmentId);
        },

        updateAssignment : (state,{payload : assignment }) => {
            state.assignments = state.assignments.map((a:any) => a._id === assignment._id ? assignment:a);
        },
        editAssignement : (state, {payload: assignmentId}) => {
            state.assignments.map((a:any) => a.Id === assignmentId ? {...a, editing : true }: a);
        }
    }
});
export const {addAssignment,deleteAssignment,updateAssignment,editAssignement} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
