import { all } from "redux-saga/effects";
import auth from "./auth/sagas";
// import addEmpSaga from "./addEmployee/sagas";
import empListSaga from "./employeeListing/sagas";
import ViewEmpSaga from "./viewEmployee/sagas";
// import editEmpSaga from "./editEmployee/sagas";
import addProjectSaga from "./addProjects/sagas";
import projectsListSaga from "./projectsListing/sagas";
// import addClientsSaga from "./addClients/sagas";
import ClientListSaga from "./clientListing/sagas";
// // import addEmployeeTimesheetSaga from "./addTimeSheet/sagas"
// import timeSheetSaga from "./timeSheetListing/sagas";
// import ViewProjectSaga from "./ViewProjects/sagas";
// import editProjectSaga from "./editProjects/sagas";
// import ViewClientSaga from "./ViewClients/sagas";
// import editClientsSaga from "./editClients/sagas";
// import holidaysSaga from "./addHolidays/sagas";
import holidayListSaga from "./holidayListing/sagas";
// import ViewMonthlyTimesheetSaga from "./viewMonthlytimesheet/sagas";
// import empLeaveListSaga from "./EmpLeaveList/sagas";
// import LeaveStatuaUpdateSaga from "./Approve_reject_leaves/sagas";
// import ViewDateWiseTimesheetSaga from "./ViewDateWiseTimeshee/saga";
// import editHolidaysSaga from "./editHoliday/saga";
// import empOverTimeSaga from "./getOverTime/sagas";
import deleteholidaySaga from "./deteleHoliday/sagas";
// import emp_add_leavesSaga from "./Emp_addLeaves/sagas";
// import manualLeavesSaga from "./addManualLeave/sagas";
// import addEmployeeTimesheetSaga from "./Emp_addTimeSheet/sagas";

import DashBoardSagas from "./Dashboard/sagas";
import addClientSaga from "./addClients/sagas";
import editClientsSaga from "./editClients/sagas";
export default function* rootSaga() {
  yield all([
    auth(),
    DashBoardSagas(),
    // addEmpSaga(),
    empListSaga(),
    addClientSaga(),
    ViewEmpSaga(),
    addProjectSaga(),
    projectsListSaga(),
    // addClientsSaga(),
    ClientListSaga(),
    // addEmployeeTimesheetSaga(),
    // timeSheetSaga(),
    // ViewProjectSaga(),
    // editProjectSaga(),
    // ViewClientSaga(),
    editClientsSaga(),
    // holidaysSaga(),
    holidayListSaga(),
    // ViewMonthlyTimesheetSaga(),
    // empLeaveListSaga(),
    // LeaveStatuaUpdateSaga(),
    // ViewDateWiseTimesheetSaga(),
    // editHolidaysSaga(),
    // empOverTimeSaga(),
    deleteholidaySaga(),
    // emp_add_leavesSaga(),
    // manualLeavesSaga(),
  ]);

}
