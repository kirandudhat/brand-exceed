import React, { useEffect } from "react";
import Model from "../../Components/Model/Model";
import "./Leave.css";
import Datatable from "../../Components/DataTables/Datatable";
import { EMPLOYEE_LEAVE_LIST } from "../../redux/EmpLeaveList/type";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { getformattedDate } from "../../Utils/common/Common";

const Leave = () => {
  const dispatch = useDispatch();
  const viewLeave = useSelector(
    (state) => state.empLeaveListReducer.empLeaveList
  );
  const isLoading = useSelector(
    (state) => state.empLeaveListReducer.loading
  );
  
  useEffect(() => {
    dispatch({ type: EMPLOYEE_LEAVE_LIST });
  }, [EMPLOYEE_LEAVE_LIST]);
  const updateleave = viewLeave.rows?.map((item, i) => {
    switch (item.is_active) {
      case 0:
        item.is_active = "pending";
        break;
      case 1:
        item.is_active = "Approve";
        break;
      case 2:
        item.is_active = "Reject";
        break;
    }

    switch (item.leave_type) {
      case '1':
        item.leave_type = "Half Day";
        break;
      case '2':
        item.leave_type = "CL";
        break;
      case '3':
        item.leave_type = "Sick Leave";
        break;
      case '4':
        item.leave_type = "Col";
        break;
      case '5':
        item.leave_type = "LWP";
        break;
    }
    // ...
    return item;
  });

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "username",
      headerName: "Name",
      type: "text",
      width: 120,

      renderCell: (row) => {
        return <p>{row.row?.user?.username}</p>;
      },
    },

    {
      field: "from_date",
      headerName: "From Date",
      type: "text",
      width: 120,
    },
    {
      field: "to_date",
      headerName: "To Date",
      type: "text",
      width: 120,
    },
    {
      field: "leave_type",
      headerName: "Leave Type",
      type: "text",
      width: 120,
    },
    {
      field: "reason",
      headerName: "Reason",
      type: "text",
      width: 150,
    },
    {
      field: "is_active",
      headerName: "Status",
      type: "text",
      width: 80,
    },
    {
      field: "leaveday",
      headerName: "Day",
      type: "text",
      width: 80,
    },

    {
      field: "action",
      headerName: "Action",

      width: 120,
      renderCell: (row) => (
        <>
          <Button variant="contained" color="primary">
            <Model style={{ marginLeft: 16 }} id={row.id} />
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="leave">
        <div className="employeeWrapper">
          <span style={{ fontWeight: "bold", fontSize: "25px" }}>LEAVE DETAILS</span>
        </div>
        <div className="empyloyeemain shadow-none p-0">
          <Datatable
            column={columns}
            tableData={getformattedDate(updateleave)}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default Leave;
