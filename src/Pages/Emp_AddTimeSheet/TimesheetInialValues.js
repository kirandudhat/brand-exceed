import TimesheetformModel from "./TimesheetformModel";
const {
  project_id,
  tasktitle,
  timesheet_time,
  status,
  taskdetails,
  timesheet_date,
  comments,
  overtime_time,
  overtime_date,
  description
} = TimesheetformModel;

const TimesheetinialValues = {
  timesheet: [
    {
      [project_id.name]: "",
      [tasktitle.name]: "",
      [timesheet_time.name]: "",
      [status.name]: "",
      
      [taskdetails.name]: "",
      [timesheet_date.name]: "",
      [comments.name]: "",
    },
  ],
  overtime:[
    {
      [project_id.name]: "",
      [tasktitle.name]: "",
      [overtime_date.name]:"",
      [overtime_time.name]: "",
      [status.name]: "",
      [description.name]: "",
      [taskdetails.name]: "",
      [comments.name]: "",
    },

  ]
};
export default TimesheetinialValues;
