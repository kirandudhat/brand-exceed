import apiClient from "./axois";

export async function employeeListing() {
  return apiClient.get("/api/v1/employee").then((response) => {
    if (response) {
      const { data } = response;

      return data;
    }
    return false;
  });
}
