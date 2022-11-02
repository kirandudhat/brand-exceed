import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HolidaysFormModel from "./HolidaysFormModel";
import "./Holidays.css";
import holidaysInialValues from "./HolidaysInitialValues";
import { ADD_HOLIDAYS } from "../../redux/addHolidays/types";
import { useDispatch, useSelector } from "react-redux";
import { HOLIDAY_LIST } from "../../redux/holidayListing/types";
import HolidayFormValidation from "./FormValidation";
import History from "../../Utils/History/History";
import { formatedEditHoliday } from "./formatedEditHoliday";
import { EDIT_HOLIDAYS } from "../../redux/editHoliday/type";
// import History from "../../Utils/History/History";
const AddHoliday = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [mainFormValues, setMainFormValues] = useState(holidaysInialValues);
  const { holiday_name, from_date, to_date } = HolidaysFormModel;

  const viewHoliday = useSelector(
    (state) => state.holidayListReducer.holidayList
  );

  useEffect(() => {
    dispatch({ type: HOLIDAY_LIST, payload: id });
  }, []);

  useEffect(() => {
    if (id && viewHoliday.length > 0) {
      const findHoliday = viewHoliday.find(function (holiday) {
        return holiday.id == id;
      });
      setMainFormValues(formatedEditHoliday(findHoliday));
    }
  }, [id, viewHoliday]);

  return (
    <>
      <Formik
        initialValues={mainFormValues}
        validationSchema={HolidayFormValidation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (id) {
            dispatch({ type: EDIT_HOLIDAYS, payload: { values, id } });
            History.push("/admin/holidays");
          } else {
            dispatch({ type: ADD_HOLIDAYS, payload: values });
          }
          resetForm({ values: "" });
          // history.push("/admin/client")
        }}
        enableReinitialize
        render={({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail" className="px-0">
                <label htmlFor="holiday_name">{holiday_name.label}</label>

                <Field
                  name="holiday_name"
                  className={
                    "form-control" +
                    (errors.holiday_name && touched.holiday_name
                      ? " is-invalid"
                      : "")
                  }
                  type="text"
                />
                <ErrorMessage
                  name="holiday_name"
                  component="div"
                  className="invalid-feedback"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <label htmlFor="from_date">{from_date.label}</label>

                <Field
                  name="from_date"
                  className={
                    "form-control" +
                    (errors.from_date && touched.from_date ? " is-invalid" : "")
                  }
                  type="date"
                />
                <ErrorMessage
                  name="from_date"
                  component="div"
                  className="invalid-feedback"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <label htmlFor="to_date">{to_date.label}</label>

                <Field
                  name="to_date"
                  className={
                    "form-control" +
                    (errors.to_date && touched.to_date ? " is-invalid" : "")
                  }
                  type="date"
                />
                <ErrorMessage
                  name="to_date"
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
    </>
  );
};
export default AddHoliday;
