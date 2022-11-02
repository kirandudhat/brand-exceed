import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./OverTimeSheet.css";
import Datatable from "../../Components/DataTables/Datatable";
import { OVER_TIME_LIST } from "../../redux/getOverTime/types";
import { getUser, updateOvertimeStats } from "../../Utils/common/Common";
// import MonthsDropDown from "../../Utils/MonthsDropDown";

const OverTimeSheet = () => {
  const viewOverTime = useSelector(
    (state) => state.empOverTimeReducer.empOverTimelist
  );
  const isLoading = useSelector(
    (state) => state.empOverTimeReducer.loading
  );
  const [id, setId] = useState();
  const dispatch = useDispatch();
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
      dispatch({ type: OVER_TIME_LIST, payload: id });
    }
  }, [id]);

  
  const columnss = [
    { field: "id", headerName: "ID", width: 90 },
    
    {
      field: "overtime_date",
      headerName: "Date",
      type: "text",
      width: 200,
    },
    {
      field: "project",
      headerName: "Project Name",
      type: "text",
      width: 200,
    },
    {
      field: "tasktitle",
      headerName: "Task Title",
      type: "text",
      width: 200,
    },
    
    {
      field: "overtime_hours",
      headerName: "Total Hour",
      type: "text",
      width: 150,
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
      <div className="overtimesheet ">
        <div className="overtimesheetWrapper">
          <span style={{ fontWeight: "bold", fontSize:"25px" }}>Overtime timeSheet</span>
        </div>
        {/* {<MonthsDropDown id={id}/>} */}
        <div className="overtimesheetmain shadow-none p-0 ">
          <Datatable column={columnss} tableData={updateOvertimeStats(viewOverTime)??[]} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};
export default OverTimeSheet;
