import apiClient from "./axois"

 export async function clientListing() {

    return apiClient.get('api/v1/client/')
        .then(response => {
            
            if (response) {
                const { data } = response
                 
                return data
            }
            return false
        })
}
