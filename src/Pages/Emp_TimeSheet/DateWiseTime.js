import React from "react";
import { Button } from "react-bootstrap";
import "./MonthlyTimesheet.css";
import Datatable from "../../Components/DataTables/Datatable";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
const DateWiseTime = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "date",
      headerName: "Date",
      width: 450,
      editable: true,
    },

    {
      field: "projectname",
      headerName: "Project Name",
      type: "text",
      width: 450,
      editable: true,
    },
    {
      field: "time",
      headerName: "Time",
      type: "text",
      width: 450,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      type: "text",
      width: 450,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 300,
      renderCell: () => (
        <Button variant="contained" color="primary">
          <VisibilityIcon />
        </Button>
      ),
    },
  ];
  return (
    <>
      <div className="timesheet">
        <div className="btn"></div>
        {/* <Link exact className="link" to="/employee/employeetimesheet">EMPLOYEE TIMESHEET</Link> */}
        <Link className="link" to="/employee/monthlytimesheet">MONTHLY</Link>
        <span style={{ fontWeight: "bold" }}> /DATE</span>

        <div className="timesheetWrapper">
          <div className="timesheetmain">
            <Datatable column={columns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DateWiseTime;
