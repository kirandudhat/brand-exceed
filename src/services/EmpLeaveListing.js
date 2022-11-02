import apiClient from "./axois";

export async function empLeaveListing() {
  return apiClient.get("/api/v1/leave/").then((response) => {
    if (response) {
      const { data } = response;

      return data;
    }
    return false;
  });
}

export async function empLeaveListingById(id) {
  return apiClient.get(`/api/v1/leave/${id}`).then((response) => {
    if (response) {
      const { data } = response;

      return data;
    }
    return false;
  });
}
