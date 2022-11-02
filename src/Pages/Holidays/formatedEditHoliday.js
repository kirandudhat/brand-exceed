import holidaysInialValues from "./HolidaysInitialValues";

export const formatedEditHoliday = (editHolidaysData) => {
  const { holiday_name, from_date, to_date } = editHolidaysData;

  const editHolidayValues = {
    ...holidaysInialValues,
    holiday_name,
    from_date,
    to_date,
  };
  return editHolidayValues;
};
