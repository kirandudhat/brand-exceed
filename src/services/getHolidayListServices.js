import apiClient from "./axois"

 export async function getholidayListing() {

    return apiClient.get('/api/v1/holiday/')
        .then(response => {
            
            if (response) {
                const { data} = response
                 
                return data
            }
            return false
        })
}
