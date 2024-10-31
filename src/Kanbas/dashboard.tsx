import React , {useState} from "react";
import * as db from "./Database" 
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleEnrollment } from "./Courses/Enrollments/reducer";
export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
      deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void; })
      
      {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const dispatch = useDispatch();
    const [showAllCourses, setShowAllCourses] = useState(true);
    const isStudent = currentUser && currentUser.role === "Student";
    const isEnrolled = (course:any) => {
        return (enrollments || []).some((en:any) => en.user === currentUser._id && en.course === course._id);
      };
    
    return(
        
        <div id = "wd-dashboard">
            <h1 id = "wd-dasboard-title">Dashboard</h1> 
            <hr />
            {isStudent && (
                <button
                    className="btn btn-primary float-end"
                    onClick={() => setShowAllCourses(!showAllCourses)}>
                    {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
                </button>
            )}
            <h2 id = 'wd-dashboard-published'> Published Courses ({Object.keys(courses).length})</h2><hr />
            <h5>New Course
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > Add 
                </button>
                <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
                    Update
                </button>
            </h5><br />
            <input value={course.name} className="form-control mb-2"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <textarea value={course.description} className="form-control"
             onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            <div id = "wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4" >
                    {courses
                    .filter((course) => (showAllCourses || isEnrolled(course)))
                    .map((course) => (
                    <div className= "wd-dashboard-course-col" style={{width:"300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                                    to = {`/Kanbas/Courses/${course._id}/Home`}>
                                <img src="/Images/reactjs.webp" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        {course.name}
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{maxHeight : 100}}>
                                        {course.description}
                                    </p>
                                    {isStudent && (
                                        <button
                                            className={`btn ${isEnrolled(course) ? "btn-danger" : "btn-success"}`}
                                            onClick={() =>
                                            dispatch(toggleEnrollment({ userId: currentUser._id, course: course._id }))
                                            }>
                                            {isEnrolled(course) ? "Unenroll" : "Enroll"}
                                        </button>
                                    )}
                                    {isEnrolled(course) && (
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                          Go
                                        </Link>
                                      )}
                                    
                  
                                    <button className="btn btn-primary"> Go</button>
                                    <button id="wd-edit-course-click"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                        className="btn btn-warning me-2 float-end">
                                        Edit
                                    </button>
                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                        }} className="btn btn-danger float-end"
                                        id="wd-delete-course-click">
                                        Delete
                                    </button>
                                </div>
                            </Link> 
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
/*filter((course) => enrollments.some((enrollment) =>
enrollment.user === currentUser._id &&
enrollment.course === course._id  
))*/