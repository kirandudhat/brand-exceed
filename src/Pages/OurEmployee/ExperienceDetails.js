import { Field, ErrorMessage, FieldArray } from "formik";
// import { ErrorMessage, Field ,} from "formik";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import { GridAddIcon } from "@mui/x-data-grid";

export default function ExperienceDetails(props) {
  const {
    experienceDetails: { companyname, startdate, enddate, role },
    values,
    errors,
    touched,
  } = props;

  return (
    <div>
      <FieldArray name="experienceDetails">
        {({ insert, remove, push }) => (
          <>
            
            {values.experienceDetails.map((experience, index) => (
              <>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="companyname">{companyname.label}</label>

                    <Field
                      name={`experienceDetails[${index}].${companyname.name}`}
                      className={
                        "form-control" +
                        (errors.experienceDetails && touched.experienceDetails
                          ? errors.experienceDetails[index] &&
                            touched.experienceDetails[index]
                            ? errors.experienceDetails[index].companyname &&
                              touched.experienceDetails[index].companyname
                              ? " is-invalid"
                              : ""
                            : ""
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name={`experienceDetails.${index}.companyname`}
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="startdate">{startdate.label}</label>

                    <Field
                      name={`experienceDetails[${index}].${startdate.name}`}
                      className={
                        "form-control" +
                        (errors.experienceDetails && touched.experienceDetails
                          ? errors.experienceDetails[index] &&
                            touched.experienceDetails[index]
                            ? errors.experienceDetails[index].startdate &&
                              touched.experienceDetails[index].startdate
                              ? " is-invalid"
                              : ""
                            : ""
                          : "")
                      }
                      type="date"
                    />
                    <ErrorMessage
                      name={`experienceDetails.${index}.startdate`}
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="enddate">{enddate.label}</label>

                    <Field
                      name={`experienceDetails[${index}].${enddate.name}`}
                      className={
                        "form-control" +
                        (errors.experienceDetails && touched.experienceDetails
                          ? errors.experienceDetails[index] &&
                            touched.experienceDetails[index]
                            ? errors.experienceDetails[index].enddate &&
                              touched.experienceDetails[index].enddate
                              ? " is-invalid"
                              : ""
                            : ""
                          : "")
                      }
                      type="date"
                    />
                    <ErrorMessage
                      name={`experienceDetails.${index}.enddate`}
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="role">{role.label}</label>

                    <Field
                      name={`experienceDetails[${index}].${role.name}`}
                      className={
                        "form-control" +
                        (errors.experienceDetails && touched.experienceDetails
                          ? errors.experienceDetails[index] &&
                            touched.experienceDetails[index]
                            ? errors.experienceDetails[index].role &&
                              touched.experienceDetails[index].role
                              ? " is-invalid"
                              : ""
                            : ""
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name={`experienceDetails.${index}.role`}
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>
                <Button
              onClick={() =>
                remove(0, {
                  [companyname.name]: "",
                  [startdate.name]: "",
                  [enddate.name]: "",
                  [role.name]: "",
                })
              }
              className="mb-3 edu-add-btn"
            >
              <DeleteIcon />
              
            </Button>
              </>
            ))}
            <Button
              onClick={() =>
                insert(0, {
                  [companyname.name]: "",
                  [startdate.name]: "",
                  [enddate.name]: "",
                  [role.name]: "",
                })
              }
              className="edu-add-btn"
            >
              <GridAddIcon/> Add Row
            </Button>
          </>
        )}
      </FieldArray>
    </div>
  );
}
