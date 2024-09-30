import React from "react";
export  function BootstrapTables(){
    return(
        <div id="wd-css-styling-tables">
            <h2>Tables</h2>
            <table className="table">
                <thead>
                    <tr className="table-dark"><th>Quiz</th><th>Topic</th><th>Date</th><th>Grade</th></tr>
                </thead>
                <tbody>
                    <tr className="table-warning"><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
                    <tr className="table-danger"><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
                    <tr className="table-primary"><td>Q3</td><td>JavaScript</td><td>2/17/21</td><td>90</td></tr>
                </tbody>
                <tfoot>
                <tr className="table-success"><td colSpan={3}>Average</td><td>90</td></tr>
                </tfoot>
            </table>
        </div>
    )
}
export function ResponsiveTables(){
    return(
        <div id="wd-css-responsive-tables">
            <h2>Responsive tables</h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr><th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                            <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                            <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                        <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                        <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export function ResponsiveForm(){
    return(
        <div id="wd-css-responsive-forms-1">
            <h3>Responsive forms</h3>
            <div className="mb-3 row">
                <label htmlFor="email1" className="col-sm-2 col-form-label">
                Email
                </label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="email1" value="email@example.com" />
            </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="password1" className="col-sm-2 col-form-label">
                Password
                </label>
            <div className="col-sm-10">
                <input type="password" id="password1" className="form-control" />
            </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="textarea2" className="col-sm-2 col-form-label">
                Bio
                </label>
            <div className="col-sm-10">
                <textarea className="form-control"id="textarea2" rows={3}></textarea>
            </div>
            </div>
        </div>
        
    )
}