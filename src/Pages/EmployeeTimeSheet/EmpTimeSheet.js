import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./EmpTimeSheet.css";
import Datatable from "../../Components/DataTables/Datatable";
import VisibilityIcon from "@material-ui/icons/Visibility";
import History from "../../Utils/History/History";
import { VIEW_TIMESHEET } from "../../redux/timeSheetListing/types";
import { useDispatch, useSelector } from "react-redux";
import { VIEW_MONTHLY_TIMESHEET } from "../../redux/viewMonthlytimesheet/types";

const EmpTimeSheet = () => {
  const dispatch = useDispatch();

  const viewTimesheet = useSelector(
    (state) => state.timeSheetListReducer.timeSheetList
  );
  const isLoading = useSelector((state) => state.timeSheetListReducer.loading);

  const henldeEmpMonthlyTimeSheet = (id) => {
    dispatch({
      type: VIEW_MONTHLY_TIMESHEET,
      payload: { id, month: new Date().getMonth() },
    });
    History.push(`/admin/employeetimesheet/${id}`);
  };

  useEffect(() => {
    dispatch({ type: VIEW_TIMESHEET });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },

    {
      field: "designation",
      headerName: "Designation",
      type: "text",
      width: 300,
    },
    {
      field: "projectname",
      headerName: "Project",
      type: "text",
      width: 300,

      renderCell: ({ row }) => {
        return <p>{row.projectdeveloper?.project?.projectname}</p>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 100,
      renderCell: ({ row }) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => henldeEmpMonthlyTimeSheet(row.id)}
        >
          <VisibilityIcon />
        </Button>
      ),
    },
  ];
  return (
    <>
      <div className="ouremployee">
        {/* <div className="btn"></div> */}
        <div className="employeeWrapper">
          <span style={{ fontWeight: "bold" }}>EMPLOYEES TIMESHEET</span>
        </div>
        {/* <div className="emptimesheetWrapper">
          <Link to="/admin/employeetimesheet" className="link">
            <span style={{ fontWeight: "bold" }}> EMPLOYEE TIMESHEET</span>
          </Link>
          {/* <NavLink to="/admin/employeetimesheet/add">
            
            <button className="btncolor" variant="contained" type="submit">
              ADD TIMESHEET
            </button>
          </NavLink>
        </div> */}
        <div
          className="emptimesheetmain box-shadow-none"
          style={{ padding: "0px 20px" }}
        >
          <Datatable
            column={columns}
            tableData={viewTimesheet[0]}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default EmpTimeSheet;
