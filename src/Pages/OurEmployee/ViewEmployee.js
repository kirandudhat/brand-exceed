import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Datatable from "../../Components/DataTables/Datatable";
import { EMPLOYEE_LEAVE_LIST_BY_ID } from "../../redux/EmpLeaveList/type";
import { useParams } from "react-router";
import "./OurEmployee.css";
import { OVER_TIME_LIST } from "../../redux/getOverTime/types";
import { VIEW_EMPLOYEE_DETAILS } from "../../redux/viewEmployee/types";
import {
  getformattedDate,
  getUser,
  updateleaveIsActiveStatus,
  updateOvertimeStats,
} from "../../Utils/common/Common";
export default function ViewEmployee() {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state.viewEmployeeDeatilsReducer.loading
  );

  const ViewEmpData = useSelector(
    (state) => state.viewEmployeeDeatilsReducer.viewEmpData
  );

  const viewLeave = useSelector(
    (state) => state.empLeaveListByIdReducer.empLeaveList
  );
  const viewOverTime = useSelector(
    (state) => state.empOverTimeReducer.empOverTimelist
  );
  const [role, setRole] = useState();
  useEffect(() => {
    const userDetails = getUser();

    if (userDetails?.role) {
      setRole(userDetails.role);
    } else {
      setRole(0);
    }
  }, []);

  const { id } = useParams();
  useEffect(() => {
    dispatch({ type: EMPLOYEE_LEAVE_LIST_BY_ID, payload: id });
    dispatch({ type: VIEW_EMPLOYEE_DETAILS, payload: id });
    dispatch({ type: OVER_TIME_LIST, payload: id });
  }, []);
  function assignRole(assign_role) {
    switch (assign_role) {
      case 1:
        return (assign_role = "Admin");

      case 2:
        return (assign_role = "Developer");

      default:
        break;
    }
  }

  const updateViewLeave = viewLeave.rows?.map((item, i) => {
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
    return item;
  });

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "reason",
      headerName: "Reason",
      type: "text",
      width: 150,
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
      field: "reject_reason",
      headerName: "Reject Reason",
      type: "text",
      width: 230,
    },
    {
      field: "is_active",
      headerName: "Status",
      type: "text",
      width: 90,
    },
  ];

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
      headerName: "Tasktitle",
      type: "text",
      width: 200,
    },

    {
      field: "overtime_time",
      headerName: "Total Time",
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
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) :
        <div className="ouremployee">
          <div className="employeeWrapper">
            {role == 1 ? (
              <NavLink exact to="/admin/ouremployee" className="link">
                <span style={{ fontWeight: "bold", fontSize: "25px" }}>Employee Details</span>
              </NavLink>
            ) : (
              <span style={{ fontWeight: "bold", fontSize: "25px" }}>Profile</span>
            )}
          </div>
          <div className="empyloyeemain shadow-none p-0">
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card px-0">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="card-title mb-0">{ViewEmpData?.name}</h6>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td>
                                <b>User ID</b>
                              </td>
                              <td>{ViewEmpData?.id}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Designation</b>
                              </td>
                              <td>{ViewEmpData?.designation}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Mobile</b>
                              </td>
                              <td>{ViewEmpData?.mobile}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Company Email Account</b>
                              </td>
                              <td>{ViewEmpData?.company_email}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Skype Account</b>
                              </td>
                              <td>{ViewEmpData?.skype_account}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Home Number</b>
                              </td>
                              <td>{ViewEmpData?.home_number}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Date of Birth</b>
                              </td>
                              <td>{ViewEmpData?.date_of_birth}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Aadhar Card</b>
                              </td>
                              <td>{ViewEmpData?.aadhar_card}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Address</b>
                              </td>
                              <td>{ViewEmpData?.parment_address}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-md-6">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td>
                                <b>Name</b>
                              </td>
                              <td>{ViewEmpData?.name}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Date Of Joining</b>
                              </td>
                              <td>{ViewEmpData?.date_of_joining}</td>
                            </tr>

                            <tr>
                              <td>
                                <b>Personal Email ID</b>
                              </td>
                              <td>{ViewEmpData?.email}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Comapny Email Password</b>
                              </td>
                              <td>
                                {/* {ViewEmpData?.company_email_password} */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Skype Password</b>
                              </td>
                              {/* <td>{ViewEmpData?.skype_password}</td> */}
                            </tr>
                            <tr>
                              <td>
                                <b>Assign Role</b>
                              </td>
                              <td>{assignRole(ViewEmpData?.assign_role)}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Blood Group</b>
                              </td>
                              <td>{ViewEmpData?.blood_group}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Pan Card</b>
                              </td>
                              <td>{ViewEmpData?.pan_card}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Image</b>
                              </td>
                              <td>
                                {/* <img src="assets/images/faces/face1.jpg" alt="" style="width: 80px; height: auto;"> */}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div>
              <a
                className="read-more-link"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <h2>{linkName}</h2>
              </a>
            </div> */}
            </div>
          </div>

          {role == 1 ? (
            <div className="empyloyeemain">
              <div className="employeeWrapper">
                <span style={{ fontWeight: "bold" }}> Leave Deatils </span>
                <div>
                  {viewLeave.leaveleft &&
                    <>
                      <text style={{ fontWeight: "bold" }}>Remaining Leaves</text>
                      <text className="redius" style={{ margin: "0 20px 0 2px" }}>{viewLeave.leaveleft}</text>
                    </>
                  }
                  {
                    viewLeave.sickleave &&
                    <>
                      <text style={{ fontWeight: "bold" }}>Sick Leave</text>
                      <text className="redius" style={{ marginLeft: "2px" }}>{viewLeave.sickleave}</text>
                    </>
                  }
                </div>
              </div>
              <Datatable
                column={columns}
                tableData={getformattedDate(updateleaveIsActiveStatus(updateViewLeave))}
              />
            </div>
          ) : null}

          {role == 1 ? (
            <div className="empyloyeemain">
              <div className="employeeWrapper">
                <span style={{ fontWeight: "bold" }}> OverTime Deatils </span>
                <div>
                  {/* <span style={{ fontWeight: "bold" }}> Remaining Leaves {viewLeave.leaveleft}</span> */}
                  {/* <span className="redius">{viewLeave[0]?.leaveleft}</span> */}
                </div>
              </div>
              <Datatable
                column={columnss}
                tableData={updateOvertimeStats(viewOverTime)}
              />
            </div>
          ) : null}
        </div>
      }
    </>
  );
}
