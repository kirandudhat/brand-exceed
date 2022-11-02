import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./EmpTimeSheet.css";
import Datatable from "../../Components/DataTables/Datatable";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { NavLink } from "react-router-dom";
import History from "../../Utils/History/History";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { VIEW_MONTHLY_TIMESHEET } from "../../redux/viewMonthlytimesheet/types";
import moment from "moment";
import MonthsDropDown from "../../Utils/MonthsDropDown";
import { VIEW_DATEWISE_TIMESHEET } from "../../redux/ViewDateWiseTimeshee/types";

const EmpMonthlysheet = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const viewMonthly = useSelector(
    (state) => state.viewMonthlyTimeSheetReducer.viewMonthlyTimeSheet
  );

  useEffect(() => {
    dispatch({
      type: VIEW_MONTHLY_TIMESHEET,
      payload: { id, month: new Date().getMonth() },
    });
  }, []);

  const updateList = viewMonthly?.map((item, i) => {
    switch (item.status) {
      case 1:
        item.status = "Done";
        break;
      case 2:
        item.status = "Not Done";
        break;
      case 3:
        item.status = "Working";
        break;
      case 4:
        item.status = "Pending";
        break;
    }

    return {
      ...item,
      projectname: item.project.projectname,
      timesheet_date: moment(item.timesheet_date).format("DD-MM-YYYY"),
    };
  });
  

  const handleEmpDateWise = (date) => {
    date=moment(date).format('MM')
    dispatch({ type: VIEW_DATEWISE_TIMESHEET, payload: {id,date }});
    History.push(`/admin/employeetimesheet/${id}/dateWise`);
    
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
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
      field: "taskdetails",
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
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 200,
      renderCell: ({row}) => (
        <Button variant="contained" color="primary" onClick={()=>handleEmpDateWise(row.timesheet_date)}>
          <VisibilityIcon />
        </Button>
      ),
    },
  ];

  return (
    <>
      
      <div className="emptimesheet">
      

        <div className="emptimesheetWrapper d-block pt-3 pb-2">
        <div className="d-block">
        <h3>Employee Timesheet</h3>
      </div>
      <div>
        <NavLink exact to="/admin/employeetimesheet">
          EMPLOYEE TIMESHEET
        </NavLink>
        <span style={{ fontWeight: "bold" }}> /Monthly </span>
      </div>
        </div>
          <div className="emptimesheetmain" style={{padding: "0px 20px"}}>
          <div className="d-flex justify-content-end pb-3">
            <MonthsDropDown id={id} />
          </div>

          
            <Datatable column={columns} tableData={updateList ?? []} />
          </div>
        </div>
      
    </>
  );
};

export default EmpMonthlysheet;
