import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { ProjectInitialValue } from "./ProjectInitialValue";
import ProjectFormModel from "./ProjectFormModel";
import * as Yup from "yup";

import Multiselect from "multiselect-react-dropdown";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { EMPLOYEE_LIST } from "../../redux/employeeListing/types";
import { ADD_DEVELOPER_PROJECTS } from "../../redux/addProjects/types";
import { CLIENT_LIST } from "../../redux/clientListing/types";
import history from "../../Utils/History/History";
import { FormateEditProjects } from "./FormateEditProjects";
import { VIEW_PROJECTS_DETAILS } from "../../redux/ViewProjects/types";
import { EDIT_PROJECTS } from "../../redux/editProjects/types";
import validationSchema from "./Validation";

const {
  projectname,
  projecttech,
  startdate,
  enddate,
  projectdescription,
  projectdeveloper,
  projecttype,
  projectclient,
} = ProjectFormModel;

const AddProject = () => {
  const empdata = useSelector((state) => state.empListReducer.employeeList);
  const clientList = useSelector((state) => state.clientListReducer.clientList);
  const ViewProjectData = useSelector(
    (state) => state.viewProjectsDeatilsReducer.viewProjectData
  );
  const [mainFormValues, setMainFormValues] = useState(ProjectInitialValue);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: EMPLOYEE_LIST });
    dispatch({ type: CLIENT_LIST });
  }, []);

  const handleProjectDeveloperSelect = (selectedList, item, setFieldValue) => {
    const selectedListIds = selectedList.map((list) => String(list.id));
    setFieldValue(projectdeveloper.name, selectedListIds);
  };

  const handleClientChange = (selectedList, item, setFieldValue) => {
    const selectedClientIds = selectedList.map((list) => String(list.id));
    setFieldValue(projectclient.name, selectedClientIds);
  };

  const handleProjecttechSelect = (selectedList, item, setFieldValue) => {
    const selectedProjectTech = selectedList.map((list) => list.name);
    setFieldValue(projecttech.name, selectedProjectTech);
  };

  const cities = [
    { id: "0", name: "React", value: "React" },
    { id: "1", name: "React Native", value: "React Native" },
    { id: "2", name: "Vue", value: "Vue" },
    { id: "3", name: "Scottsdale", value: "Scottsdale" },
  ];

  // const options = clientList.map((d) => ({
  //   id: d.id,
  //   value: d.clientname,
  //   name: d.clientname,
  // }));

  useEffect(() => {
    if (id) {
      dispatch({ type: VIEW_PROJECTS_DETAILS, payload: id });
    }
  }, []);

  useEffect(() => {
    if (id && ViewProjectData) {
      setMainFormValues(FormateEditProjects(ViewProjectData));
    }
  }, [id, ViewProjectData]);
  return (
    <>
      <div className="project">
        <div className="projectWrapper">
          <Link className="link" to="/admin/project">
            <span style={{ fontWeight: "bold", fontSize:"25px" }}>Add Project</span>
          </Link>
        </div>

        <div className="projectmain shadow-none p-3 border">
          <Formik
            initialValues={mainFormValues}
            validationSchema={Yup.object().shape({
              [projectname.name]: Yup.string()
                .trim(
                  "The contact name cannot include leading and trailing spaces"
                )
                .required("Project Name is required"),
              [projecttech.name]: Yup.array()
                .min(1, "You can't leave this blank.")
                .required("You can't leave this blank.")
                .nullable(),

              [startdate.name]: Yup.string()
                .trim(
                  "The contact name cannot include leading and trailing spaces"
                )
                .required("Date is required"),
              [enddate.name]: Yup.string()
                .trim(
                  "The contact name cannot include leading and trailing spaces"
                )
                .required("Date is required"),
              [projectdescription.name]: Yup.string()
                .trim(
                  "The contact name cannot include leading and trailing spaces"
                )
                .required("Descripations is required"),
              [projectdeveloper.name]: Yup.array()
                .of(Yup.string())
                .min(1, "Developer is required"),
              [projecttype.name]: Yup.string()
                .trim(
                  "The contact name cannot include leading and trailing spaces"
                )
                .required("Project Type is required"),
              [projectclient.name]: Yup.array()
                .of(Yup.string())
                .min(1, "Client  is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              if (id) {
                dispatch({ type: EDIT_PROJECTS, payload: values, id: id });
                history.push("/admin/project");
              } else {
                dispatch({ type: ADD_DEVELOPER_PROJECTS, payload: values });
                history.push("/admin/project");
              }
            }}
            enableReinitialize={true}
            render={({
              handleSubmit,
              errors,
              touched,
              values,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="projectname">{projectname.label} </label>
                    <Field
                      name="projectname"
                      className={
                        "form-control" +
                        (errors.projectname && touched.projectname
                          ? " is-invalid"
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name="projectname"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="projecttech">{projecttech.label}</label>
                    <Multiselect
                      options={cities ?? []} // Options to display in the dropdown
                      selectedValues={cities.filter((data) =>
                        values.projecttech?.includes(String(data.name))
                      )} // Preselected value to persist in dropdown
                      onSelect={(selectedList, selectedItem) =>
                        handleProjecttechSelect(
                          selectedList,
                          selectedItem,
                          setFieldValue
                        )
                      } // Function will trigger on select event
                      onRemove={(selectedList, removedItem) =>
                        handleProjecttechSelect(
                          selectedList,
                          removedItem,
                          setFieldValue
                        )
                      } // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                      name="projecttech"
                      showArrow={true}
                      //  errors={projectdeveloper}
                    />

                    {errors.projecttech && (
                      <span
                        className={
                          "form-control" +
                          (errors.projecttech ? " is-invalid" : "")
                        }
                      >
                        {errors.projecttech}
                      </span>
                    )}

                    <ErrorMessage
                      name="projecttech"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="startdate">{startdate.label}</label>

                    <Field
                      name="startdate"
                      className={
                        "form-control" +
                        (errors.startdate && touched.startdate
                          ? " is-invalid"
                          : "")
                      }
                      type="date"
                    />
                    <ErrorMessage
                      name="startdate"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="enddate">{enddate.label}</label>

                    <Field
                      name="enddate"
                      className={
                        "form-control" +
                        (errors.enddate && touched.enddate ? " is-invalid" : "")
                      }
                      type="date"
                    />
                    <ErrorMessage
                      name="enddate"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="projectdescription">
                      {projectdescription.label}
                    </label>

                    <Field
                      name="projectdescription"
                      className={
                        "form-control" +
                        (errors.projectdescription && touched.projectdescription
                          ? " is-invalid"
                          : "")
                      }
                      type="text"
                      as="textarea"
                    />
                    <ErrorMessage
                      name="projectdescription"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="projectdeveloper">
                      {projectdeveloper.label}
                    </label>
                    <Multiselect
                      options={empdata ?? []} // Options to display in the dropdown
                      selectedValues={empdata.filter((data) => {
                        // debugger;
                        return values.projectdeveloper?.includes(
                          String(data.id)
                        );
                      })} // Preselected value to persist in dropdown
                      onSelect={(selectedList, selectedItem) =>
                        handleProjectDeveloperSelect(
                          selectedList,
                          selectedItem,
                          setFieldValue
                        )
                      } // Function will trigger on select event
                      onRemove={(selectedList, removedItem) =>
                        handleProjectDeveloperSelect(
                          selectedList,
                          removedItem,
                          setFieldValue
                        )
                      } // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                      name="projectdeveloper"
                      showArrow={true}
                      //  errors={projectdeveloper}
                    />
                    {errors.projectdeveloper && (
                      <span
                        className={
                          "form-control" +
                          (errors.projectdeveloper ? " is-invalid" : "")
                        }
                      >
                        {errors.projectdeveloper}
                      </span>
                    )}

                    <ErrorMessage
                      name="projectdeveloper"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="projecttype">{projecttype.label}</label>

                    <Field
                      name="projecttype"
                      className={
                        "form-control" +
                        (errors.projecttype && touched.projecttype
                          ? " is-invalid"
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name="projecttype"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="projectclient">{projectclient.label}</label>
                    <Multiselect
                      options={clientList ?? []} // Options to display in the dropdown
                      selectedValues={clientList.filter((data) =>
                        values.projectclient?.includes(String(data.id))
                      )} // Preselected value to persist in dropdown
                      onSelect={(selectedList, selectedItem) =>
                        handleClientChange(
                          selectedList,
                          selectedItem,
                          setFieldValue
                        )
                      } // Function will trigger on select event
                      onRemove={(selectedList, removedItem) =>
                        handleClientChange(
                          selectedList,
                          removedItem,
                          setFieldValue
                        )
                      } // Function will trigger on remove event
                      displayValue="clientname" // Property name to display in the dropdown options
                      name="projectclient"
                      showArrow={true}
                    />
                    {errors.projectclient && (
                      <span
                        className={
                          "form-control" +
                          (errors.projectclient && touched.projectclient
                            ? " is-invalid"
                            : "")
                        }
                      >
                        {errors.projectclient}
                      </span>
                    )}

                    <ErrorMessage
                      name="projectclient"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>

                <button type="submit" className="btncolor">
                  {id ? "Update" : "Submit"}
                </button>
              </Form>
            )}
          />
        </div>
      </div>
    </>
  );
};
export default AddProject;
