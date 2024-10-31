// src/reducers/enrollmentsSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";// Import the database to use initial enrollments


// Initialize state with enrollments from Database, ensuring it defaults to an empty array
const initialState = {
  enrollments: enrollments
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
  
    reducers: {
      toggleEnrollment: (state, { payload: { userId, courseId } }) => {
        const enrollmentIndex = state.enrollments.findIndex(
          (en) => en.user === userId && en.course === courseId
        );
  
        if (enrollmentIndex >= 0) {
          // Remove enrollment if it exists (unenroll)
          state.enrollments.splice(enrollmentIndex, 1);
        } else {
          // Add new enrollment (enroll)
          state.enrollments.push({ _id: new Date().getTime().toString(), user: userId, course: courseId });
        }
      }
    }
  });
  
  export const { toggleEnrollment } = enrollmentsSlice.actions;
  export default enrollmentsSlice.reducer;