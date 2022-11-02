import apiClient from "./axois";

export async function editProjects({ payload, id }) {
  return apiClient
    .put(`/api/v1/project/update/${id}`, payload)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}
