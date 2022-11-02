import apiClient from "./axois";

export async function viewProjectServices(id) {
  
  return apiClient.get(`/api/v1/project/projectdetails/${id}`).then((response) => {
    if (response) {
      return response.data;
    }
    return false;
  });
}
