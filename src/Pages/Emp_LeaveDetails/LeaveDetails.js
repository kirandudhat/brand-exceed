import React, { useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col } from "react-bootstrap";
import "./LeaveDetails.css";
import Datatable from "../../Components/DataTables/Datatable";
import LeaveFormModel from "./LeaveFormModel";
import leaveInitalValues from "./LeaveInitalValue";
import Validation from "./Validation";
import { useDispatch, useSelector } from "react-redux";
import { ADD_LEAVES } from "../../redux/addLeaves/types";
import { EMPLOYEE_LEAVE_LIST } from "../../redux/EmpLeaveList/type";
import {
  getformattedDate,
  updateleaveIsActiveStatus,
} from "../../Utils/common/Common";
const LeaveDeatails = () => {
  const dispatch = useDispatch();
  const leavelist = useSelector(
    (state) => state.empLeaveListReducer.empLeaveList
  );
  const isLoading = useSelector((state) => state.empLeaveListReducer.loading);
  useEffect(() => {
    dispatch({ type: EMPLOYEE_LEAVE_LIST });
  }, []);
  const { reason, from_date, to_date, leave_type } = LeaveFormModel;

  const columns = [
    { field: "id", headerName: "ID", width: 85 },
    {
      field: "reason",
      headerName: "Reason",
      type: "text",
      width: 180,
    },
    {
      field: "from_date",
      headerName: "From Date",
      type: "text",
      width: 140,
    },
    {
      field: "to_date",
      headerName: "To Date",
      type: "text",
      width: 140,
    },
    {
      field: "leave_type",
      headerName: "Leave type",
      type: "text",
      width: 140,
    },
    {
      field: "reject_reason",
      headerName: "Reject Reason",
      type: "text",
      width: 160,
    },
    {
      field: "is_active",
      headerName: "Status",
      type: "text",
      width: 140,
    },
  ];

  return (
    <>
      <div className="leave">
        <div className="leaveWrapper">
          <span
            style={{ fontWeight: "bold", marginTop: "20px", fontSize: "25px" }}
          >
            ADD LEAVE FORM
          </span>
        </div>
        <div className="leavemain shadow-none py-3 px-0 border">
          <Formik
            initialValues={leaveInitalValues}
            validationSchema={Validation}
            onSubmit={(values, { resetForm }) => {
              dispatch({ type: ADD_LEAVES, payload: values });
              resetForm({ values: "" });
            }}
            render={({ handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="reason">{reason.label}</label>

                    <Field
                      name="reason"
                      type="text"
                      className={
                        "form-control" +
                        (errors.reason && touched.reason ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="reason"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="from_date">{from_date.label}</label>

                    <Field
                      name="from_date"
                      type="date"
                      className={
                        "form-control" +
                        (errors.from_date && touched.from_date
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="from_date"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
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

                  <Form.Group as={Col} controlId="formGridEmail">
                    <label htmlFor="leave_type">{leave_type.label}</label>

                    <Field name="leave_type">
                      {({ field }) => (
                        <select
                          {...field}
                          className={
                            "form-control" +
                            (errors.leave_type && touched.leave_type
                              ? " is-invalid"
                              : "")
                          }
                        >
                          <option value="">Select Leave Type</option>
                          {["Half Day", "CL", "Sick Leave", "COL", "LWP"].map(
                            (i) => (
                              <option key={i} value={i}>
                                {i}
                              </option>
                            )
                          )}
                        </select>
                      )}
                    </Field>
                    <div
                      style={{ color: "red" }}
                      component="div"
                      className="invalid-feedback"
                    >
                      {errors.leave_type}
                    </div>
                  </Form.Group>
                </Row>
                <button
                  type="submit"
                  className="btncolor"
                  style={{ marginLeft: "12px" }}
                >
                  Submit
                </button>
              </Form>
            )}
          />
        </div>

        <div className="leaveWrapper mt-4">
          <span style={{ fontWeight: "bold", fontSize: "25px" }}>
            LEAVES DETAILS
          </span>
          <div>
            {leavelist.leaveleft && (
              <>
                <span style={{ fontWeight: "bold" }}>Remaining Leaves</span>
                <span className="redius" style={{ margin: "0 20px 0 2px" }}>
                  {leavelist.leaveleft}
                </span>
              </>
            )}
            {leavelist.sickleave && (
              <>
                <span style={{ fontWeight: "bold" }}>Sick Leave</span>
                <span className="redius" style={{ marginLeft: "2px" }}>
                  {leavelist.sickleave}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="leavemain shadow-none p-0">
          <Datatable
            column={columns}
            tableData={getformattedDate(
              updateleaveIsActiveStatus(leavelist.rows)
            )}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default LeaveDeatails;
