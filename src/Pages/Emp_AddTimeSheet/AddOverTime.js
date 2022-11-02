import React, { useEffect, Fragment } from "react";
import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Form, Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import "./AddTimeSheet.css";
import { useDispatch, useSelector } from "react-redux";
import TimesheetformModel from "./TimesheetformModel";
import TimesheetinialValues from "./TimesheetInialValues";
import { ADD_OVERTIME } from "../../redux/addTimeSheet/types";
import Button from "@restart/ui/esm/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import { VIEW_PROJECTS_LIST } from "../../redux/projectsListing/types";
import { GridAddIcon } from "@mui/x-data-grid";
const AddOverTime = () => {
  const {
    project_id,
    tasktitle,
    overtime_time,
    status,
    taskdetails,
    overtime_date,
    comments,
    // description,
  } = TimesheetformModel;

  const dispatch = useDispatch();
  

  const projectList = useSelector(
    (state) => state.ProjectsListReducer.projectsList
  );

  useEffect(() => {
    dispatch({ type: VIEW_PROJECTS_LIST });
  }, []);

  const handleProjectIdSelect = (
    selectedList,
    selectedItem,
    index,
    setFieldValue
  ) => {
    const selectedListIds = selectedList.map((list) => list.id);
    setFieldValue(`overtime[${index}].${project_id.name}`, selectedListIds);
  };

  const validateSchema = Yup.object().shape({
    overtime: Yup.array().of(
      Yup.object().shape({
        project_id: Yup.array().of(Yup.string()).required("Project Name is Required"),
        tasktitle: Yup.string().trim().required("Task Title is Required"),
        overtime_time: Yup.string()
        .required("Over Time is Required")
        .max(3, "Too Costly"),
        status: Yup.string().trim().required("Status is Required "),
        taskdetails: Yup.string().trim().required("Task Details is Required "),
        overtime_date: Yup.string().trim().required("Time Sheet Date Is Required"),
        // comments: Yup.string().trim().required("Comment is required"),
        // description: Yup.string().trim().required("Description is required"),
      })
    ),
  });

  return (
    <>
      <div className="addtimesheet">
        <div className="addtimesheetWrapper">
          <span style={{ fontWeight: "bold", fontSize: "25px" }}>Add over Time</span>
        </div>

        <div className="addtimesheetmain shadow-none py-3 px-0 border">
          <Formik
            initialValues={TimesheetinialValues}
            validationSchema={validateSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              
              dispatch({
                type: ADD_OVERTIME,
                payload: {
                  overtime: values.overtime,
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
                <FieldArray name="overtime">
                  {({ insert, remove, push }) => (
                    <>
                      
                      {values.overtime.map((timesheet, index) => (
                        <Fragment key={index}>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="project_id">
                                {project_id.label}
                              </label>

                              <Multiselect
                                options={projectList.rows ?? []}
                                singleSelect
                                onSelect={(selectedList, selectedItem) =>
                                  handleProjectIdSelect(
                                    selectedList,
                                    selectedItem,
                                    index,
                                    setFieldValue
                                  )
                                }
                                onRemove={(selectedList, removedItem) =>
                                  handleProjectIdSelect(
                                    selectedList,
                                    removedItem,
                                    index,
                                    setFieldValue
                                  )
                                }
                                displayValue="projectname" // Property name to display in the dropdown options
                                // name="overtime_project_id"
                                name={`overtime[${index}].${project_id.name}`}
                                showArrow={true}
                                //  errors={projectdeveloper}
                              />
                              <div
                                className={
                                  "form-controll" +
                                  (errors.overtime && touched.overtime
                                    ? errors.overtime[index] &&
                                      touched.overtime[index]
                                      ? errors.overtime[index].project_id &&
                                        touched.overtime[index].project_id
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                              ></div>
                              <ErrorMessage
                                name={`overtime.${index}.project_id`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="tasktitle">
                                {tasktitle.label}
                              </label>
                              <Field
                                name={`overtime[${index}].${tasktitle.name}`}
                                className={
                                  "form-control" +
                                  (errors.overtime && touched.overtime
                                    ? errors.overtime[index] &&
                                      touched.overtime[index]
                                      ? errors.overtime[index].tasktitle &&
                                        touched.overtime[index].tasktitle
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                                type="text"
                              />
                              <ErrorMessage
                                name={`overtime[${index}].${tasktitle.name}`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="overtime_date">
                                {overtime_date.label}
                              </label>
                              <Field
                                name={`overtime[${index}].${overtime_date.name}`}
                                className={
                                  "form-control" +
                                  (errors.overtime && touched.overtime
                                    ? errors.overtime[index] &&
                                      touched.overtime[index]
                                      ? errors.overtime[index]
                                          .overtime_date &&
                                        touched.overtime[index].overtime_date
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                                type="date"
                              />
                              <ErrorMessage
                                name={`overtime.${index}.overtime_date`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>
                            
                          </Row>

                          <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="time">
                                {overtime_time.label}
                              </label>
                              <Field
                                name={`overtime[${index}].${overtime_time.name}`}
                                className={
                                  "form-control" +
                                  (errors.overtime && touched.overtime
                                    ? errors.overtime[index] &&
                                      touched.overtime[index]
                                      ? errors.overtime[index].overtime_time &&
                                        touched.overtime[index].overtime_time
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                                type="text"
                              />
                              <ErrorMessage
                                name={`overtime[${index}].${overtime_time.name}`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group> 
                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="status">{status.label}</label>
                              <Field name={`overtime[${index}].${status.name}`}>
                                {({ field }) => (
                                  <select
                                    {...field}
                                    className={
                                      "form-control" +
                                      (errors.overtime && touched.overtime
                                        ? errors.overtime[index] &&
                                          touched.overtime[index]
                                          ? errors.overtime[index].status &&
                                            touched.overtime[index].status
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
                                name={`overtime.${index}.status`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>
                            
                            <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="taskdetails">
                                {taskdetails.label}
                              </label>
                              <Field
                                name={`overtime[${index}].${taskdetails.name}`}
                                className={
                                  "form-control" +
                                  (errors.overtime && touched.overtime
                                    ? errors.overtime[index] &&
                                      touched.overtime[index]
                                      ? errors.overtime[index].taskdetails &&
                                        touched.overtime[index].taskdetails
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                                type="text"
                              />
                              <ErrorMessage
                                name={`overtime[${index}].${taskdetails.name}`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>

                                                        
                          </Row>
                          <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridEmail">
                              <label htmlFor="comments">{comments.label}</label>
                              <Field
                                name={`overtime[${index}].${comments.name}`}
                                className={
                                  "form-control" +
                                  (errors.overtime && touched.overtime
                                    ? errors.overtime[index] &&
                                      touched.overtime[index]
                                      ? errors.overtime[index].comments &&
                                        touched.overtime[index].comments
                                        ? " is-invalid"
                                        : ""
                                      : ""
                                    : "")
                                }
                                type="text"
                              />
                              <ErrorMessage
                                name={`overtime[${index}].${comments.name}`}
                                component="div"
                                className="invalid-feedback"
                              />
                            </Form.Group>

                          </Row>
                          <Button
                            onClick={() => remove(index)}
                            className="mb-3 edu-add-btn"
                            style={{marginLeft: "12px"}}
                          >
                                                        <DeleteIcon />
                          </Button>
                        </Fragment>
                      ))}
                      <div className="d-flex justify-content-end">
                      <Button
                        onClick={() =>
                          insert(0, {
                            [project_id]: "",
                            [tasktitle]: "",
                            [overtime_time]: "",
                            [status]: "",
                            [taskdetails]: "",
                            [overtime_date]: "",
                            // [description.name]: "",
                            [comments.name]: "",
                          })
                        }
                        className="btncolor"
                        style={{marginRight:"12px"}}
                      >
                       <GridAddIcon/> Add Row
                      </Button>
                      </div>
                    </>
                  )}
                </FieldArray>
                {values.overtime.length < 1 ? "" : 
                  <button type="submit" className="btncolor" style={{marginLeft:"12px"}}>
                    Submit
                  </button>
                }
                
              </Form>
            )}
          />
        </div>
      </div>
    </>
  );
};
export default AddOverTime;
