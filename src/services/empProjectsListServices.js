import apiClient from "./axois";

export async function projectsListing() {
  return apiClient.get("api/v1/project/").then((response) => {
    if (response) {
      const { data } = response;

      return data;
    }
    return false;
  });
}
