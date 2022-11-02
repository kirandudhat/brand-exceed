import { formInitialValue } from "./FormInitialValue";
export const formatEditEmployee = (editData) => {
  // imgURL: `${process.env.REACT_APP_IMAGE_URL}`,
  const imgurl = " https://qtech-bucket.s3.ap-south-1.amazonaws.com/";
  console.log("editData", editData);
  const {
    name,
    username,
    emp_id,
    email,
    // password,
    assign_role,
    designation,
    date_of_joining,
    mobile,
    company_email,
    // company_email_password,
    skype_account,
    // skype_password,
    home_number,
    date_of_birth,
    aadhar_card,
    pan_card,
    blood_group,
    gender,
    is_sickleave,
    merital_status,
    parment_address,
    parment_city,
    parment_state,
    parment_country,
    current_address,
    current_city,
    current_country,
    current_state,

    image,
    aadhar_image,
    aadhar_image_back,
    pan_image,
    usereductions,
    userexperiences,
    userprojects,
    userdetail,
  } = editData;

  const editFormValue = {
    ...formInitialValue,
    basicDetails: {
      ...formInitialValue.basicDetails,
      name,
      username,
      emp_id,
      email,
      // password,
      assign_role,
      designation,
      date_of_joining,
      mobile,
      company_email,
      // company_email_password,
      skype_account,
      // skype_password,
      home_number,
      date_of_birth,
      aadhar_card,
      pan_card,
      blood_group,
      gender,
      is_sickleave,
      meritial_status: merital_status,
      parment_address,
      parment_city,
      parment_state,
      parment_country,
      current_address,
      current_city,
      current_country,
      current_state,
      image: `${imgurl}${image}`,
      aadhar_image: `${imgurl}${aadhar_image}`,
      aadhar_image_back: `${imgurl}${aadhar_image_back}`,
      pan_image: `${imgurl}${pan_image}`,
    },
    // educationDetails: usereductions.map((edu) => ({...edu, degreephotoes: ""})),
    educationDetails: usereductions,
    experienceDetails: userexperiences,
    projectDetails: userprojects,
    bankDetails: userdetail,
  };

  return editFormValue;
};
