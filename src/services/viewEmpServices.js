import apiClient from "./axois";

export async function viewEmployee(id) {
  return apiClient.get(`/survey/${id}`).then((response) => {
    if (response) {
      return response.data;
    }
    return false;
  });
}
