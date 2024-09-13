import React from "react";
export default function AssignmentEditor(){
    return(
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your web applications running on Netlify.
        The landing page should include should include the following: your full name and section links to each each of the lab
        assignments, Link to the Kanbas applications, Links to all the relevant source code repositories. The kanbas application 
        should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
            </td>
            <td>
            <input id="wd-points" value={100} />
            </td>
        </tr>
        <br />
        <tr>
            <td align = "right" valign= "top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id = "wd-group">
                    <option value="Upcomming Assignments">Upcomming Assignments</option>
                    <option value="Previous Assignments">Previous Assignments</option>
                </select>
            </td>
        </tr>
        <br />
        <tr>
            <td align = "right" valign= "top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id = "wd-display-grade-as">
                    <option value="Percentage">Percentage</option>
                    <option value="Point Value">Point Value</option>
                </select>
            </td>
        </tr>
        <br />
        <tr>
            <td align = "right" valign= "top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id = "wd-submission-type">
                    <option value="Online">Online</option>
                    <option value="In Person">In Person</option>
                </select>
            </td>
        </tr>
        <br />
        <tr>
            <br />
            <td align = "right" valign= "top">
                <td align="left" valign="top">  
                    <label htmlFor="wd-text-entry">Online Entry Options</label>
                    <br />  
                    <input type= "checkbox" id = "wd-text-entry" value = "Text Entry" name = "Text Entry"/>
                    <label htmlFor="wd-text-entry"> Text Entry </label>
                    <br />
                    <input type= "checkbox" id = "wd-website-url" value = "Website Url" name = "Website Url"/>
                    <label htmlFor="wd-website-url"> Website URL </label>
                    <br />
                    <input type= "checkbox" id = "wd-media-recordngs" value = "Media Recordings" name = "Media Recordings"/>
                    <label htmlFor="wd-website-url"> Media Recordings </label>
                    <br />
                    <input type= "checkbox" id = "wd-student-annotation" value = "Student Annotation" name = "Student Annotation"/>
                    <label htmlFor="wd-student-annotation"> Student Annotation </label>
                    <br />
                    <input type= "checkbox" id = "wd-file-uploads" value = "File Uploads" name = "File Uploads"/>
                    <label htmlFor="wd-file-uploads"> File Uploads </label>
                </td>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
                <br />
                <input type="text" id = "wd-assign-to"/>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
                <br />
                <input type="date" id = "wd-due-date"/>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-from">Avaliable From</label>
            </td>
            <td>
                <br />
                <input type="date" id = "wd-available-from"/>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-until">Avaliable Until</label>
            </td>
            <td>
                <br />
                <input type="date" id = "wd-available-until"/>
            </td>
        </tr>
      </table>
      <hr />
      <table align="right">
        <tr>
            <td>
                <button>Cancel</button>
            </td> 
            <td>
                <button>Save</button>
            </td>
        </tr>
      </table>
    </div>

    );
}