import apiClient from "./axois";

export async function editClients({payload, id}) {
  console.log("editClient",payload)
  return apiClient
    .put(`/survey/${id}`, {fields: JSON.stringify(payload)})
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}