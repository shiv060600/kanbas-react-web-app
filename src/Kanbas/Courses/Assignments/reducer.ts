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
        description: assignment.description || "",
        points: assignment.points || 100,
        dueDate: assignment.dueDate || "",
        availableFrom: assignment.availableFrom || "",
        availableUntil: assignment.availableUntil || ""
      };
      state.assignments = [...state.assignments, newAssignment];
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },

    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === updatedAssignment._id ? { ...assignment, ...updatedAssignment } : assignment
      );
    },

    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === assignmentId ? { ...assignment, editing: true } : assignment
      );
    }
  }
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
