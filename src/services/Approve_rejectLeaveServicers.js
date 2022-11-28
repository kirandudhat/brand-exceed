import apiClient from "./axois";

export async function leaveStatus({ id }) {
  return apiClient
    .put(`/api/v1/leave/updatestatus/${id}`, { is_active: 1 })
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}
export async function RejectleaveStatus(payload) {
  return apiClient
    .put(`/api/v1/leave/updatestatus/${payload.id}`, {
      is_active: 2,
      reject_reason: payload.rejectvalue,
    })
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}
///employee status update
export async function empStatusUpdate(id) {

 return apiClient
    
    .get(`/survey/publish/${id}`)
    .then((response) => {
      if (response) {
        return response;
      }
      return false;
    });
}
