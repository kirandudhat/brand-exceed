import { ErrorMessage, Field, FieldArray } from "formik";
import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { GridAddIcon } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProjectDetails(props) {
  const {
    ProjectDetails: {
      projectName,
      technology,
      projectStartDate,
      projectEndDate,
      projectRole,
      responsibility,
    },
    values,
  } = props;

  return (
    <div>
      <FieldArray name="projectDetails">
        {({ insert, remove, push }) => (
          <>
            {values.projectDetails.map((Project, index) => (
              <>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="projectName">{projectName.label}</label>

                    <Field
                      name={`projectDetails[${index}].${projectName.name}`}
                      className="form-control"
                      type="text"
                    />
                    <ErrorMessage name="projectName" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="technology">{technology.label}</label>

                    <Field
                      name={`projectDetails[${index}].${technology.name}`}
                      className="form-control"
                      type="text"
                    />
                    <ErrorMessage name="startDate" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="projectStartDate">
                      {projectStartDate.label}
                    </label>

                    <Field
                      name={`projectDetails[${index}].${projectStartDate.name}`}
                      className="form-control"
                      type="date"
                    />
                    <ErrorMessage name="StartDate" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="projectEndDate">
                      {projectEndDate.label}
                    </label>

                    <Field
                      name={`projectDetails[${index}].${projectEndDate.name}`}
                      className="form-control"
                      type="date"
                    />
                    <ErrorMessage name="EndDate" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="projectRole">{projectRole.label}</label>

                    <Field
                      name={`projectDetails[${index}].${projectRole.name}`}
                      className="form-control"
                      type="text"
                    />
                    <ErrorMessage name="projectRole" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="responsibility">
                      {responsibility.label}
                    </label>

                    <Field
                      name={`projectDetails[${index}].${responsibility.name}`}
                      className="form-control"
                      type="text"
                    />
                    <ErrorMessage name="responsibility" />
                  </Form.Group>
                </Row>
                <Button
              onClick={() =>
                remove(0, {
                  [projectName.name]: "",
                  [technology.name]: "",
                  [projectStartDate.name]: "",
                  [projectEndDate.name]: "",
                  [projectRole.name]: "",
                  [responsibility.name]: "",
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
