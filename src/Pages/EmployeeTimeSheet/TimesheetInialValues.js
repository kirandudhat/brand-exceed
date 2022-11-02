import TimesheetformModel from "./TimesheetformModel"
const {
    timeSheetField:{
        timeSheet:{
            projectName,
            Tasktitle,
            Developerid,
            time,
            status,
            taskDetails,
            date,
            comments


        }
    }
}=TimesheetformModel

const TimesheetinialValues={

    timeSheet:{
    [projectName.name]:"",
    [Tasktitle.name]:"",
    [Developerid.name]:"",
    [time.name]:"",
    [status.name]:"",
    [taskDetails.name]:"",
    [date.name]:"",
    [comments.name]:"",
    
}
}
export default TimesheetinialValues