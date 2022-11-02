import * as Yup from "yup";
const FormValidation = [
  Yup.object().shape({
    basicDetails: Yup.object().shape({
      name: Yup.string().trim().required("Name is required"),
      username: Yup.string().trim().required(" User Name is required"),
      emp_id: Yup.string()
        .trim()
        .required(" Employee ID is required")
        .matches(/^[0-9]*$/, " Employee ID is not valid"),
      designation: Yup.string().trim().required("Designation is required"),
      date_of_joining: Yup.string().trim().required("Date is required"),
      image: Yup.string().nullable().required("image is required"),
      mobile: Yup.string()
        .required("Contact Number is Required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          " Contact number is not valid"
        )
        .max(10, "Too Costly"),

      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      company_email: Yup.string()
        .email("Email is invalid")
        .required("Company Email is required"),
      company_email_password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Company Password is required"),
      skype_account: Yup.string()
        .email("Email is invalid")
        .required("Skype Account is required"),
      skype_password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Skype Password is required"),
      home_number: Yup.string()
        .required("Contact Number is Required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          " Contact number is not valid"
        )
        .max(10, "Too Costly"),
      assign_role: Yup.string().trim().required("Assign Role is required"),
      date_of_birth: Yup.string().trim().required(" Date of birth is required"),
      aadhar_card: Yup.string()
        .required("Aadhar Number is Required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          " Aadhar number is not valid"
        )
        .max(12, "Only 12 number Allowed"),
      aadhar_image: Yup.string()
        .nullable()
        .required("Aadhar Image Front is required"),
      aadhar_image_back: Yup.string()
        .nullable()
        .required("Aadhar image back is required"),
      pan_card: Yup.string().trim().nullable().required("Pan Card is required"),
      pan_image: Yup.string().nullable().required("Pan card is required"),
      blood_group: Yup.string().trim().required("Blood Group is required"),
      parment_address: Yup.string()
        .trim()
        .required("Parmanent Address is required"),
      parment_city: Yup.string().trim().required("Parmanent City is required"),
      parment_state: Yup.string()
        .trim()
        .required("Parmanent State is required"),
      parment_country: Yup.string()
        .trim()
        .required("Parmanent Country is required"),
      current_address: Yup.string()
        .trim()
        .required("Current Address is  required"),
      current_city: Yup.string().trim().required("Current City its required"),
      current_state: Yup.string().trim().required("Current State its required"),
      current_country: Yup.string()
        .trim()
        .required("Current Country its required"),
      // gender: Yup.string().trim().required("its required"),
      meritial_status: Yup.string()
        .trim()
        .required("Merital Status is required"),
      is_sickleave: Yup.string().trim().required("Sick Leave is required"),
      gender: Yup.string().trim().required("Gender is required"),
    }),
  }),
  Yup.object().shape({
    educationDetails: Yup.array().of(
      Yup.object().shape({
        degree: Yup.string().trim().required("Degree is required"),
        passingyear: Yup.number().required("year is required"),

        board: Yup.string().trim().required("Boaird/Institution its required"),
        percentage: Yup.number().required("Percentage is required"),
        degreephotoes: Yup.string()
          .nullable()
          .required("degree Photos is required"),
      })
    ),
  }),

  Yup.object().shape({
    projectDetails: Yup.array().of(
      Yup.object().shape({
        projectname: Yup.string().trim().required("its required"),
        projecttech: Yup.string().trim().required("its required"),
        startdate: Yup.string().trim().required("its required"),
        enddate: Yup.string().trim().required("its required"),
        role: Yup.string().trim().required("its required"),
        responsibility: Yup.string().trim().required("its required"),
      })
    ),
  }),
];
export default FormValidation;
