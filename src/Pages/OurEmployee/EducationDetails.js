import React, { Fragment, useRef, useState } from "react";
import { Field, ErrorMessage, FieldArray } from "formik";
import { Form, Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridAddIcon } from "@mui/x-data-grid";
import ImagePreview from "./ImagePreview";
import imgPrivew from "../../assest/img/dummy-img.png";
import useStyles from "./styles";

export default function EducationDetails(props) {
  const fileEduRef = useRef(null);
  const [imageSet, setImageset] = useState({
    eduImg: null,
  });
  const classes = useStyles();
  const {
    educationDetails: { degree, board, percentage, passingyear, degreephotoes },
    values,
    // setFieldValue,
    errors,
    touched,
  } = props;

  return (
    <>
      {console.log("errors", errors, touched)}
      <FieldArray name="educationDetails">
        {({ insert, remove, push }) => (
          <>
            {values.educationDetails.map((education, index) => (
              <Fragment key={index}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="degree">{degree.label}</label>

                    <Field
                      name={`educationDetails.[${index}].${degree.name}`}
                      className={
                        "form-control" +
                        (errors.educationDetails && touched.educationDetails
                          ? errors.educationDetails[index] &&
                            touched.educationDetails[index]
                            ? errors.educationDetails[index].degree &&
                              touched.educationDetails[index].degree
                              ? " is-invalid"
                              : ""
                            : ""
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name={`educationDetails.${index}.degree`}
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="university">{board.label}</label>
                    <Field
                      name={`educationDetails[${index}].${board.name}`}
                      className={
                        "form-control" +
                        (errors.educationDetails && touched.educationDetails
                          ? errors.educationDetails[index] &&
                            touched.educationDetails[index]
                            ? errors.educationDetails[index].board &&
                              touched.educationDetails[index].board
                              ? " is-invalid"
                              : ""
                            : ""
                          : "")
                      }
                      type="text"
                    />

                    <ErrorMessage
                      name={`educationDetails.${index}.board`}
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="percentage">{percentage.label}</label>
                    <Field
                      name={`educationDetails[${index}].${percentage.name}`}
                      className={
                        "form-control" +
                        (errors.educationDetails && touched.educationDetails
                          ? errors.educationDetails[index] &&
                            touched.educationDetails[index]
                            ? errors.educationDetails[index].percentage &&
                              touched.educationDetails[index].percentage
                              ? " is-invalid"
                              : ""
                            : ""
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name={`educationDetails.${index}.percentage`}
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="passingyear">{passingyear.label}</label>
                    <Field
                      name={`educationDetails[${index}].${passingyear.name}`}
                      className={
                        "form-control" +
                        (errors.educationDetails && touched.educationDetails
                          ? errors.educationDetails[index] &&
                            touched.educationDetails[index]
                            ? errors.educationDetails[index].passingyear &&
                              touched.educationDetails[index].passingyear
                              ? " is-invalid"
                              : ""
                            : ""
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name={`educationDetails.${index}.passingyear`}
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="degreephotoes">{degreephotoes.label}</label>
                    <Field
                      name={`educationDetails[${index}].${degreephotoes.name}`}
                      className={
                        "form-control" +
                        (errors.educationDetails && touched.educationDetails
                          ? errors.educationDetails[index] &&
                            touched.educationDetails[index]
                            ? errors.educationDetails[index].degreephotoes &&
                              touched.educationDetails[index].degreephotoes
                              ? " is-invalid"
                              : ""
                            : ""
                          : "")
                      }
                    >
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <>
                            <input
                              ref={fileEduRef}
                              hidden
                              type="file"
                              placeholder="Email"
                              name={field.name}
                              value=""
                              onChange={(e) => {
                                setFieldValue(
                                  `educationDetails[${index}].${degreephotoes.name}`,
                                  e.target.files[0].name
                                );
                                setImageset({
                                  ...imageSet,
                                  eduImg: e.target.files[0],
                                });
                              }}
                            />
                            {imageSet.eduImg ? (
                              <ImagePreview
                                key="imge3"
                                file={imageSet.eduImg}
                              />
                            ) : (
                              <img
                                src={imgPrivew}
                                style={{ width: "100px", height: "100px" }}
                              />
                            )}
                            <button
                              variant="contained"
                              type="button"
                              color="primary"
                              className={classes.button}
                              style={{ border: "none" }}
                              onClick={() => {
                                fileEduRef?.current.click();
                              }}
                            >
                              Upload
                            </button>
                          </>
                        );
                      }}
                    </Field>
                    <div component="div" className="invalid-feedback">
                      {/* {errors.educationDetails[0]?.degreephotoes} */}
                    </div>
                    <ErrorMessage
                      name={`educationDetails.${index}.degreephotoes`}

                      // component="div"
                      // className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>
                <Button
                  onClick={() => remove(index)}
                  className="mb-3 edu-add-btn"
                >
                  <DeleteIcon />
                </Button>
              </Fragment>
            ))}
            <div>
              <Button
                onClick={() => {
                  insert(0, {
                    [degree.name]: "",
                    [board.name]: "",
                    [percentage.name]: "",
                    [passingyear.name]: "",
                    [degreephotoes.name]: "",
                  });
                }}
                className="edu-add-btn"
              >
                <GridAddIcon /> Add Row
              </Button>
            </div>
          </>
        )}
      </FieldArray>
    </>
  );
}
