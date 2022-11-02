const EmpFormModel = {
  formId: "empForm",
  formField: {
    basicDetails: {
      name: {
        name: "name",
        label: " Name*",
        requiredErrorMsg: " name is required",
      },
      username: {
        name: "username",
        label: "User Name*",
        requiredErrorMsg: " username is required",
      },
      emp_id: {
        name: "emp_id",
        label: "Employee ID*",
        requiredErrorMsg: "Employee ID is required",
      },
      designation: {
        name: "designation",
        label: "Designation*",
        requiredErrorMsg: " Designation is required",
      },
      date_of_joining: {
        name: "date_of_joining",
        label: "Date Of Joining*",
        requiredErrorMsg: "Date Of Joining is required",
      },
      image: {
        name: "image",
        label: "Employee Image*",
        requiredErrorMsg: "Image is required",
      },
      mobile: {
        name: "mobile",
        label: "Mobile Number* ",
        requiredErrorMsg: "Mobile number is required",
      },
      email: {
        name: "email",
        label: "Personal Email Id *",
        requiredErrorMsg: "Email  is required",
      },
      password: {
        name: "password",
        label: "Password *",
        requiredErrorMsg: "Password  is required",
      },
      company_email: {
        name: "company_email",
        label: "Company Gmail Id *",
        requiredErrorMsg: "Email  is required",
      },
      company_email_password: {
        name: "company_email_password",
        label: "Company Gmail Password *",
        requiredErrorMsg: "Password  is required",
      },
      skype_account: {
        name: "skype_account",
        label: "Skype Account *",
        requiredErrorMsg: "Skype Id  is required",
      },
      skype_password: {
        name: "skype_password",
        label: "Skype Id Password *",
        requiredErrorMsg: "Skype Password  is required",
      },
      home_number: {
        name: "home_number",
        label: "Alternate Number* ",
        requiredErrorMsg: "parent number is required",
      },
      assign_role: {
        name: "assign_role",
        label: "Assign Role *",
        requiredErrorMsg: "Assign is required",
      },
      date_of_birth: {
        name: "date_of_birth",
        label: "Date Of Birth *",
        requiredErrorMsg: "Date Of Birth is required",
      },
      aadhar_card: {
        name: "aadhar_card",
        label: "Aadhar Card Number *",
        requiredErrorMsg: "Aadhar Card Number is required",
      },
      aadhar_image: {
        name: "aadhar_image",
        label: "Aadhar Card Front Image *",
        requiredErrorMsg: "Aadhar Card Front Image is required",
      },
      aadhar_image_back: {
        name: "aadhar_image_back",
        label: "Aadhar Card Back Image *",
        requiredErrorMsg: "Aadhar Card Back Image is required",
      },
      pan_card: {
        name: "pan_card",
        label: "Pan Card*",
        requiredErrorMsg: "Pan Card is required",
      },
      pan_image: {
        name: "pan_image",
        label: "Pan Card Image *",
        requiredErrorMsg: "Pan Card Image is required",
      },
      blood_group: {
        name: "blood_group",
        label: "Blood Group *",
        requiredErrorMsg: "Blood Group is required",
      },
      parment_address: {
        name: "parment_address",
        label: "Parmanent Address *",
        requiredErrorMsg: " Parmanent Address  is required",
      },
      parment_city: {
        name: "parment_city",
        label: "Parmanent City *",
        requiredErrorMsg: " Parmanent City  is required",
      },
      parment_state: {
        name: "parment_state",
        label: "Parmanent State*",
        requiredErrorMsg: " Parmanent State  is required",
      },
      parment_country: {
        name: "parment_country",
        label: "Parmanent Country*",
        requiredErrorMsg: " Parmanent Country  is required",
      },
      current_address: {
        name: "current_address",
        label: "Current Address*",
        requiredErrorMsg: "Current Address  is required",
      },
      current_city: {
        name: "current_city",
        label: "Current City*",
        requiredErrorMsg: " Current City  is required",
      },
      current_state: {
        name: "current_state",
        label: "Current State*",
        requiredErrorMsg: " Current State  is required",
      },
      current_country: {
        name: "current_country",
        label: "Current Country*",
        requiredErrorMsg: " Current Country  is required",
      },
      gender: {
        name: "gender",
        label: "Gender*",
        requiredErrorMsg: "Gender is required",
      },
      is_sickleave: {
        name: "is_sickleave",
        label: "Sick Leave*",
        requiredErrorMsg: "Sick Leave is required",
      },
      meritial_status: {
        name: "meritial_status",
        label: "Merital Status*",
        requiredErrorMsg: "status is required",
      },
    },
    educationDetails: {
      degree: {
        name: "degree",
        label: "Degree*",
        requiredErrorMsg: "Degree is required",
      },

      board: {
        name: "board",
        label: "University*",
        requiredErrorMsg: "board is required",
      },

      percentage: {
        name: "percentage",
        label: "Percentage*",
        requiredErrorMsg: "Percentage is required",
      },
      passingyear: {
        name: "passingyear",
        label: "Passing Year*",
        requiredErrorMsg: "Passing Year is required",
      },
      degreephotoes: {
        name: "degreephotoes",
        label: "Degree Photos*",
        requiredErrorMsg: "Degree Photos is required",
      },
    },

    experienceDetails: {
      companyname: {
        name: "companyname",
        label: "Company Name",
        requiredErrorMsg: "Company Name is required",
      },
      startdate: {
        name: "startdate",
        label: "Start Date",
        requiredErrorMsg: "Start Date is required",
      },
      enddate: {
        name: "enddate",
        label: "End Date",
        requiredErrorMsg: "End Date is required",
      },
      role: {
        name: "role",
        label: "Role",
        requiredErrorMsg: "Role is required",
      },
    },
    projectDetails: {
      projectName: {
        name: "projectname",
        label: "Project Name",
        requiredErrorMsg: "Project Name is required",
      },
      technology: {
        name: "projecttech",
        label: "Technology",
        requiredErrorMsg: "Technology is required",
      },
      projectStartDate: {
        name: "startdate",
        label: "Start Date",
        requiredErrorMsg: "Start Date is required",
      },
      projectEndDate: {
        name: "enddate",
        label: "End Date",
        requiredErrorMsg: "End Date is required",
      },
      projectRole: {
        name: "role",
        label: "Role",
        requiredErrorMsg: "Role is required",
      },
      responsibility: {
        name: "responsibility",
        label: "Responsibility",
        requiredErrorMsg: "Responsibility is required",
      },
    },
    bankDetails: {
      accountNumber: {
        name: "bankaccountnumber",
        label: "Account Number",
        requiredErrorMsg: "Account Number is required",
      },
      bankName: {
        name: "bankname",
        label: "Bank Name",
        requiredErrorMsg: "Bank Name is required",
      },
      ifscCode: {
        name: "ifscnumber",
        label: "IFSC Code",
        requiredErrorMsg: "IFSC Code is required",
      },
      branchName: {
        name: "bank_branch",
        label: "Branch Name",
        requiredErrorMsg: "Branch Name is required",
      },
    },
  },
};
export default EmpFormModel;
