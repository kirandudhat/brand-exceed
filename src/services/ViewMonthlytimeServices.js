import apiClient from "./axois";

export async function MonthlytimeSheetListing({
  id,
  month = new Date().getMonth(),
}) {
  return apiClient
    .get(`/api/v1/timesheet/timesheetlist/${id}?month=${+month + 1}`)
    .then((response) => {
      if (response) {
        const { data } = response;

        return data;
      }
      return false;
    });
}

// export async function selectedMonthlytimeSheetListing(payload) {
//   return apiClient
//     .get(
//       `/api/v1/timesheet/timesheetlist/${payload.id}?month=${payload.values.month }`
//     )
//     .then((response) => {
//       console.log("timeSheet list Responce", response);
//       if (response) {
//         const { data, message } = response;

//         return data;
//       }
//       return false;
//     });
// }
