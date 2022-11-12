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
          <p className="text-center">No reports have been configured. To add report on the dashboard - go to Analytics section and then click on "Pin to Dashboard"</p>
      </div>
    </>
  );
};
export default DashBoard;
