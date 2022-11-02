import apiClient from "./axois";
export async function addTimeSheets(creds) {
    
    return apiClient
      .post("/api/v1/timesheet/add", creds)
      .then((response) => {
        if (response) {
          return response.data;
        }
        return false;
      });
  }

  export async function addOverTime(creds) {
    
    return apiClient
      .post("/api/v1/overtime/add", creds)
      .then((response) => {
        if (response) {
          return response.data;
        }
        return false;
      });
  }