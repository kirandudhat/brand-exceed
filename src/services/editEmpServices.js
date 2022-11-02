import apiClient from "./axois";

export async function editEmployee(data) {
  return apiClient
    .put(`/api/v1/employee/update/${data.id}`, data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}

export async function editEmployeeEducation({ id, usereducation }) {
  return apiClient
    .put(`/api/v1/employee/updateEducation/${id}`, { usereducation })
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}

export async function editEmployeeExperience({ id, userexperience }) {
  return apiClient
    .put(`/api/v1/employee/updateUserExperience/${id}`, { userexperience })
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}

export async function editEmployeeProject({ id, userproject }) {
  return apiClient
    .put(`/api/v1/employee/updateProject/${id}`, { userproject })
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}

export async function editEmployeeBank( data ) {
  return apiClient
    .put(`/api/v1/employee/updateBank/${data.id}`, data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}
