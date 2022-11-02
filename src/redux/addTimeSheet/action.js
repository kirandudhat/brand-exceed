import { ADD_OVERTIME_FAILURE, ADD_OVERTIME_REQUEST, ADD_OVERTIME_SUCCESS, ADD_TIMESHEET_FAILURE, ADD_TIMESHEET_REQUEST, ADD_TIMESHEET_SUCCESS } from "./types"

export const addTimeSheetRequest= ()=>{
    return{
        type:ADD_TIMESHEET_REQUEST,
    }
    
};
export const addTimeSheetSuccess= (cred)=>{
    return{
        type:ADD_TIMESHEET_SUCCESS,
        payload:cred
    }
    
};
export const addTimeSheetFailure= (error)=>{
    return{
        type:ADD_TIMESHEET_FAILURE,
        payload:error
    }
    
};
  /// overtime actions
export const addOverTimeSheetRequest= ()=>{
    return{
        type:ADD_OVERTIME_REQUEST,
    }
    
};
export const addOverTimeSheetSuccess= (cred)=>{
    return{
        type:ADD_OVERTIME_SUCCESS,
        payload:cred
    }
    
};
export const addOverTimeSheetFailure= (error)=>{
    return{
        type:ADD_OVERTIME_FAILURE,
        payload:error
    }
    
};
