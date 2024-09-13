import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard(){
    return(
        <div id = "wd-dashboard">
            <h1 id = "wd-dasboard-title">Dashboard</h1> <hr />
            <h2 id = 'wd-dashboard-published'>Published Courses(12)</h2><hr />
            <div id = "wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="src/Kanbas/Images/reactjs.webp" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link" to = "/Kanbas/Courses/1234/Home">CS1234React
                         </Link>
                         <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                         </p>
                         <Link to = "/Kanbas/Courses/1234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="src/Kanbas/Images/numericalanalysis.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link" to = "/Kanbas/Courses/7203/Home">MATH7203NumericalAnalysis</Link>
                        <p className = "wd-dashboard-course-title">
                            Numerical Analysis
                        </p>
                        <Link to = "/Kanbas/Courses/7203/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="src/Kanbas/Images/ALA.jpg"/>
                    <div>
                        <Link className="wd-dashboard-course-link" to = "/Kanbas/Courses/5110/Home">MATH5110AppliedLinearAlgebra</Link>
                        <p className="wd-dasthboard-course-title">
                            Applied Linear Algebra
                        </p>
                        <Link to= "/Kanbas/Course/5110/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="src/Kanbas/Images/gameprogramming.jpeg"/>
                    <div>
                        <Link className="wd-dashboard-course-link" to= "/Kanbas/Courses/5540/Home">CS5540GameProgramming</Link>
                        <p className="wd-dashboard-course-title">
                            Game Programming
                            
                        </p>
                        <Link to = "/Kanbas/Courses/5540/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="src/Kanbas/Images/appliedstatistics.jpeg"/>
                    <div>
                        <Link className = "wd-dashboard-course-link" to = "/Kanbas/Courses/5540/Home">MATH7343AppliedStatistics</Link>
                        <p className="wd-dashboard-course-title">
                            Applied Statistics
                        </p>
                        <Link to = "/Kanbas/Courses/7343/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="src/Kanbas/Images/machinelearning.png"/>
                    <div>
                        <Link className="wd-dashboard-course-link" to ="/Kanbas/Courses/7243/Home">MATH7243MachineLearning</Link>
                        <p className="wd-dashboard-course-title">
                            Machine Learning 1
                        </p>
                        <Link to ="/Kanbas/Courses/7243/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-courses">
                    <img src="src/Kanbas/Images/probability1.jpeg"/>
                    <div>
                        <Link className="wd-dashboard-course-link" to = "/Kanbas/Courses/7241/Home">MATH7241Probability1</Link>
                        <p className="wd-dashboard-course-title">
                            Probability 1
                        </p>
                        <Link to= "/Kanbas/Courses/7241/Home">Go</Link>
                    </div>
                </div>
            </div>
        </div>

    );
}