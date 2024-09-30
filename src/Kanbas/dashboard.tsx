import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard(){
    return(
        <div id = "wd-dashboard">
            <h1 id = "wd-dasboard-title">Dashboard</h1> <hr />
            <h2 id = 'wd-dashboard-published'>Published Courses(12)</h2><hr />
            <div id = "wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4" >
                    <div className= "wd-dashboard-course-col" style={{width:"300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                                    to = "/Kanbas/Courses/1234/Home">
                                <img src="src/Kanbas/Images/reactjs.webp" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack Software developer
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link> 
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style= {{width:"300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to = "/Kanbas/Courses/7203/Home">
                                <img src="src/Kanbas/Images/numericalanalysis.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH7203NumericalAnalysis
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Numerical Analysis
                                    </p>
                                    <button className= "btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link" 
                                to = "/Kanbas/Courses/5110/Home">
                                <img src="src/Kanbas/Images/ALA.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH5110AppliedLinearAlgebra
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Applied Linear Algebra
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link" 
                                to= "/Kanbas/Courses/5540/Home">
                                <img src="src/Kanbas/Images/gameprogramming.jpeg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5540GameProgramming
                                    </h5>
                                    <p className="wd-dashboard-course-title card-next">
                                        Game Programming
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>   
                            </Link>  
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"300px"}}>
                        <div className="card rounded-3 overflow hidden">
                            <Link className="wd-dashboard-course-list" 
                                to="/Kanbas/Courses/7343/Home">
                                <img src="src/Kanbas/Images/appliedstatistics.jpeg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH7343AppliedStatistics
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Applied Statistics
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"300px"}}>
                        <div className="card rounded-3 overflow hidden">
                            <Link className="wd-dashboard-course-link" 
                                to ="/Kanbas/Courses/7243/Home">
                                <img src="src/Kanbas/Images/machinelearning.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH7243MachineLearning
                                    </h5> 
                                    <p className="wd-dashboard-course-title card-text">
                                        Machine Learning 1
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width:"300px"}}>
                        <div className="card rounded-3 overflow hidden">
                            <Link className="wd-dashboard-course-link" 
                                to ="/Kanbas/Courses/7243/Home">
                                <img src="src/Kanbas/Images/machinelearning.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH7241Probability
                                    </h5> 
                                    <p className="wd-dashboard-course-title card-text">
                                        Probability
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}