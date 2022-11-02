import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import ClientFormModel from "./ClientFormModel";
import ClientInialValue from "./ClientInialValue";
import { useParams } from "react-router-dom";
import "./Client.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CLIENTS } from "../../redux/addClients/types";
import history from "../../Utils/History/History";
import { VIEW_CLIENTS_DETAILS } from "../../redux/ViewClients/types";
import { FormateEditClients } from "./FormateEditClients";
import { EDIT_CLIENT } from "../../redux/editClients/types";
import validationSchema from "./Validation";

const AddClient = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [mainFormValues, setMainFormValues] = useState(ClientInialValue);
  const ViewClientData = useSelector(
    (state) => state.viewClientsDeatilsReducer.viewClientsData
  );
  const {
    companyName,
    location,
    website,
    linkdinProfile,
    clientcomments,
    priority,
    clientname,
    email,
    clientlinkedin,
    phone,
  } = ClientFormModel;

  useEffect(() => {
    if (id) {
      dispatch({ type: VIEW_CLIENTS_DETAILS, payload: id });
    }
  }, [id]);
  useEffect(() => {
    if (id && ViewClientData) {
      setMainFormValues(FormateEditClients(ViewClientData));
    }
  }, [id,ViewClientData]);
  return (
    <>
      <div className="client">
        <div className="clientWrapper">
          <Link className="link" to="/admin/client">
            <span style={{ fontWeight: "bold", fontSize:"25px" }}>Client list</span>
          </Link>
        </div>

        <div className="clientmain shadow-none p-3 border">
          <Formik
            initialValues={mainFormValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              if (id) {
                dispatch({ type: EDIT_CLIENT, payload: values, id: id });
                history.push("/admin/client");
              } else {
                dispatch({ type: ADD_CLIENTS, payload: values });

                history.push("/admin/client");
              }
            }}
            enableReinitialize
            render={({ handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit} autoComplete="off">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="companyName">{companyName.label}</label>

                    <Field
                      name="companyName"
                      type="text"
                      className={
                        "form-control" +
                        (errors.companyName && touched.companyName
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="clientname">{clientname.label}</label>

                    <Field
                      name="clientname"
                      className={
                        "form-control" +
                        (errors.clientname && touched.clientname
                          ? " is-invalid"
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name="clientname"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="email">{email.label}</label>

                    <Field
                      name="email"
                      className={
                        "form-control" +
                        (errors.email && touched.email ? " is-invalid" : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="location">{location.label}</label>

                    <Field
                      name="location"
                      className={
                        "form-control" +
                        (errors.location && touched.location
                          ? " is-invalid"
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="linkdinProfile">
                      {linkdinProfile.label}
                    </label>

                    <Field
                      name="linkdinProfile"
                      className={
                        "form-control" +
                        (errors.linkdinProfile && touched.linkdinProfile
                          ? " is-invalid"
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name="linkdinProfile"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="clientlinkedin">
                      {clientlinkedin.label}
                    </label>

                    <Field
                      name="clientlinkedin"
                      className={
                        "form-control" +
                        (errors.clientlinkedin && touched.clientlinkedin
                          ? " is-invalid"
                          : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name="clientlinkedin"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="website">{website.label}</label>

                    <Field
                      name="website"
                      className={
                        "form-control" +
                        (errors.website && touched.website ? " is-invalid" : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name="website"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="phone">{phone.label}</label>

                    <Field
                      name="phone"
                      className={
                        "form-control" +
                        (errors.phone && touched.phone ? " is-invalid" : "")
                      }
                      type="text"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="priority">{priority.label}</label>

                    <Field
                      name="priority"
                      as="select"
                      // className={
                      //   "form-control" +
                      //   (errors.priority && touched.priority
                      //     ? " is-invalid"
                      //     : "")
                      //     type="text"
                      // }
                    >
                      {({ field }) => (
                        <select {...field} className={"form-control"}>
                          <option value="selcte preority"></option>
                          {["High", "Low"].map((i, ind) => (
                            <option key={i} value={ind}>
                              {i}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>
                    <ErrorMessage
                      name="priority"
                      component="div"
                      className="invalid-feedback"
                    >
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    {/* <ErrorMessage
                      name="priority"
                      component="div"
                      className="invalid-feedback"
                    /> */}
                  </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                  <label htmlFor="clientcomments">{clientcomments.label}</label>

                  <Field
                    name="clientcomments"
                    className={
                      "form-control" +
                      (errors.clientcomments && touched.clientcomments
                        ? " is-invalid"
                        : "")
                    }
                    type="textarea"
                  />
                  <ErrorMessage
                    name="clientcomments"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
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
export default AddClient;
