import apiClient from "./axois";
export async function deleteholiday(id) {
     
    return apiClient
      .get(`/survey/delete/${id}`)
      .then((response) => {
        if (response) {
          return response.data;
        }
        return false;
      });
  }