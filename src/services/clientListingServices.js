import { getUser } from "../Utils/common/Common"
import apiClient from "./axois"

 export async function clientListing() {
    let loggedInUser = getUser()
    let path = window.location.pathname
    let url
     if(path.includes('users') ){
        url = '/users_list'
     } else {
        url = '/company_list'

     }
      if(loggedInUser.role !== 1){
        url = `/users/${loggedInUser.id}`
      }
      if(loggedInUser.role == 3 || loggedInUser.role == 4){
        url = '/users_list'
      }
    return apiClient.get(url)
        .then(response => {
            
            if (response) {
                const { data } = response
                 
                return data
            }
            return false
        })
}
