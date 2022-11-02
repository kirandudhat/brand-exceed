import apiClient from "./axois"

 export async function empOvertimeListing(id) {
     
    return apiClient.get(`/api/v1/overtime/${id}`)
        .then(response => {

            
            if (response) {
                const { data } = response
                 
                return data
            }
            return false
        })
}
