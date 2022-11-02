import { ErrorMessage, Field } from "formik";
import React from "react";
import { Form, Col, Row } from "react-bootstrap";

export default function BankDetails(props) {
  const {
    BankDetails: { accountNumber, bankName, ifscCode },
  } = props;

  return (
    <div>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="Account Number">{accountNumber.label}</label>

          <Field
            name={`bankDetails[${accountNumber.name}]`}
            className="form-control"
            type="text"
          />
          <ErrorMessage name="accountNumber" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="Bank Name">Bank Name</label>

          <Field
            name={`bankDetails[${bankName.name}]`}
            className="form-control"
            type="text"
          />
          <ErrorMessage name="bankName" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <label htmlFor="ifscCode">{ifscCode.label}</label>

          <Field
            name={`bankDetails[${ifscCode.name}]`}
            className="form-control"
            type="text"
          />
          <ErrorMessage name="ifscCode" />
        </Form.Group>
        {/* <Form.Group as={Col} controlId="formGridEmail">
            <label htmlFor="branchName">{branchName.label}</label>

            <Field
              name={`bankDetails[${branchName.name}]`}
              className="form-control"
              type="text"
            />
            <ErrorMessage name="branchName" />
          </Form.Group> */}
      </Row>
    </div>
  );
}
