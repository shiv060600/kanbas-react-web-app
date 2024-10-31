import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";
const initialState = {
    enrollments : enrollments,
};
const entrollmentsSlice = createSlice({
    name: "enrollments" ,
    initialState,
    reducers : {
        addEnrollment : (state, {payload: enrollment}) =>{
            const newEnrollment : any = {
                _id : new Date().getTime().toString(),
                user : enrollment.user,
                course : enrollment.course
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        deleteEnrollment : (state, { payload: enrollmentId }) =>{
            state.enrollments = state.enrollments.filter((m:any) => m._id !== enrollmentId )
        }
    }
})
