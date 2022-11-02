import apiClient from "./axois";

export async function viewEmployee(id) {
  return apiClient.get(`/api/v1/employee/details/${id}`).then((response) => {
    if (response) {
      return response.data;
    }
    return false;
  });
}
