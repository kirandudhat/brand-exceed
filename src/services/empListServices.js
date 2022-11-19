import apiClient from "./axois";

export async function employeeListing() {
  return apiClient.get("/survey").then((response) => {
    if (response) {
      const { data } = response;

      return data;
    }
    return false;
  });
}
