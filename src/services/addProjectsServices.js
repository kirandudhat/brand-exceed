import apiClient from "./axois";
export async function addProjects(creds) {
    
    return apiClient
      .post("/api/v1/project/add", creds)
      .then((response) => {
        if (response) {
          return response.data;
        }
        return false;
      });
  }