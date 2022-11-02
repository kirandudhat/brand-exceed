import apiClient from "./axois";
export async function addManualLeaves(creds) {
  return apiClient.post("/api/v1/leave/addLeaveCount", creds).then((response) => {
    if (response) {
      return response.data;
    }
    return false;
  });
}