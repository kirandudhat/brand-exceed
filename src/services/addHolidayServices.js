import apiClient from "./axois";
export async function addHolidays(creds) {

    return apiClient
      .post("/api/v1/holiday/add", creds)
      .then((response) => {
        if (response) {
          return response.data;
        }
        return false;
      });
  }