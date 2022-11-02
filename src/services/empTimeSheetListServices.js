import apiClient from "./axois"

 export async function timeSheetListing() {

    return apiClient.get('/api/v1/timesheet/project')
        .then(response => {
            
            if (response) {
                const { data,} = response
                 
                return data
            }
            return false
        })
}
