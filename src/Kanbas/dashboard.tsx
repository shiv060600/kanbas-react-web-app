import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleEnrollment } from "./Courses/Enrollments/reducer";
import * as courseClient from "./Courses/client"


export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: (course:any) => void;
  enrolling:boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  console.log(courses);
  

  const isStudent = currentUser && currentUser.role === "STUDENT";
  const isEnrolled = (course: any) => {
    return enrollments.some(
      (en: any) => en.user === currentUser?._id && en.course === course._id
    );
  };
  const findUsersForCourse = async () => {
    try {
      const users = await courseClient.findUsersForCourse(currentUser._id);
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEnrollmentToggle = (courseId: string) => {
    dispatch(toggleEnrollment({ userId: currentUser._id, courseId }));
  };
  /*
  const filteredCourses = isStudent && !showAllCourses
    ? courses.filter(course => isEnrolled(course))
    : courses;
  */
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isStudent && (
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
        {enrolling ? "My Courses" : "All Courses"}
      </button>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="wd-dashboard-course-col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={
                    isStudent && isEnrolled(course)
                      ? `/Kanbas/Courses/${course._id}/Home`
                      : "#"
                  }
                >
                  <img src="/Images/reactjs.webp" width="100%" height={160} alt="Course" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    {enrolling && (
                      <button onClick= {(event) => {
                        event.preventDefault();
                        updateEnrollment(course._id, !course.enrolled);
                      }} className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                      {course.enrolled ? "Unenroll" : "Enroll"}
                    </button>
                    )}
                    
                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                        Go
                      </Link>

                    {!isStudent && (
                      <>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                      </>
                    )}
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