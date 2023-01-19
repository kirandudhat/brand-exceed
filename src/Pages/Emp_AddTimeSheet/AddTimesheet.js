import React, { useEffect, useState, Fragment } from "react";
import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import "./AddTimeSheet.css";
import { useDispatch, useSelector } from "react-redux";
import TimesheetformModel from "./TimesheetformModel";
import TimesheetinialValues from "./TimesheetInialValues";
import { ADD_TIMESHEET } from "../../redux/addTimeSheet/types";
import Button from "@restart/ui/esm/Button";
import { VIEW_PROJECTS_LIST } from "../../redux/projectsListing/types";
import AddOverTime from "./AddOverTime";
import { getUser } from "../../Utils/common/Common";
import DeleteIcon from '@mui/icons-material/Delete';
import { GridAddIcon } from "@mui/x-data-grid";

const AddTimesheet = () => {
  const {
    project_id,
    tasktitle,
    timesheet_time,
    status,
    taskdetails,
    timesheet_date,
    comments,
  } = TimesheetformModel;

  const dispatch = useDispatch();
  const [id, setId] = useState();
  useEffect(() => {
    const userDetails = getUser();

    if (userDetails?.userId) {
      setId(userDetails.userId);
    } else {
      setId(0);
    }
  }, []);
  const projectList = useSelector(
    (state) => state.ProjectsListReducer.projectsList
  );
  // useEffect(() => {
  //   dispatch({ type: VIEW_PROJECTS_LIST });
  // }, []);

  const handleProjectIdSelect = (
    selectedList,
    selectedItem,
    index,
    setFieldValue
  ) => {
    const selectedListIds = selectedList.map((list) => list.id);
    setFieldValue(`timesheet[${index}].${project_id.name}`, selectedListIds);
  };

  const handleResetProjectIdSelect = (
    selectedList,
    selectedItem,
    index,
    setFieldValue
  ) => {
    setFieldValue(`timesheet[${index}].${project_id.name}`, "");
  };

  const schema = Yup.object().shape({
    timesheet: Yup.array().of(
      Yup.object().shape({
        project_id: Yup.array()
          .of(Yup.string())
          .required("Project Name is Required"),
        tasktitle: Yup.string().trim().required("Task Title is Required"),
        timesheet_time: Yup.string()
          .required("Time is Required")
          .max(3, "Too Costly"),
        status: Yup.string().trim().required(" Status is Required"),
        taskdetails: Yup.string().trim().required("Task Details is Required "),
        timesheet_date: Yup.string()
          .trim()
          .required("Time Sheet Date Is Required"),
        // comments: Yup.string().trim().required("Comment is required"),
      })
    ),
  });

  return (
    <>
      <div className="addtimesheet">
        <div className="addtimesheetWrapper">
          <Link className="link" to="/employeetimesheet">
            <span style={{ fontWeight: "bold", fontSize:"25px" }}>Timesheet list</span>
          </Link>
        </div>

        <div className="addtimesheetmain shadow-none py-3 px-0 border">
          <Formik
            initialValues={TimesheetinialValues}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              dispatch({
                type: ADD_TIMESHEET,
                payload: {
                  timesheet: values.timesheet,
                  developer_id: id,
                },
              });
              resetForm({ values: "" });
              // history.push("/admin/client")
            }}
            render={({
              handleSubmit,
              errors,
              touched,
              values,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <FieldArray name="timesheet">
                  {({ insert, remove, push }) => (
                    <>
                      
                      {values.timesheet.map((timesheet, index) => (
                        <Fragment key={index}>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="project_id">
                                {project_id.label}
                              </label>

                              <Multiselect
                                options={projectList.rows ?? []}
                                singleSelect
                                // closeOnSelect={true}

                                onSelect={(selectedList, selectedItem) =>
                                  handleProjectIdSelect(
                                    selectedList,
                                    selectedItem,
                                    index,
                                    setFieldValue
                                  )
                                }
                                resetSelectedValues={(
                                  selectedList,
                                  removedItem
                                ) =>
                                  handleResetProjectIdSelect(
                                    selectedList,
                                    removedItem,
                                    index,
                                    setFieldValue
                                  )
                                }
                                displayValue="projectname" // Property name to display in the dropdown options
                                name={`timesheet[${index}].${project_id.name}`}
                                showArrow={true}
                              />

                              <div
                                className={
                                  "form-controll" +
                                  (errors.timesheet && touched.timesheet
                                    ? errors.timesheet[index] &&
                                      touched.timesheet[index]
                                      ? errors.timesheet[index].project_id &&
                                        touched.timesheet[index].project_id
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                              ></div>

                              <ErrorMessage
                                name={`timesheet.${index}.project_id`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="tasktitle">
                                {tasktitle.label}
                              </label>
                              <Field
                                name={`timesheet[${index}].${tasktitle.name}`}
                                type="text"
                                // /className="form-control"
                                className={
                                  "form-control" +
                                  (errors.timesheet && touched.timesheet
                                    ? errors.timesheet[index] &&
                                      touched.timesheet[index]
                                      ? errors.timesheet[index].tasktitle &&
                                        touched.timesheet[index].tasktitle
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                              />

                              <ErrorMessage
                                name={`timesheet.${index}.tasktitle`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="timesheet_date">
                                {timesheet_date.label}
                              </label>
                              <Field
                                name={`timesheet[${index}].${timesheet_date.name}`}
                                className={
                                  "form-control" +
                                  (errors.timesheet && touched.timesheet
                                    ? errors.timesheet[index] &&
                                      touched.timesheet[index]
                                      ? errors.timesheet[index]
                                          .timesheet_date &&
                                        touched.timesheet[index].timesheet_date
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                                type="date"
                              />
                              <ErrorMessage
                                name={`timesheet.${index}.timesheet_date`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="time">
                                {timesheet_time.label}
                              </label>
                              <Field
                                name={`timesheet[${index}].${timesheet_time.name}`}
                                className={
                                  "form-control" +
                                  (errors.timesheet && touched.timesheet
                                    ? errors.timesheet[index] &&
                                      touched.timesheet[index]
                                      ? errors.timesheet[index]
                                          .timesheet_time &&
                                        touched.timesheet[index].timesheet_time
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                                type="text"
                              />
                              <ErrorMessage
                                name={`timesheet.${index}.timesheet_time`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="status">{status.label}</label>
                              <Field
                                name={`timesheet[${index}].${status.name}`}
                              >
                                {({ field }) => (
                                  <select
                                    {...field}
                                    className={
                                      "form-control" +
                                      (errors.timesheet && touched.timesheet
                                        ? errors.timesheet[index] &&
                                          touched.timesheet[index]
                                          ? errors.timesheet[index].status &&
                                            touched.timesheet[index].status
                                            ? " is-invalid"
                                            : ""
                                          : ""
                                        : "")
                                    }
                                  >
                                    <option value="">
                                      Select Your Project Status{" "}
                                    </option>
                                    {[
                                      "Done",
                                      "Not Done",
                                      "Working",
                                      "Pending",
                                    ].map((i, ind) => (
                                      <option key={i} value={ind + 1}>
                                        {i}
                                      </option>
                                    ))}
                                  </select>
                                )}
                              </Field>
                              <ErrorMessage
                                name={`timesheet.${index}.status`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="taskdetails">
                                {taskdetails.label}
                              </label>
                              <Field
                                name={`timesheet[${index}].${taskdetails.name}`}
                                className={
                                  "form-control" +
                                  (errors.timesheet && touched.timesheet
                                    ? errors.timesheet[index] &&
                                      touched.timesheet[index]
                                      ? errors.timesheet[index].taskdetails &&
                                        touched.timesheet[index].taskdetails
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                                type="text"
                              />
                              <ErrorMessage
                                name={`timesheet.${index}.taskdetails`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="comments">{comments.label}</label>
                              <Field
                                name={`timesheet[${index}].${comments.name}`}
                                className={
                                  "form-control" +
                                  (errors.timesheet && touched.timesheet
                                    ? errors.timesheet[index] &&
                                      touched.timesheet[index]
                                      ? errors.timesheet[index].comments &&
                                        touched.timesheet[index].comments
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                                type="text"
                              />
                              <ErrorMessage
                                name={`timesheet.${index}.comments`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>
                          </Row>
                          <Button
                            onClick={() =>
                              remove(0, {
                                [project_id.name]: "",
                                [tasktitle.name]: "",
                                [timesheet_time.name]: "",
                                [status.name]: "",
                                [taskdetails.name]: "",
                                [timesheet_date.name]: "",
                                [comments.name]: "",
                              })
                            }
                            className="mb-3 edu-add-btn"
                            style={{marginLeft:"12px"}}
                          >
                            <DeleteIcon />
                          </Button>
                        </Fragment>
                      ))}
                      <div className="d-flex justify-content-end">

                        <Button
                          onClick={() =>
                            insert(0, {
                              [project_id.name]: "",
                              [tasktitle.name]: "",
                              [timesheet_time.name]: "",
                              [status.name]: "",
                              [taskdetails.name]: "",
                              [timesheet_date.name]: "",

                              [comments.name]: "",
                            })
                          }
                          className="btncolor"
                          style={{marginRight:"12px", marginBottom:"20px"}}
                        >
                          <GridAddIcon/> Add Row
                        </Button>
                      </div>
                    </>
                  )}
                </FieldArray>
                <br/>
                {values.timesheet.length < 1 ? "" : <button type="submit" className="btncolor" 
                            style={{marginLeft:"12px"}}
                >
                  submit
                </button>}
                
              </Form>
            )}
          />
        </div>

        <div className="addtimesheetWrapper px-0 mt-4">
          {/* <span style={{ fontWeight: "bold" }}> overtime Timesheet list</span> */}

          <AddOverTime />
        </div>
      </div>
    </>
  );
};
export default AddTimesheet;
