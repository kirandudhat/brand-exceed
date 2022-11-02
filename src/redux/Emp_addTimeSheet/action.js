import { ADD_OVERTIME_FAILURE, ADD_OVERTIME_REQUEST, ADD_OVERTIME_SUCCESS } from "../addTimeSheet/types";
import { ADD_TIMESHEET_FAILURE, ADD_TIMESHEET_REQUEST, ADD_TIMESHEET_SUCCESS } from "./types"

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
export const addOverTimeRequest= ()=>{
    return{
        type:ADD_OVERTIME_REQUEST,
    }
    
};
export const addOverTimeSuccess= (cred)=>{
    return{
        type:ADD_OVERTIME_SUCCESS,
        payload:cred
    }
    
};
export const addOverTimeFailure= (error)=>{
    return{
        type:ADD_OVERTIME_FAILURE,
        payload:error
    }
    
};