import apiClient from "./axois";
export async function addClients(creds) {
     console.log(creds);
     if(creds.id){
      
       return apiClient
         .post(`/survey/update`, creds)
         .then((response) => {
           if (response) {
             return response.data;
           }
           return false;
         });
     } else {

       return apiClient
         .post("/survey", creds)
         .then((response) => {
           if (response) {
             return response.data;
           }
           return false;
         });
     }
  }