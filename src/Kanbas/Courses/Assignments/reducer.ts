import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

// Initial state with assignments data imported from Database
const initialState = {
  assignments: assignments
};

// Create a slice for assignments with reducers for adding, deleting, updating, and editing assignments
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.name,
        course: assignment.course,
        description: assignment.description, //|| "New Assignment",
        points: assignment.points, //|| 100
        dueDate: assignment.dueDate,// || "12/12/2024",
        availableFrom: assignment.availableFrom ,//|| "12/12/2024",
        availableUntil: assignment.availableUntil ,//|| "12/12/2024"
      };
      state.assignments = [...state.assignments, newAssignment];
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },

    updateAssignment: (state, { payload: assignment}) => {
        console.log("reducer")
        console.log(assignment)
        state.assignments = state.assignments.map((m: any) =>
          m._id === assignment._id ? assignment : m
        ) as any;
      },

    editAssignment: (state, { payload: assignmentId}) => {
      state.assignments = state.assignments.map((m:any) =>
        m._id === assignmentId ?{...m, editing:true} : m
      ) as any;
    }
  }
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;