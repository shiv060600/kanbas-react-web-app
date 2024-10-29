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
        // Add a new assignment to the list
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                _id: new Date().getTime().toString(), // Generate unique ID based on current timestamp
                title: assignment.name, // Set assignment title from payload
                course: assignment.course, // Set course ID from payload
                description: assignment.description || "", // Optional description
                points: assignment.points || 0, // Default points to 0 if not specified
                dueDate: assignment.dueDate || "", // Optional due date
                availableFrom: assignment.availableFrom || "", // Optional available from date
                availableUntil: assignment.availableUntil || "" // Optional available until date
            };
            state.assignments = [...state.assignments, newAssignment];
        },

        // Delete an assignment by its ID
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
        },

        // Update an existing assignment's details
        updateAssignment: (state, { payload: updatedAssignment }) => {
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === updatedAssignment._id ? updatedAssignment : assignment
            );
        },

        // Mark an assignment as editable by setting an editing flag
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === assignmentId ? { ...assignment, editing: true } : assignment
            );
        }
    }
});

// Export actions to use them in components
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;

// Export reducer to include in the store
export default assignmentsSlice.reducer;
