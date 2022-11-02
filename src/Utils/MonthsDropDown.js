import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { VIEW_MONTHLY_TIMESHEET } from "../redux/viewMonthlytimesheet/types";
const MonthsDropDown=({id})=>{
    const dispatch=useDispatch()
    return(
        <Formik
              initialValues={{ months: new Date().getMonth() }}
              enableReinitialize
              onSubmit={(values, actions) => {
            
                dispatch({ type: VIEW_MONTHLY_TIMESHEET, payload: {id, month: values.months} });
              }}
            >
              {({ handleSubmit, errors, touched, values, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                  <label htmlFor="months">Select Months :- </label>
                  <Field name="months">
                    {({ field }) => (
                      <select {...field} style={{padding: "10px 15px", margin: "0px 15px", borderRadius: "10px", background:"#ffffff"}}>
                        {[
                          "Janaury",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December",
                        ].map((i, index) => (
                          <option key={i} value={index}>
                            {i}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>
                  <button type="submit" className="btncolor">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
    )

}
export default MonthsDropDown