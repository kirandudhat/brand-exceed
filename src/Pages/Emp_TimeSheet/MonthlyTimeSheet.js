import React, { useEffect, useState } from "react";
import "./MonthlyTimesheet.css";
import Datatable from "../../Components/DataTables/Datatable";
import { useDispatch, useSelector } from "react-redux";
import { VIEW_MONTHLY_TIMESHEET } from "../../redux/viewMonthlytimesheet/types";
import { getUser, updateTimeSheetStatus } from "../../Utils/common/Common";
import MonthsDropDown from "../../Utils/MonthsDropDown";


const MonthlyTimeSheet = () => {
  const dispatch = useDispatch();

  const monthlylist = useSelector(
    (state) => state.viewMonthlyTimeSheetReducer.viewMonthlyTimeSheet
  );
  const isLoading = useSelector(
    (state) => state.viewMonthlyTimeSheetReducer.loading
  );
  const [id, setId] = useState();
  useEffect(() => {
    const userDetails = getUser();

    if (userDetails?.userId) {
      setId(userDetails.userId);
    } else {
      setId(0);
    }
  }, []);

  useEffect(() => {
    if (id) {
      dispatch({ type: VIEW_MONTHLY_TIMESHEET, payload: { id: id } });
    }
  }, [id]);

  
  // const handleEmpDateWise = () => {
  //   History.push(`/employee/monthly/dateWise`);
  // };

  const columns = [
    { field: "id", headerName: "ID", width: 90 ,},
    {
      field: "timesheet_date",
      headerName: "Date",
      type: "text",
      width: 200,
    },
    {
      field: "projectname",
      headerName: "Project Name",
      type: "text",
      width: 200,
    },
    {
      field: "tasktitle",
      headerName: "Task Details",
      type: "text",
      width: 200,
    },

    {
      field: "timesheet_time",
      headerName: "Total Time",
      type: "text",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      type: "text",
      width: 100,
    },
  ];
  return (
    <>
      <div className="timesheet ">
        <div className="timesheetWrapper">
          <span style={{ fontWeight: "bold", fontSize:"25px" }}>Monthly timeSheet</span>
        </div>
        <div className="d-flex justify-content-end" style={{marginRight:"15px", marginBottom:"30px"}}>
          {<MonthsDropDown id={id}/>}
        </div>
        <div className="timesheetmain shadow-none p-0">
          <Datatable column={columns} tableData={updateTimeSheetStatus(monthlylist) ?? []} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};

export default MonthlyTimeSheet;
