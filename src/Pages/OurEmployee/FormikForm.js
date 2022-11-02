import React, { useEffect, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
// import * as Yup from "yup";
import useStyles from "./styles";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";
import ProjectDetails from "./ProjectDetails";
import { formInitialValue } from "./FormInitialValue";
import EmpFormModel from "./EmpFormModel";
import BasicDetails from "./BasicDetails";
import BankDetails from "./BankDetails";
import History from "../../Utils/History/History";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_BANK,
  ADD_EMPLOYEE_EDUCATION,
  ADD_EMPLOYEE_EXPERIENCE,
  ADD_EMPLOYEE_PROJECT,
} from "../../redux/addEmployee/types";
import { changeStepValue } from "../../redux/addEmployee/action";
import {
  EDIT_EMPLOYEE_BANK,
  EDIT_EMPLOYEE_DETAILS,
  EDIT_EMPLOYEE_EDUCATION,
  EDIT_EMPLOYEE_EXPRIENCE,
  EDIT_EMPLOYEE_PROJECT,
} from "../../redux/editEmployee/types";
import { VIEW_EMPLOYEE_DETAILS } from "../../redux/viewEmployee/types";
import { formatEditEmployee } from "./formatEditEmployee";
import FormValidation from "./FromValidation";
import { changeStepValueInEdit } from "../../redux/editEmployee/action";
const steps = [
  "Basic Details",
  "Education Details",
  "Experience Details",
  "Project Details",
  "Bank Details",
];
const stepsSkip = [2, 3];
const backSteps = [1, 2, 3, 4];
const { formId, formField } = EmpFormModel;

const FormikForm = () => {
  const classes = useStyles();

  const [mainFormModel, setMainFormModel] = useState(formField);
  const [mainFormValues, setMainFormValues] = useState(formInitialValue);

  const addStep = useSelector((state) => state.addEmployeeReducer.steps);
  const editStep = useSelector((state) => state.editEmployeeReducer.steps);
  const editEmp = useSelector(
    (state) => state.viewEmployeeDeatilsReducer.viewEmpData
  );

  const { id } = useParams();
  let step = 0;
  const dispatch = useDispatch();

  if (id) {
    step = editStep;
    // step = 1;
  } else {
    step = addStep;
    // step = 1;
  }

  useEffect(() => {
    if (id) {
      dispatch({ type: VIEW_EMPLOYEE_DETAILS, payload: id });
    }
  }, [id]);

  useEffect(() => {
    if (id && editEmp) {
      setMainFormValues(formatEditEmployee(editEmp));
    }
  }, [id, editEmp]);

  const currentValidationSchema = FormValidation[step];
  const isLastStep = step === steps.length - 1;

  async function _submitForm(values, actions) {
    if (id) {
      dispatch({
        type: EDIT_EMPLOYEE_BANK,
        payload: { ...values.bankDetails, id: id },
      });
    } else {
      const allValues = Object.values(values.bankDetails);

      dispatch(
        {
          type: ADD_EMPLOYEE_BANK,
          // payload: { ...values.bankDetails, email: values.basicDetails.email },
          payload: allValues.every(Boolean)
            ? { ...values.bankDetails, email: values.basicDetails.email }
            : { email: values.basicDetails.email },
        },
      );
    }
    // setActiveStep(activeStep + 1);
    // dispatch(changeStepValue(0))
  }

  function _handleSubmit(values, actions) {
    console.log("fomikvalue", values);
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      actions.setTouched({});
      switch (step) {
        case 0: {
          if (id) {
            return dispatch({
              type: EDIT_EMPLOYEE_DETAILS,
              payload: {
                ...values.basicDetails,
                id: editEmp.id,
              },
            });
          } else {
            return dispatch({
              type: ADD_EMPLOYEE,
              payload: values.basicDetails,
            });
          }
        }
        case 1: {
          if (id) {
            return dispatch({
              type: EDIT_EMPLOYEE_EDUCATION,
              payload: {
                usereducation: values.educationDetails.map((detail) => ({
                  ...detail,
                })),
                id,
              },
            });
          } else {
            return dispatch({
              type: ADD_EMPLOYEE_EDUCATION,
              payload: {
                email: values.basicDetails.email,
                usereducation: values.educationDetails,
              },
              // payload:{...values.educationDetails, email:values.basicDetails.email}
            });
          }
        }
        case 2: {
          if (id) {
            return dispatch({
              type: EDIT_EMPLOYEE_EXPRIENCE,
              payload: {
                userexperience: values.experienceDetails.map((detail) => ({
                  ...detail,
                })),
                id,
              },
            });
          } else {
            return dispatch({
              type: ADD_EMPLOYEE_EXPERIENCE,
              payload: {
                email: values.basicDetails.email,
                userexperience: values.experienceDetails,
              },
            });
          }
        }
        case 3: {
          if (id) {
            return dispatch({
              type: EDIT_EMPLOYEE_PROJECT,
              payload: {
                userproject: values.projectDetails.map((detail) => ({
                  ...detail,
                })),
                id,
              },
            });
          } else {
            return dispatch({
              type: ADD_EMPLOYEE_PROJECT,
              payload: {
                email: values.basicDetails.email,
                userproject: values.projectDetails,
              },
            });
          }
        }
        default:
          return;
      }

      // dispatch({ type: ADD_EMPLOYEE, payload: values.basicDetails });
    }
    actions.setSubmitting(false);
  }

  function _handleBack() {
    
    // setActiveStep(activeStep - 1);
    if (id) {
      dispatch(changeStepValueInEdit(step - 1));
    } else {
      dispatch(changeStepValue(step - 1));
    }
  }

  function handelSkipPage() {
   
    if (id) {
      dispatch(changeStepValueInEdit(step + 1));
    } else {
      dispatch(changeStepValue(step + 1));
    }
  }

  function _renderStepContent({
    errors,
    touched,
    step,
    values,
    setFieldValue,
  }) {
    switch (step) {
      case 0:
        return (
          <BasicDetails
            basicDetails={mainFormModel.basicDetails}
            errors={errors}
            values={values}
            touched={touched}
            setFieldValue={setFieldValue}
          />
        );
      case 1:
        return (
          <EducationDetails
            educationDetails={mainFormModel.educationDetails}
            values={values}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
          />
        );
      case 2:
        return (
          <ExperienceDetails
            experienceDetails={mainFormModel.experienceDetails}
            values={values}
            errors={errors}
            touched={touched}
          />
        );
      case 3:
        return (
          <ProjectDetails
            ProjectDetails={mainFormModel.projectDetails}
            values={values}
          />
        );
      case 4:
        return <BankDetails BankDetails={mainFormModel.bankDetails} />;

      default:
        return History.push("/admin/ouremployee");
    }
  }

  return (
    <>
      <div className="ouremployee">
        <div className="employeeWrapper">
          <Link className="link" to="/admin/ouremployee">
            <span>Add Developer</span>
          </Link>
        </div>
        <Stepper
          activeStep={step}
          className={`${classes.stepper} pt-4 pb-5 px-4`}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="employeemain ">
          <Formik
            initialValues={mainFormValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
            validateOnChange={true}
            enableReinitialize
          >
            {({ isSubmitting, values, setFieldValue, errors, touched }) => (
              <Form id={formId}>
                {_renderStepContent({
                  errors,
                  touched,
                  step,
                  values,
                  setFieldValue,
                })}

                <div className={classes.buttons}>
                  {backSteps.includes(step) && (
                    <Button
                    
                      variant="contained"
                      onClick={() => _handleBack()}
                      className={` ${classes.button}`}
                    >
                      Back
                    </Button>
                  )}
                  {/* {step !== 0 && (
                    <Button onClick={_handleBack} className={` ${classes.button}`}>
                      Back
                    </Button>
                  )} */}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "Submit" : "Next"}
                    </Button>

                    {stepsSkip.includes(step) && (
                      <Button
                     
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => handelSkipPage()}
                      >
                        Skip
                      </Button>
                    )}

                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default FormikForm;
