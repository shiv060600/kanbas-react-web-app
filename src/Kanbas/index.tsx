import React, {useState} from "react";
import {Routes,Route,Navigate} from 'react-router-dom'
import Account from "./Account/index" 
import Dashboard from "./dashboard"
import KanbasNavigation from "./Nagivation";
import Courses from "./Courses/index";
import * as db from "./Database" 
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
export default function Kanbas() {
  const [courses , setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
      });
    
  const addNewCourse = () => {
        const newCourse = {...course, _id: new Date().getTime().toString() };
        setCourse([...courses, { ...course, ...newCourse }]);    
    }
  const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
  const updateCourse = () => {
        setCourses(
          courses.map((c) => {
            if (c._id === course._id) {
              return course;
            } else {
              return c;
            }
          })
        );
    };
  return (
    <Provider store = {store}>
        <div id="wd-kanbas">
            <KanbasNavigation />
            <div className= "wd-main-content-offset p-3">
              <Routes>
                <Route path="/" element={<Navigate to="Account"/>} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<ProtectedRoute><Dashboard 
                                                    courses={courses}
                                                    course={course}
                                                    setCourse={setCourse}
                                                    addNewCourse={addNewCourse}
                                                    deleteCourse={deleteCourse}
                                                    updateCourse={updateCourse}/></ProtectedRoute>}/>
                <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses = {courses}/></ProtectedRoute>}/>
                <Route path="/Calendar" element = {<h1>Calendar</h1>}/>
                <Route path="/Inbox" element = {<h1>Inbox</h1>}/>
              </Routes>
            </div>
        </div>
    </Provider>
  );}
  
