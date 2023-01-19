import apiClient from "./axois";
export async function addProjects(creds) {
  let ans = {...creds}
  delete ans.survey_id
    let data = {
      survey_id: creds.survey_id,
      answers: JSON.stringify(ans)
      }
    
    return apiClient
      .post("/survey/answer", data)
      .then((response) => {
        if (response) {
          return response.data;
        }
        return false;
      });
  }