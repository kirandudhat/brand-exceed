import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  companyName: Yup.string()
    .trim("The contact name cannot include leading and trailing spaces")
    .required("Company Name is required"),
  location: Yup.string()
    .trim("The contact name cannot include leading and trailing spaces")
    .required("Location Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  linkdinProfile: Yup.string()
    .trim("The contact name cannot include leading and trailing spaces")
    .required("Company Linkdin  is required"),
  // clientcomments: Yup.string().trim('The contact name cannot include leading and trailing spaces').required(
  //   "clientcomments  is required"
  // ),

  // phone: Yup.number()
  // .typeError("That doesn't look like a phone number")
  // .positive("A phone number can't start with a minus")
  // .integer("A phone number can't include a decimal point")
  // .min(8)
  // .required('A phone number is required'),
  phone: Yup.string()
    .required("Contact Number is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      " Contact number is not valid"
    )
    .max(10, "Too Costly"),
  website: Yup.string()
    .trim("The contact name cannot include leading and trailing spaces")
    .required("Website  is required"),
  priority: Yup.string()
    .trim("The contact name cannot include leading and trailing spaces")
    .required("Priority  is required"),
  clientname: Yup.string()
    .trim("The contact name cannot include leading and trailing spaces")
    .required("Client Name is required"),
  // email: Yup.string().trim('The contact name cannot include leading and trailing spaces').required("email is required"),
  clientlinkedin: Yup.string()
    .trim("The contact name cannot include leading and trailing spaces")
    .required("Client Linkedin is required"),
});

export default validationSchema;
