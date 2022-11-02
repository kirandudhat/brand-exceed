import LeaveFormModel from "./LeaveFormModel";
const {
    
        
            reason,
            from_date,
            to_date,
            leave_type
        
    
}=LeaveFormModel

const leaveInitalValues={

    
    [reason.name]:"",
    [from_date.name]:"",
    [to_date.name]:"",
    [leave_type.name]:"",
    
    

}
export default leaveInitalValues