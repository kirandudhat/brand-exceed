import moment from "moment";
import { imageUplode } from "../../services/imgUploadServices";
export const setUser = (token) => {
  localStorage.setItem("user", JSON.stringify(token));
};

export const getUser = () =>
  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

export const removeUser = () => {
  localStorage.removeItem("user");
};

export const getformattedDate = (list) => {
  return list?.map((date) => ({
    ...date,
    from_date: moment(date.from_date).format("DD-MM-YYYY"),
    to_date: moment(date.to_date).format("DD-MM-YYYY"),
  }));
};

export const updateOvertimeStats = (viewOverTime) => {
  return viewOverTime?.map((item, i) => {
    switch (item.status) {
      case 1:
        item.status = "Done";
        break;
      case 2:
        item.status = "Not Done";
        break;
      case 3:
        item.status = "Working";
        break;
      case 4:
        item.status = "Pending";
        break;
    }

    return {
      ...item,
      project: item.project.projectname,
      overtime_date: moment(item.overtime_date).format("DD-MM-YYYY"),
    };
  });
};

export const updateleaveIsActiveStatus = (viewLeave) => {
  return viewLeave?.map((item, i) => {
    switch (item.is_active) {
      case 0:
        item.is_active = "pending";
        break;
      case 1:
        item.is_active = "Approve";
        break;
      case 2:
        item.is_active = "Reject";
        break;
    }

    return item;
  });
};

export const updateTimeSheetStatus = (monthlylist) => {
  return monthlylist?.map((item, i) => {
    switch (item.status) {
      case 1:
        item.status = "Done";
        break;
      case 2:
        item.status = "Not Done";
        break;
      case 3:
        item.status = "Working";
        break;
      case 4:
        item.status = "Pending";
        break;
    }

    return {
      ...item,
      projectname: item.project.projectname,
      timesheet_date: moment(item.timesheet_date).format("DD-MM-YYYY"),
    };
  });
};

export async function uploadimagefunction(paylode) {
  let formData = new FormData();

  formData.append("profile", paylode);
  let imageUpload = await imageUplode(formData);
  console.log("imageUpload", imageUpload);
  return imageUpload;
}
