import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enrollment {
  user: string;
  course: string;
  _id : string,
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentsState = {
  enrollments: [],
};



const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    toggleEnrollment: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      const existingEnrollmentIndex = state.enrollments.findIndex(
        (e) => e.user === userId && e.course === courseId
      );
      if (existingEnrollmentIndex !== -1) {
        // Unenroll
        state.enrollments.splice(existingEnrollmentIndex, 1);
      } else {
        // Enroll
        state.enrollments.push({ user: userId, course: courseId, _id: new Date().getTime().toString() });
      }
    },
  },
});

export const { setEnrollments, toggleEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;