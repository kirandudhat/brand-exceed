import React, { useEffect, useRef, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Field } from "formik";
import ImagePreview from "./ImagePreview";
import useStyles from "./styles";
import imgPrivew from "../../assest/img/dummy-img.png";
import { uploadimagefunction } from "../../Utils/common/Common";

export default function BasicDetails(props) {
  const fileRefPen = useRef(null);
  const fileRefAadar_back = useRef(null);
  const fileRefAadar_front = useRef(null);
  const fileRefuser_img = useRef(null);
  const classes = useStyles();
  const [imagePreview, setImagePreview] = useState({
    user: null,
    pancard: null,
    aadharCardFront: null,
    aadharCardBack: null,
  });
  const [imageSet, setimageSet] = useState();
  const RadioOptions = [
    { key: "1", values: "male" },
    { key: "2", values: "female" },
  ];

  const currentPath = window.location.href;
  const isAddingEmployee = currentPath.includes("add");
  const {
    basicDetails: {
      name,
      username,
      emp_id,
      designation,
      date_of_joining,
      image,
      mobile,
      email,
      password,
      company_email,
      company_email_password,
      skype_account,
      skype_password,
      home_number,
      assign_role,
      date_of_birth,
      aadhar_card,
      aadhar_image,
      aadhar_image_back,
      pan_card,
      pan_image,
      blood_group,
      parment_address,
      parment_city,
      parment_state,
      parment_country,
      current_address,
      current_city,
      current_state,
      current_country,
      gender,
      is_sickleave,
      meritial_status,
    },
    errors,
    touched,
    values,
    setFieldValue,
  } = props;
  const imageHandle = async (e) => {
    const imagesse = await uploadimagefunction(e.target.files[0]);
    setimageSet(imagesse);
  };

  const [value, setvalue] = useState(0);
  const [uploadFieldName, setuploadFieldName] = useState("");

  useEffect(() => {
    switch (uploadFieldName) {
      case "image":
        setFieldValue(`basicDetails[${image.name}]`, imageSet);
        break;
      case "aadhar_image":
        setFieldValue(`basicDetails[${aadhar_image.name}]`, imageSet);
        break;
      case "aadhar_image_back":
        setFieldValue(`basicDetails[${aadhar_image_back.name}]`, imageSet);
        break;
      case "pan_image":
        setFieldValue(`basicDetails[${pan_image.name}]`, imageSet);
        break;
      default:
        break;
    }
    setvalue((value) => value + 1);
  }, [imagePreview, imageSet]);

  return (
    <>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="name">{name.label}</label>

          <Field
            name={`basicDetails[${name.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.name && touched.basicDetails?.name
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.name}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="emp_id">{emp_id.label}</label>
          <Field
            name={`basicDetails[${emp_id.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.emp_id && touched.basicDetails?.emp_id
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.emp_id}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="designation">{designation.label}</label>
          <Field
            name={`basicDetails[${designation.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.designation &&
              touched.basicDetails?.designation
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.designation}
          </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="date_of_joining">{date_of_joining.label}</label>

          <Field
            name={`basicDetails[${date_of_joining.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.date_of_joining &&
              touched.basicDetails?.date_of_joining
                ? " is-invalid"
                : "")
            }
            type="Date"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.date_of_joining}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="is_sickleave">{is_sickleave.label}</label>
          <Field name={`basicDetails[${is_sickleave.name}]`}>
            {({ field }) => (
              <select
                {...field}
                className={
                  "form-control" +
                  (errors.basicDetails?.is_sickleave &&
                  touched.basicDetails?.is_sickleave
                    ? " is-invalid"
                    : "")
                }
              >
                <option value="">Select Sick Leave</option>
                {[
                  { title: "Yes", value: "1" },
                  { title: "No", value: "0" },
                ].map((obj) => (
                  <option key={obj.title} value={obj.value}>
                    {obj.title}
                  </option>
                ))}
              </select>
            )}
          </Field>
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.is_sickleave}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="username">{username.label}</label>
          <Field
            name={`basicDetails[${username.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.username && touched.basicDetails?.username
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.username}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="email">{email.label}</label>
          <Field
            name={`basicDetails[${email.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.email && touched.basicDetails?.email
                ? " is-invalid"
                : "")
            }
            type="email"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.email}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="password">
            {isAddingEmployee ? password.label : "New Password"}
          </label>
          <Field
            name={`basicDetails[${password.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.password && touched.basicDetails?.password
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.password}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="company_email">{company_email.label}</label>
          <Field
            name={`basicDetails[${company_email.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.company_email &&
              touched.basicDetails?.company_email
                ? " is-invalid"
                : "")
            }
            type="email"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.company_email}
          </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="company_email_password">
            {isAddingEmployee
              ? company_email.label
              : "New Company Gmail Password"}
          </label>
          <Field
            name={`basicDetails[${company_email_password.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.company_email_password &&
              touched.basicDetails?.company_email_password
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.company_email_password}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="skype_account">{skype_account.label}</label>
          <Field
            name={`basicDetails[${skype_account.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.skype_account &&
              touched.basicDetails?.skype_account
                ? " is-invalid"
                : "")
            }
            type="email"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.skype_account}
          </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="skype_password">
            {isAddingEmployee ? skype_password.label : "New Skype ID Password"}
          </label>
          <Field
            name={`basicDetails[${skype_password.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.skype_password &&
              touched.basicDetails?.skype_password
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.skype_password}
          </div>
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="assign_role">{assign_role.label}</label>
          <Field name={`basicDetails[${assign_role.name}]`}>
            {({ field }) => (
              <select
                {...field}
                className={
                  "form-control" +
                  (errors.basicDetails?.assign_role &&
                  touched.basicDetails?.assign_role
                    ? " is-invalid"
                    : "")
                }
              >
                <option value="">Select Assign Role</option>
                {["Admin", "Developer"].map((i, ind) => (
                  <option key={i} value={ind + 1}>
                    {i}
                  </option>
                ))}
              </select>
            )}
          </Field>
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.assign_role}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="gender">{gender.label}</label>
          <Field name={`basicDetails[${gender.name}]`}>
            {({ field }) => (
              <select
                {...field}
                className={
                  "form-control" +
                  (errors.basicDetails?.gender && touched.basicDetails?.gender
                    ? " is-invalid"
                    : "")
                }
              >
                <option value="">Select Gender</option>
                {["female", "male"].map((i, ind) => (
                  <option key={i} value={ind}>
                    {i}
                  </option>
                ))}
              </select>
            )}
          </Field>
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.gender}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="date_of_birth">{date_of_birth.label}</label>
          <Field
            name={`basicDetails[${date_of_birth.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.date_of_birth &&
              touched.basicDetails?.date_of_birth
                ? " is-invalid"
                : "")
            }
            type="date"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.date_of_birth}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="meritial_status">{meritial_status.label}</label>

          <Field name={`basicDetails[${meritial_status.name}]`}>
            {({ field }) => (
              <select
                {...field}
                className={
                  "form-control" +
                  (errors.basicDetails?.meritial_status &&
                  touched.basicDetails?.meritial_status
                    ? " is-invalid"
                    : "")
                }
              >
                <option value="">Select Merital Status</option>
                {["Married", "UnMarried", "Widowed"].map((i, indx) => (
                  <option key={i} value={indx + 1}>
                    {i}
                  </option>
                ))}
              </select>
            )}
          </Field>
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.meritial_status}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="blood_group">{blood_group.label} </label>
          <Field
            as="select"
            name={`basicDetails[${blood_group.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.blood_group &&
              touched.basicDetails?.blood_group
                ? " is-invalid"
                : "")
            }
          >
            <option value="">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Field>
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.blood_group}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="aadhar_card">{aadhar_card.label}</label>
          <Field
            name={`basicDetails[${aadhar_card.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.aadhar_card &&
              touched.basicDetails?.aadhar_card
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.aadhar_card}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridNumber">
          <label htmlFor="mobile">{mobile.label}</label>
          <Field
            name={`basicDetails[${mobile.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.mobile && touched.basicDetails?.mobile
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.mobile}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="home_number">{home_number.label}</label>
          <Field
            name={`basicDetails[${home_number.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.home_number &&
              touched.basicDetails?.home_number
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.home_number}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="parment_address">{parment_address.label}</label>
          <Field
            name={`basicDetails[${parment_address.name}]`}
            as="textarea"
            className={
              "form-control" +
              (errors.basicDetails?.parment_address &&
              touched.basicDetails?.parment_address
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.parment_address}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="pan_card">{pan_card.label}</label>
          <Field
            name={`basicDetails[${pan_card.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.pan_card && touched.basicDetails?.pan_card
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.pan_card}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="parment_city">{parment_city.label}</label>
          <Field
            name={`basicDetails[${parment_city.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.parment_city &&
              touched.basicDetails?.parment_city
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.parment_city}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="parment_state">{parment_state.label}</label>
          <Field
            name={`basicDetails[${parment_state.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.parment_state &&
              touched.basicDetails?.parment_state
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.parment_state}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="parment_country">{parment_country.label}</label>
          <Field
            name={`basicDetails[${parment_country.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.parment_country &&
              touched.basicDetails?.parment_country
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.parment_country}
          </div>
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="current_address">{current_address.label}</label>
          <Field
            name={`basicDetails[${current_address.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.current_address &&
              touched.basicDetails?.current_address
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.current_address}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="current_city">{current_city.label}</label>
          <Field
            name={`basicDetails[${current_city.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.current_city &&
              touched.basicDetails?.current_city
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.current_city}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="current_state">{current_state.label}</label>
          <Field
            name={`basicDetails[${current_state.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.current_state &&
              touched.basicDetails?.current_state
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.current_state}
          </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="current_country">{current_country.label}</label>
          <Field
            name={`basicDetails[${current_country.name}]`}
            className={
              "form-control" +
              (errors.basicDetails?.current_country &&
              touched.basicDetails?.current_country
                ? " is-invalid"
                : "")
            }
            type="text"
          />
          <div
            style={{ color: "red" }}
            component="div"
            className="invalid-feedback"
          >
            {errors.basicDetails?.current_country}
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="image">{image.label}</label>
          <div>
            <Field name={`basicDetails[${image.name}]`}>
              {({ field, form: { touched, errors, setFieldValue }, meta }) => {
                return (
                  <>
                    <input
                      ref={fileRefuser_img}
                      hidden
                      type="file"
                      className={
                        "form-control" +
                        (errors.basicDetails?.image &&
                        touched.basicDetails?.image
                          ? " is-invalid"
                          : "")
                      }
                      value=""
                      onChange={(e) => {
                        imageHandle(e);
                        setFieldValue(`basicDetails[${image.name}]`, imageSet);

                        setImagePreview({
                          ...imagePreview,
                          user: e.target.files[0],
                        });
                      }}
                    />
                    <div className="mt-3">
                      {imagePreview.user ? (
                        <ImagePreview key="imge1" file={imagePreview.user} />
                      ) : (
                        <img
                          src={
                            imagePreview.user
                              ? imgPrivew
                              : values.basicDetails.image
                          }
                          style={{ width: "100px", height: "100px" }}
                        />
                      )}
                    </div>
                    <button
                      variant="contained"
                      color="primary"
                      type="button"
                      className={classes.button}
                      style={{ border: "none" }}
                      onClick={() => {
                        fileRefuser_img?.current.click();
                        setuploadFieldName("image");
                      }}
                    >
                      Upload
                    </button>
                  </>
                );
              }}
            </Field>
          </div>
          <div style={{ color: "red" }}>{errors.basicDetails?.image}</div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="aadhar_image">{aadhar_image.label}</label>
          <div>
            <Field name={`basicDetails[${aadhar_image.name}]`}>
              {({ field, form: { touched, errors, setFieldValue }, meta }) => {
                return (
                  <>
                    <input
                      ref={fileRefAadar_front}
                      hidden
                      type="file"
                      className={
                        "form-control" +
                        (errors.basicDetails?.aadhar_image &&
                        touched.basicDetails?.aadhar_image
                          ? " is-invalid"
                          : "")
                      }
                      value=""
                      onChange={(e) => {
                        imageHandle(e);
                        setFieldValue(
                          `basicDetails[${aadhar_image.name}]`,
                          imageSet
                        );

                        setImagePreview({
                          ...imagePreview,
                          aadharCardFront: e.target.files[0],
                        });
                      }}
                    />
                    <div className="mt-3">
                      {imagePreview.aadharCardFront ? (
                        <ImagePreview
                          key="imge1"
                          file={imagePreview.aadharCardFront}
                        />
                      ) : (
                        <img
                          src={
                            imagePreview.aadharCardFront
                              ? imgPrivew
                              : values.basicDetails.aadhar_image
                          }
                          style={{ width: "100px", height: "100px" }}
                        />
                      )}
                    </div>
                    <button
                      variant="contained"
                      color="primary"
                      type="button"
                      className={classes.button}
                      style={{ border: "none" }}
                      onClick={() => {
                        fileRefAadar_front?.current.click();
                        setuploadFieldName("aadhar_image");
                      }}
                    >
                      Upload
                    </button>
                  </>
                );
              }}
            </Field>
          </div>
          <div style={{ color: "red" }}>
            {errors.basicDetails?.aadhar_image}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="aadhar_image_back">{aadhar_image_back.label}</label>
          <div>
            <Field name={`basicDetails[${aadhar_image_back.name}]`}>
              {({ field, form: { touched, errors, setFieldValue }, meta }) => {
                return (
                  <>
                    <input
                      ref={fileRefAadar_back}
                      hidden
                      type="file"
                      className={
                        "form-control" +
                        (errors.basicDetails?.aadhar_image_back &&
                        touched.basicDetails?.aadhar_image_back
                          ? " is-invalid"
                          : "")
                      }
                      value=""
                      onChange={(e) => {
                        imageHandle(e);
                        setFieldValue(
                          `basicDetails[${aadhar_image_back.name}]`,
                          imageSet
                        );
                        setImagePreview({
                          ...imagePreview,
                          aadharCardBack: e.target.files[0],
                        });
                      }}
                    />
                    <div className="mt-3">
                      {imagePreview.aadharCardBack ? (
                        <ImagePreview
                          key="imge2"
                          file={imagePreview.aadharCardBack}
                        />
                      ) : (
                        <img
                          src={
                            imagePreview.aadharCardBack
                              ? imgPrivew
                              : values.basicDetails.aadhar_image_back
                          }
                          style={{ width: "100px", height: "100px" }}
                        />
                      )}
                    </div>
                    <button
                      variant="contained"
                      color="primary"
                      type="button"
                      className={classes.button}
                      style={{ border: "none" }}
                      onClick={() => {
                        fileRefAadar_back?.current.click();
                        setuploadFieldName("aadhar_image_back");
                      }}
                    >
                      Upload
                    </button>
                    {/* <small>{field.value}</small> */}
                  </>
                );
              }}
            </Field>
          </div>
          <div style={{ color: "red" }}>
            {errors.basicDetails?.aadhar_image_back}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="pan_image">{pan_image.label}</label>
          <div>
            <Field name={`basicDetails[${pan_image.name}]`}>
              {({ field, form: { touched, errors, setFieldValue }, meta }) => {
                return (
                  <>
                    <input
                      ref={fileRefPen}
                      hidden
                      type="file"
                      className={
                        "form-control" +
                        (errors.basicDetails?.pan_image &&
                        touched.basicDetails?.pan_image
                          ? " is-invalid"
                          : "")
                      }
                      value=""
                      onChange={(e) => {
                        imageHandle(e);
                        setFieldValue(
                          `basicDetails[${pan_image.name}]`,
                          imageSet
                        );
                        setImagePreview({
                          ...imagePreview,
                          pancard: e.target.files[0],
                        });
                      }}
                    />
                    <div className="mt-3">
                      {imagePreview.pancard ? (
                        <ImagePreview key="imge3" file={imagePreview.pancard} />
                      ) : (
                        <img
                          src={
                            imagePreview.pancard
                              ? imgPrivew
                              : values.basicDetails.pan_image
                          }
                          style={{ width: "100px", height: "100px" }}
                        />
                      )}
                    </div>
                    <button
                      variant="contained"
                      type="button"
                      color="primary"
                      className={classes.button}
                      style={{ border: "none" }}
                      onClick={() => {
                        fileRefPen?.current.click();
                        setuploadFieldName("pan_image");
                      }}
                    >
                      Upload
                    </button>

                    {/* <small>{field.value}</small> */}
                  </>
                );
              }}
            </Field>
          </div>
          <div style={{ color: "red" }}>{errors.basicDetails?.pan_image}</div>
        </Form.Group>
      </Row>
      <Row className="mb-3"></Row>
    </>
  );
}
