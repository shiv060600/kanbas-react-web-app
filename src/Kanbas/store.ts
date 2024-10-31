import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/Reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from './Courses/Assignments/reducer'
import enrollmentsReducer from "./Courses/Assignments/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer
  },
});
export default store;