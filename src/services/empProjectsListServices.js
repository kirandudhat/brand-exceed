import apiClient from "./axois";

export async function projectsListing(survey_id) {
  return apiClient.get(`/survey/answer/${survey_id}`).then((response) => {
    if (response) {
      const { data } = response;

      return data;
    }
    return false;
  });
}
