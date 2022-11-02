import apiClient from "./axois";
export async function addClients(creds) {
     
    return apiClient
      .post("/api/v1/client/add", creds)
      .then((response) => {
        if (response) {
          return response.data;
        }
        return false;
      });
  }