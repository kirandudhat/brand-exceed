import apiClient from "./axois";

export async function dashboard() {
  return apiClient.get("/api/v1/auth/dashboard").then((response) => {
    if (response) {
      return response.data.result;
    }
    return false;
  });
}
