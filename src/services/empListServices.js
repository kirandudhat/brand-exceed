import { getUser } from "../Utils/common/Common";
import apiClient from "./axois";

export async function employeeListing() {
  let user = getUser()
  let url = '/survey'
  if(user.role == 2){
    if(user.role == 2 ){
      url = `/survey/list/${user.id}`
    }
  } else if(user.role > 2){
    url = `user/survey/${user.id}`
  }
  return apiClient.get(url).then((response) => {
    if (response) {
      const { data, details } = response;

      return data;
    }
    return false;
  });
}
