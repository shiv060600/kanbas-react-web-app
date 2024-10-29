import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/Reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from './Courses/Assignments/reducer'
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer
  },
});
export default store;