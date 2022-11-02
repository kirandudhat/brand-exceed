import HolidaysFormModel from "./HolidaysFormModel";
const { holiday_name, from_date, to_date } = HolidaysFormModel;

const holidaysInialValues = {
  [holiday_name.name]: "",
  [from_date.name]: "",
  [to_date.name]: "",
};
export default holidaysInialValues;
