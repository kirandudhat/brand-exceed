import apiClient from "./axois";

export async function viewClientServices(id) {
  
  return apiClient.get(`/api/v1/client/clientdetails/${id}`).then((response) => {
    if (response) {
      return response.data;
    }
    return false;
  });
}
