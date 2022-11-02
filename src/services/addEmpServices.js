import apiClient from "./axois";

export async function addEmployee(creds) {
  return apiClient.post("api/v1/employee/add", creds).then((response) => {
    if (response) {
      return response.data;
    }
    return false;
  });
}

// export default addEmployee;

export async function addEmployeeEducation(creds) {
  return apiClient
    .post("api/v1/employee/addEducation", creds)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}
// export default addEducation;
export async function addEmployeeExperience(creds) {
  return apiClient
    .post("/api/v1/employee/addUserExperience", creds)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}

export async function addEmployeeProjects(creds) {
  return apiClient
    .post("/api/v1/employee/addProject", creds)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}

export async function addEmployeeBank(creds) {
  return apiClient.post("/api/v1/employee/addBank", creds).then((response) => {
    if (response) {
      return response.data;
    }
    return false;
  });
}
