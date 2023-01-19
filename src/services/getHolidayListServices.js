import { getUser } from "../Utils/common/Common"
import apiClient from "./axois"

 export async function getholidayListing() {
    let loggedInUser = getUser()
    let url = `/theme/${loggedInUser.id}`
    if(loggedInUser.role == 1){
      url = `/theme/0`
    }
    if(loggedInUser.role > 2){
      url = `/theme/${loggedInUser.parent_id}`
    }
    return apiClient.get(url)
        .then(response => {
            
            if (response) {
                const { data} = response
                 
                return data
            }
            return false
        })
}
