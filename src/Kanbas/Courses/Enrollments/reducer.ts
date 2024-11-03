// src/reducers/enrollmentsSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";// Import the database to use initial enrollments


// Initialize state with enrollments from Database, ensuring it defaults to an empty array
const initialEnrollments = [
    { "_id": "1", "user": "123", "course": "RS101" },
    { "_id": "2", "user": "234", "course": "RS101" },
    { "_id": "3", "user": "345", "course": "RS101" },
    { "_id": "4", "user": "456", "course": "RS101" },
    { "_id": "5", "user": "567", "course": "RS101" },
    { "_id": "6", "user": "234", "course": "RS102" },
    { "_id": "7", "user": "789", "course": "RS102" },
    { "_id": "8", "user": "890", "course": "RS102" },
    { "_id": "9", "user": "123", "course": "RS102" }
  ];
const initialState = {
    enrollments: initialEnrollments,
  };

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
      toggleEnrollment: (state, { payload: { userId, courseId } }) => {
        console.log("Toggling enrollment for:", { userId, courseId });
        console.log("Current enrollments before change:", state.enrollments);
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