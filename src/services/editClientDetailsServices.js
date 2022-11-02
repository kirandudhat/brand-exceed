import apiClient from "./axois";

export async function editClients({payload,id}) {
  
  return apiClient
    .put(`/api/v1/client/update/${id}`, payload)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}