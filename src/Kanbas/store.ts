import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/Reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from './Courses/Assignments/reducer'
import enrollmentsReducer from "./Courses/Enrollments/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer
  },
});

export interface KanbasState {
    modulesReducer: {
      modules: any[];
      module: any;
    };
  }

export interface AssignmentState {
    assignmentsReducer: {
      assignments: any[];
      assignment: any;
    };
  }

export default store;