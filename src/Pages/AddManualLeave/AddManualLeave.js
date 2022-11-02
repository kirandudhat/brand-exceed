import React, { useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col } from "react-bootstrap";
import "./AddManualLeave.css";
import ManualLeaveFormModel from "./ManualLeaveFormModel";
import ManualLeaveInitalValues from "./ManualLeaveInitalValue";
import Validation from "./Validation";
import { ADD_MANUAL_LEAVES } from "../../redux/addManualLeave/types";
import { EMPLOYEE_LIST } from "../../redux/employeeListing/types";
import { useDispatch, useSelector } from "react-redux";

const AddManualLeave = () => {
    const dispatch = useDispatch()

    const empdata = useSelector((state) =>
    state.empListReducer.employeeList.map((item, index) => ({
      ...item,
    }))
    );
    
    React.useEffect(() => {
    dispatch({ type: EMPLOYEE_LIST });
    }, []);
    
    const {
        user_id,
        slot,
        count,
        sickleave
    } = ManualLeaveFormModel

    const slots = [
        'apr-2022/sep-2022',
        'oct-2022/mar-2023',
        'apr-2023/sep-2023',
        'oct-2023/mar-2024',
        'apr-2024/sep-2024',
        'oct-2024/mar-2025',
        'apr-2025/sep-2025',
        'oct-2025/mar-2026',
        'apr-2026/sep-2026',
        'oct-2026/mar-2027',
        'apr-2027/sep-2027',
        'oct-2027/mar-2028',
        'apr-2028/sep-2028',
        'oct-2028/mar-2029',
        'apr-2029/sep-2029',
    ]

    return (
        <>
            <div className="leave">
                <div className="leaveWrapper">
                    <span style={{ fontWeight: "bold", marginTop: "20px", fontSize: "25px" }}>ADD LEAVE FORM</span>
                </div>
                <div className="leavemain shadow-none py-3 px-0 border">
                    <Formik
                        initialValues={ManualLeaveInitalValues}
                        validationSchema={Validation}
                        onSubmit={(values, { resetForm }) => {
                            dispatch({ type: ADD_MANUAL_LEAVES, payload: values })
                            resetForm({ values: '' })
                        }}

                        render={({ handleSubmit, errors, touched }) => (
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <label htmlFor="user_id">{user_id.label}</label>
                                        <Field name="user_id">
                                            {({ field }) => (
                                                <select
                                                    {...field}
                                                    className={
                                                        "form-control" +
                                                        (errors.user_id && touched.user_id
                                                            ? " is-invalid"
                                                            : "")
                                                    }
                                                >
                                                    <option value="">Select Employee Name</option>
                                                    {empdata.map((i, indx) => (
                                                        <option key={i.id} value={i.id}>
                                                            {i.name}
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
                                            {errors.user_id}
                                        </div>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <label htmlFor="slot">{slot.label}</label>
                                        <Field name="slot">
                                            {({ field }) => (
                                                <select
                                                    {...field}
                                                    className={
                                                        "form-control" +
                                                        (errors.slot &&
                                                            touched.slot
                                                            ? " is-invalid"
                                                            : "")
                                                    }
                                                >
                                                    <option value="">Select slot</option>
                                                    {slots.map((i, indx) => (
                                                        <option key={i} value={i}>
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
                                            {errors.slot}
                                        </div>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <label htmlFor="username">{count.label}</label>
                                        <Field
                                            name='count'
                                            defaultValue='6'
                                            className={
                                                "form-control" +
                                                (errors.count && touched.count
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
                                            {errors.count}
                                        </div>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <label htmlFor="username">{sickleave.label}</label>
                                        <Field
                                            name='sickleave'
                                            initialValue='5'
                                            className={
                                                "form-control" +
                                                (errors.sickleave && touched.sickleave
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
                                            {errors.sickleave}
                                        </div>
                                    </Form.Group>
                                </Row>
                                <button type="submit" className="btncolor" style={{ marginLeft: "12px" }}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    />
                </div>
            </div>
        </>
    );
};

export default AddManualLeave;
