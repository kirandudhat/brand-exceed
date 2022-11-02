import apiClient from "./axois";
export async function addLeaves(creds) {
  return apiClient.post("/api/v1/leave/add", creds).then((response) => {
    if (response) {
      return response.data;
    }
    return false;
  });
}
