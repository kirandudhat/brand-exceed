import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import {
  addEmployeeReducer,
  addEducationReducer,
  addExperienceReducer,
  addProjectReducer,
  addBankReducer,
} from "./addEmployee/reducer";
import empListReducer from "./employeeListing/reducer";
import viewEmployeeDeatilsReducer from "./viewEmployee/reducer";
import {
  editEmployeeReducer,
  editEmpEducationReducer,
  editEmpExperienceReducer,
  editEmpProjectReducer,
  editEmpBankReducer,
} from "./editEmployee/reducer";
import addDeveloperProjectsReducer from "./addProjects/reducer";
import ProjectsListReducer from "./projectsListing/reducer";
import addClientReducer from "./addClients/reducer";
import clientListReducer from "./clientListing/reducer";
// import addTimeSheetReducer from "./addTimeSheet/reducer";
import timeSheetListReducer from "./timeSheetListing/reducers";
import viewProjectsDeatilsReducer from "./ViewProjects/reducer";
import editProjectsReducer from "./editProjects/reducer";
import viewClientsDeatilsReducer from "./ViewClients/reducers";
import editClientsReducer from "./editClients/reducer";
import addHolidaysReducer from "./addHolidays/reducers";
import holidayListReducer from "./holidayListing/reducers";
import viewMonthlyTimeSheetReducer from "./viewMonthlytimesheet/reducer";
import {
  empLeaveListReducer,
  empLeaveListByIdReducer,
} from "./EmpLeaveList/reducer";
import {
  leaveStatusReducer,
  RejectleaveStatusReducer,
  employeeStatusUpdateReducer,
} from "./Approve_reject_leaves/reducers";
import viewDateWiseTimeSheetReducer from "./ViewDateWiseTimeshee/reducer";
import editHolidayReducer from "./editHoliday/reducer";
import empOverTimeReducer from "./getOverTime/reducer";
import deleteHolidayReducer from "./deteleHoliday/reducer";
import addLeavesReducer from "./Emp_addLeaves/reducer";
import addManualLeavesReducer from "./addManualLeave/reducer";
import {
  addTimeSheetReducer,
  addOverTimeReducer,
} from "./Emp_addTimeSheet/reducer";
import { dasboardReducer } from "./Dashboard/reducer";

export const rootReducers = () =>
  combineReducers({
    authReducer,

    addEmployeeReducer,
    addEducationReducer,
    addExperienceReducer,
    addProjectReducer,
    addBankReducer,

    empListReducer,
    viewEmployeeDeatilsReducer,

    editEmployeeReducer,
    editEmpEducationReducer,
    editEmpExperienceReducer,
    editEmpProjectReducer,
    editEmpBankReducer,
    addDeveloperProjectsReducer,
    ProjectsListReducer,
    addClientReducer,
    clientListReducer,
    addTimeSheetReducer,
    timeSheetListReducer,
    viewProjectsDeatilsReducer,
    editProjectsReducer,
    viewClientsDeatilsReducer,
    editClientsReducer,
    addHolidaysReducer,
    holidayListReducer,
    viewMonthlyTimeSheetReducer,

    empLeaveListReducer,
    leaveStatusReducer,
    RejectleaveStatusReducer,
    viewDateWiseTimeSheetReducer,
    editHolidayReducer,
    empOverTimeReducer,
    deleteHolidayReducer,
    addLeavesReducer,
    addManualLeavesReducer,
    empLeaveListByIdReducer,
    addOverTimeReducer,
    employeeStatusUpdateReducer,
    dasboardReducer,
  });
export default rootReducers;
