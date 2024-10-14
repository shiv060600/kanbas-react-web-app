import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { cid } = useParams();

  return (
    <div id="wd-assignments-editor" className="container">
      {assignments
        .filter((assignment: any) => assignment.course === cid)
        .map((assignment: any) => (
          <div key={assignment._id}>
            <label htmlFor="wd-name"> {assignment.title} </label>
            <br />
            <input
              id="wd-name"
              type="text"
              className="form-control"
              value={`${assignment._id}`}
              readOnly
            />
            <br />
            <textarea
              id="wd-description"
              className="form-control form-control-lg"
              rows={5}
              defaultValue={`The assignment is available online. Submit a link to the landing page of your web applications running on Netlify. The landing page should include the following: your full name and section links to each of the lab assignments, Link to the Kanbas applications, Links to all the relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.`}
            />
            <br />
            <br />
            <Row>
              <Col md={7}>
                {/* Submission Box */}
                <fieldset className="border p-3">
                  <legend className="w-auto px-2">Submission</legend>
                  <table>
                    <tbody>
                      <tr>
                        <td align="right" valign="top">
                          <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                          <input
                            id="wd-points"
                            type="text"
                            className="form-control"
                            value={100}
                            readOnly
                          />
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td align="right" valign="top">
                          <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                          <select id="wd-group" className="form-select">
                            <option value="Upcoming Assignments">
                              Upcoming Assignments
                            </option>
                            <option value="Previous Assignments">
                              Previous Assignments
                            </option>
                          </select>
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td align="right" valign="top">
                          <label htmlFor="wd-display-grade-as">
                            Display Grade as
                          </label>
                        </td>
                        <td>
                          <select
                            id="wd-display-grade-as"
                            className="form-select"
                          >
                            <option value="Percentage">Percentage</option>
                            <option value="Point Value">Point Value</option>
                          </select>
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td align="right" valign="top">
                          <label htmlFor="wd-submission-type">
                            Submission Type
                          </label>
                        </td>
                        <td>
                          <select
                            id="wd-submission-type"
                            className="form-select"
                          >
                            <option value="Online">Online</option>
                            <option value="In Person">In Person</option>
                          </select>
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td
                          align="left"
                          valign="top"
                          className="form-check"
                          style={{ width: "100%" }}
                        >
                          <label htmlFor="wd-text-entry">
                            Online Entry Options
                          </label>
                          <br />
                          <input
                            type="checkbox"
                            id="wd-text-entry"
                            value="Text Entry"
                            name="Text Entry"
                          />
                          <label
                            htmlFor="wd-text-entry"
                            className="ms-2"
                          >
                            {" "}
                            Text Entry{" "}
                          </label>
                          <br />
                          <input
                            type="checkbox"
                            id="wd-website-url"
                            value="Website Url"
                            name="Website Url"
                          />
                          <label
                            htmlFor="wd-website-url"
                            className="ms-2"
                          >
                            {" "}
                            Website URL{" "}
                          </label>
                          <br />
                          <input
                            type="checkbox"
                            id="wd-media-recordings"
                            value="Media"
                            name="Media"
                          />
                          <label
                            htmlFor="wd-media-recordings"
                            className="ms-2"
                          >
                            Media Recordings{" "}
                          </label>
                          <br />
                          <input
                            type="checkbox"
                            id="wd-student-annotation"
                            value="Student Annotation"
                            name="Student Annotation"
                          />
                          <label
                            htmlFor="wd-student-annotation"
                            className="ms-2"
                          >
                            {" "}
                            Student Annotation{" "}
                          </label>
                          <br />
                          <input
                            type="checkbox"
                            id="wd-file-uploads"
                            value="File Uploads"
                            name="File Uploads"
                          />
                          <label
                            htmlFor="wd-file-uploads"
                            className="ms-2"
                          >
                            {" "}
                            File Uploads{" "}
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </fieldset>
              </Col>
              <Col md={7}>
                {/* Assign Box */}
                <fieldset className="border p-3">
                  <legend className="w-auto px-2">Assign</legend>
                  <table>
                    <tbody>
                      <tr>
                        <td align="right" valign="top">
                          <label htmlFor="wd-assign-to">Assign to</label>
                        </td>
                        <td>
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            id="wd-assign-to"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td align="right" valign="top">
                          <label htmlFor="wd-due-date">Due</label>
                        </td>
                        <td>
                          <br />
                          <input
                            type="date"
                            className="form-control"
                            id="wd-due-date"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td align="right" valign="top">
                          <label htmlFor="wd-available-from">
                            Available From
                          </label>
                        </td>
                        <td>
                          <br />
                          <input
                            type="date"
                            className="form-control"
                            id="wd-available-from"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td align="right" valign="top">
                          <label htmlFor="wd-available-until">
                            Available Until
                          </label>
                        </td>
                        <td>
                          <br />
                          <input
                            type="date"
                            className="form-control"
                            id="wd-available-until"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </fieldset>
              </Col>
            </Row>
            <hr />
            <table align="right">
              <tbody>
                <tr>
                  <td>
                    <button className="btn btn-secondary">Cancel</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Save</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
}
