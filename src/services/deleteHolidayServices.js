import apiClient from "./axois";
export async function deleteholiday(id) {
     
    return apiClient
      .post(`/api/v1/holiday/delete/${id}`)
      .then((response) => {
        if (response) {
          return response.data;
        }
        return false;
      });
  }