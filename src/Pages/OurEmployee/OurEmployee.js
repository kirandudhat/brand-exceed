import React, { useState } from "react";
import moment from "moment";
import "./OurEmployee.css";
import { Button } from "react-bootstrap";
import Switch from "@mui/material/Switch";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";

import Datatable from "../../Components/DataTables/Datatable";
import { NavLink } from "react-router-dom";
import History from "../../Utils/History/History";
import { EMPLOYEE_LIST } from "../../redux/employeeListing/types";
import { useDispatch, useSelector } from "react-redux";
import { VIEW_EMPLOYEE_DETAILS } from "../../redux/viewEmployee/types";
import { EMPLOYEE_STATUS_UPDATE } from "../../redux/Approve_reject_leaves/type";

const OurEmployee = () => {
  // const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  // const empStatus = useSelector(
  //   (state) => state.employeeStatusUpdateReducer.payload
  // );
  const empdata = useSelector((state) =>
    state.empListReducer.employeeList.map((item, index) => ({
      ...item,
    }))
  );
  React.useEffect(() => {
    dispatch({ type: EMPLOYEE_LIST });
  }, []);

  const isLoading = useSelector((state) => state.empListReducer.loading);
  const handleViewEmployee = (id) => {
    History.push(`/ouremployee/viewemployee/${id}`);

    dispatch({ type: VIEW_EMPLOYEE_DETAILS, payload: id });
  };

  const handleEditEmployee = (id) => {
    History.push(`/ouremployee/edit/${id}`);
  };

  const handleDisableEmployee = (e, id, is_approve) => {
    // e.preventDefault();

    if (is_approve === 0) {
      is_approve = 1;
    } else if (is_approve === 1) {
      is_approve = 0;
    }

    dispatch({
      type: EMPLOYEE_STATUS_UPDATE,
      payload: { id: id, is_approve: is_approve },
    });
    dispatch({ type: EMPLOYEE_LIST });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "name",
      headerName: "First Name",
      width: 200,
      renderCell: ({ row }) => {
        return <p>{row.name}</p>;
      },
    },
    {
      field: "user_lname",
      headerName: "User Name ",
      type: "text",
      width: 200,

      renderCell: ({ row }) => {
        return <p>{row.username}</p>;
      },
    },

    {
      field: "home_number",
      headerName: "Parent Number",
      type: "text",
      width: 150,

      renderCell: ({ row }) => {
        return <p>{row.home_number}</p>;
      },
    },
    {
      field: "date_of_joining",
      headerName: "Date Of Joining",
      type: "text",
      width: 150,

      // renderCell: ({ row }) => {
      //   return <p>{row.date_of_joining=moment(row.date_of_joining).format("DD-MM-YYYY")}</p>;
      // },
    },

    {
      field: "action",
      headerName: "Action",
      type: "text",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleViewEmployee(row.id)}
            >
              <VisibilityIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEditEmployee(row.id)}
            >
              <EditIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={(e) => handleDisableEmployee(e, row.id, row.is_active)}
              value={row.is_active}
            >
              <label className="switch">
                <input
                  type="checkbox"
                  checked={row?.is_active === 1 ? true : false}
                  // onChange={(e) => handleDisableEmployee(e, row.id, row.is_active)}
                  value={row.is_active}
                  // defaultValue={true}
                  readOnly
                />
                {/* <input 
                  type="checkbox"
                  checked={row.is_active === 1 ? true : false}
                  onChange={() => handleDisableEmployeeChange(row.id, row.is_active)}
                  value={row.is_active}
              /> */}
                <span className="slider round" />
              </label>
            </Button>
          </>
        );
      },
    },
  ];

  const getformattedDate = (list) => {
    return list.map((date) => ({
      ...date,
      date_of_joining: moment(date.date_of_joining).format("DD-MM-YYYY"),
      // to_date: moment(date.to_date).format("DD-MM-YYYY"),
    }));
  };
  return (
    <>
      <div className="ouremployee">
        <div className="employeeWrapper">
          <span style={{ fontWeight: "bold" }}>OUR EMPLOYEES</span>
          <NavLink to="/ouremployee/add">
            {/* <Button className="btn btn-dark btn-lg"> ADD EMPLOYEE</Button> */}
            <button className="btncolor" variant="contained" type="submit">
              ADD EMPLOYEE
            </button>
          </NavLink>
        </div>
        <div className="employeemain">
          {/* {empdata && empdata[0]?.rows.length > 0 && (
            <Datatable column={columns} tableData={empdata[0]?.rows} />
          )} */}
          {
            <Datatable
              column={columns}
              tableData={getformattedDate(empdata)}
              isLoading={isLoading}
            />
          }
        </div>
      </div>
    </>
  );
};
export default OurEmployee;
