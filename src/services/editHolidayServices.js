import apiClient from "./axois";

export async function editHoliday({values,id}) {

  let data={
     id:id,
    holiday_name:values.holiday_name,
    from_date:values.from_date,
    to_date:values.to_date
  }
  
  return apiClient
    .post(`/api/v1/holiday/update`, data)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    });
}