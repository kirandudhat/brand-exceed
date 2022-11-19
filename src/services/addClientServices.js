import apiClient from "./axois";
export async function addClients(creds) {
     console.log(creds);
    return apiClient
      .post("/survey", creds)
      .then((response) => {
        if (response) {
          return response.data;
        }
        return false;
      });
  }