import apiClient from "./axois";

export async function editClients({payload, id}) {
  console.log("editClient",payload, id)
  return apiClient
    .post(`/survey/update`, {fields:  payload.payload, id: id})
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
    
}