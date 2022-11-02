import React from "react";
import "./EmpTimeSheet.css";
import Datatable from "../../Components/DataTables/Datatable";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateTimeSheetStatus } from "../../Utils/common/Common";
const EmpDateWise = () => {
  const {id} =useParams()
  const datewisetimesheet=useSelector((state)=>state.viewDateWiseTimeSheetReducer.viewDateWiseTimeSheet)
  
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "timesheet_date",
      headerName: "Date",
      width: 200,
      type: "text",
      
    },

    {
      field: "projectname",
      headerName: "Project Name",
      type: "text",
      width: 200,
      
    },
    {
      field: "taskdetails",
      headerName: "Title",
      type: "text",
      width: 200,
      
    },
    {
      field: "status",
      headerName: "Status",
      type: "text",
      width: 200,
      
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   sortable: false,
    //   width: 200,
    //   renderCell: () => (
    //     <Button variant="contained" color="primary">
    //       <VisibilityIcon />
    //     </Button>
    //   ),
    // },
  ];
  return (
    <>
      <div className="emptimesheet">
        <div className="btn"></div>
        <Link exact className="link" to="/admin/employeetimesheet">EMPLOYEE TIMESHEET</Link>
        <Link className="link" to={`/admin/employeetimesheet/${id}`}>/MONTHLY</Link>
        <span style={{ fontWeight: "bold" }}> /DATE</span>

        <div className="emptimesheetWrapper">
          <div className="emptimesheetmain">
            <Datatable column={columns}  tableData={updateTimeSheetStatus(datewisetimesheet)|| []}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpDateWise;
