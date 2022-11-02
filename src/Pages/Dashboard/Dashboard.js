import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import BadgeIcon from "@mui/icons-material/Badge";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Utils/common/Common";
import { DASHBOARD } from "../../redux/Dashboard/types";
import WeekendIcon from "@material-ui/icons/Weekend";

const DashBoard = () => {
  const dispatch = useDispatch();
  const [role, setRole] = useState();

  useEffect(() => {
    const userDetails = getUser();
    if (userDetails?.role) {
      setRole(userDetails.role);
    } else {
      setRole(0);
    }
  }, []);

  const dashboardData = useSelector((state) => state.dasboardReducer?.payload);
 
  useEffect(() => {
    dispatch({ type: DASHBOARD });
  }, []);
  return (
    <>
      <div className="dashboard">
        <div className="row">
          <div className="col-12">
            <div className="dashboardWrraper">
              <h4>Welcome To Dashboard</h4>
            </div>
          </div>
        </div>

        {role === 1 ? (
          <div className="row">
            <div className="col-12 col-xl-12 stretch-card px-0">
              <div className="row flex-grow">
                <div className="col-md-4 grid-margin stretch-card">
                  <NavLink exact to="/admin/ouremployee">
                    <div className="card">
                      <div className="card-body px-0">
                        <div className="row d-flex align-items-center dashboard_grid">
                          <div className="col-6 col-md-8 col-xl-8">
                            <h6 className="card-title mb-2">Our Employees</h6>
                            <h3 className="mb-2">
                              {dashboardData?.developerCount}
                            </h3>
                            {/* <NavLink exact to="/admin/ouremployee">
                  Our Developer
                </NavLink>                            
                <i className="fas fa-long-arrow-alt-right"></i> */}
                          </div>
                          <div className="col-6 col-md-4 col-xl-4 text-center">
                            <i>
                              <BadgeIcon fontSize="large" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <NavLink exact to="/admin/leavedetails">
                    <div className="card">
                      <div className="card-body px-0">
                        <div className="row d-flex align-items-center dashboard_grid">
                          <div className="col-6 col-md-8 col-xl-8">
                            <h6 className="card-title mb-2">Leaves</h6>
                            <h3 className="mb-2">
                              {dashboardData?.leaveCount}
                            </h3>
                            {/* <NavLink exact to="/admin/employeetimesheet">
                  Employee Timesheet
                </NavLink> */}
                          </div>
                          <div className="col-6 col-md-4 col-xl-4 text-center">
                            <i>
                              <AccessTimeIcon fontSize="large" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <NavLink exact to="/admin/holidays">
                    <div className="card">
                      <div className="card-body px-0">
                        <div className="row d-flex align-items-center dashboard_grid">
                          <div className="col-6 col-md-8 col-xl-8">
                            <h6 className="card-title mb-2">Holidays</h6>
                            <h3 className="mb-2">{dashboardData?.holiday}</h3>
                            {/* <NavLink exact to="/admin/leavedetails">
                  Employee Leaves
                </NavLink> */}
                          </div>
                          <div className="col-6 col-md-4 col-xl-4 text-center">
                            <i>
                              <TimeToLeaveIcon fontSize="large" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-12 col-xl-12 stretch-card px-0">
              <div className="row flex-grow">
                {/* <div className="col-md-4 grid-margin stretch-card"> */}
                {/* <NavLink exact to="/timesheetadd">
                  <div className="card">
                    <div className="card-body">
                      <div className="row d-flex align-items-center dashboard_grid">
                        <div className="col-6 col-md-8 col-xl-8">
                          <h6 className="card-title mb-2">Add timeSheet</h6>
                          <h3 className="mb-2">{empdata}</h3>
                          
                          
                        </div>
                        <div className="col-6 col-md-4 col-xl-4 text-center">
                        <i><BadgeIcon fontSize="large"/></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink> */}
                {/* </div> */}
                <div className="col-md-4 grid-margin stretch-card">
                  <NavLink exact to="/leave">
                    <div className="card">
                      <div className="card-body">
                        <div className="row d-flex align-items-center dashboard_grid">
                          <div className="col-6 col-md-8 col-xl-8">
                            <h6 className="card-title mb-2">
                              Available Leaves{" "}
                            </h6>
                            <h3 className="mb-2">
                              {dashboardData?.leaveCount}
                            </h3>
                            {/* <NavLink exact to="/admin/employeetimesheet">
                  Employee Timesheet
                </NavLink> */}
                          </div>
                          <div className="col-6 col-md-4 col-xl-4 text-center">
                            <i>
                              <TimeToLeaveIcon fontSize="large" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <NavLink exact to="/holiday">
                    <div className="card">
                      <div className="card-body">
                        <div className="row d-flex align-items-center dashboard_grid">
                          <div className="col-6 col-md-8 col-xl-8">
                            <h6 className="card-title mb-2">
                              Upcoming Holiday{" "}
                            </h6>
                            <h3 className="mb-2">{dashboardData?.holiday}</h3>
                            {/* <NavLink exact to="/admin/leavedetails">
                  Employee Leaves
                </NavLink> */}
                          </div>
                          <div className="col-6 col-md-4 col-xl-4 text-center">
                            <i>
                              <WeekendIcon fontSize="large" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default DashBoard;
