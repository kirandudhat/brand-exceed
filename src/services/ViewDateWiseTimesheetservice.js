import apiClient from "./axois";

export async function dateWisetimeSheetListing(payload) {
  return apiClient
    .get(
      `/api/v1/timesheet/timesheetlist/${payload.id}?date=${payload.date}`
    )
    .then((response) => {
      if (response) {
        const { data, message } = response;

        return data;
      }
      return false;
    });
}
