import React, { useState } from "react";
import moment from "moment";
import "./../OurEmployee/OurEmployee.css";
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
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { useHistory } from "react-router-dom";
import CreateSurvey from "./CreateSurvey";
const Survey = () => {
  const [emptyName, setEmptyName] = useState(false);
  const [createSurvey, setCreateSurvey] = useState({
    name: "",
    layout: "horizontal",
    survey_type: "app_survey",
  });
  const dispatch = useDispatch();
  let history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCreateSurvey({
      name: "",
      layout: "",
      survey_type: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmptyName(false)
    console.log("name", name, value);
    setCreateSurvey({
      ...createSurvey,
      [name]: value,
    });
  };

  const handleSubmit = () => {

    if(createSurvey.name)
    {
      history.push(
        `/admin/createsurvey?name=${createSurvey.name}&layout=${createSurvey.layout}&survey_type=${createSurvey.survey_type}`
      );
    }
    else
    {
setEmptyName(true)
    }
    
  };
  // const empStatus = useSelector(
  //   (state) => state.employeeStatusUpdateReducer.payload
  // );
  const empdata2 = useSelector((state) => state.empListReducer.employeeList);
  console.log("empdata2", empdata2);
  React.useEffect(() => {
    dispatch({ type: EMPLOYEE_LIST });
  }, []);

  // EMPLOYEE_LIST -> get survey list
  // ADD_CLIENTS -> create survey

  const isLoading = useSelector((state) => state.empListReducer.loading);
  //   const handleViewEmployee = (id) => {
  //     History.push(`/admin/ouremployee/viewemployee/${id}`);

  //     dispatch({ type: VIEW_EMPLOYEE_DETAILS, payload: id });
  //   };

  //   const handleEditEmployee = (id) => {
  //     History.push(`/admin/ouremployee/edit/${id}`);
  //   };

  //   const handleDisableEmployee = (e, id, is_approve) => {
  //     // e.preventDefault();

  //     if (is_approve === 0) {
  //       is_approve = 1;
  //     } else if (is_approve === 1) {
  //       is_approve = 0;
  //     }

  //     dispatch({
  //       type: EMPLOYEE_STATUS_UPDATE,
  //       payload: { id: id, is_approve: is_approve },
  //     });
  //     dispatch({ type: EMPLOYEE_LIST });
  //   };

  const columns = [
    { field: "id", headerName: "#", maxWidth: 10, className:"pstyl" },
    {
      field: "name",
      headerName: "Name",
      flex: 1.5,
      width: 30,
      renderCell: ({ row }) => {
        return <p className="pstyl">{row.name}</p>;
      },
    },
    {
      field: "questionnaire",
      headerName: "Questionnaire",
      type: "text",
      flex: 1,
      width: 20,
      renderCell: ({ row }) => {
        return (
          <>
            <Button
              className="iconbtn"
              variant="contained"
              color="primary"
              //   onClick={() => handleEditEmployee(row.id)}
            >
              <EditIcon className="iconstyl" />
            </Button>
          </>
        );
      },
    },

    {
      field: "web_url",
      headerName: "Web URL",
      type: "text",
      flex: 1,
      width: 20,
      renderCell: ({ row }) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              //   onClick={() => handleViewEmployee(row.id)}
            >
              <VisibilityIcon className="iconstyl" />
            </Button>
          </>
        );
      },
    },
    {
      field: "responses",
      headerName: "Responses",
      type: "text",
      flex: 1,
      width: 10,
      renderCell: ({ row }) => {
        return <p className="pstyl">{row.responses && row.responses > 0 ? row.responses : 0}</p>;
      },
    },
    {
      field: "is_active",
      headerName: "Status",
      type: "text",
      flex: 1,
      width: 10,
      renderCell: ({ row }) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              //   onClick={(e) => handleDisableEmployee(e, row.id, row.is_active)}
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

    // {
    //   field: "action",
    //   headerName: "Action",
    //   type: "text",
    //   width: 200,
    //   renderCell: ({ row }) => {
    //     return (
    //       <>
    //         <Button
    //           variant="contained"
    //           color="primary"
    //         //   onClick={() => handleViewEmployee(row.id)}
    //         >
    //           <VisibilityIcon />
    //         </Button>
    //         <Button
    //           variant="contained"
    //           color="primary"
    //         //   onClick={() => handleEditEmployee(row.id)}
    //         >
    //           <EditIcon />
    //         </Button>

    //         <Button
    //           variant="contained"
    //           color="primary"
    //         //   onClick={(e) => handleDisableEmployee(e, row.id, row.is_active)}
    //           value={row.is_active}
    //         >
    //           <label className="switch">
    //             <input
    //               type="checkbox"
    //               checked={row?.is_active === 1 ? true : false}
    //               // onChange={(e) => handleDisableEmployee(e, row.id, row.is_active)}
    //               value={row.is_active}
    //               // defaultValue={true}
    //               readOnly
    //             />
    //             {/* <input
    //               type="checkbox"
    //               checked={row.is_active === 1 ? true : false}
    //               onChange={() => handleDisableEmployeeChange(row.id, row.is_active)}
    //               value={row.is_active}
    //           /> */}
    //             <span className="slider round" />
    //           </label>
    //         </Button>
    //       </>
    //     );
    //   },
    // },
  ];

  const empdata = [{ id: 1, name: "test-demo", responses: "1", is_active: 1 }];
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
          <span style={{ fontWeight: "bold" }}>Surveys</span>
          {/* <NavLink to="/admin/ouremployee/add"> */}
          {/* <Button className="btn btn-dark btn-lg"> ADD EMPLOYEE</Button> */}
          <button
            className="btncolor"
            variant="contained"
            type="submit"
            onClick={handleClickOpen}
          >
            Create Survey
          </button>
          {/* </NavLink> */}
        </div>
        <div className="employeemain" style={{borderWidth:"2px 1px 2px 1px",borderStyle:"solid",borderColor:"lightgray"}}>
          {
            <Datatable
              column={columns}
              tableData={getformattedDate(empdata2)}
              isLoading={isLoading}
            />
          }
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Survey</DialogTitle>
        <DialogContent style={{ display: "inline-grid" }}>
          <FormControl style={{ paddingBottom: "20px" }}>
            <FormLabel id="demo-form-control-label-placement">Name<span class="star">*</span></FormLabel>
            <input
              required="required"

              value={createSurvey.name}
              onChange={(e) => handleChange(e)}
              name="name"
            />
            {emptyName && <span className="star">Name is required</span>}
          </FormControl>
          <FormControl style={{ paddingBottom: "20px" }}>
            <FormLabel id="demo-form-control-label-placement">
              App Layout
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="layout"
              defaultValue="horizontal"
              value={createSurvey.layout}
              onChange={(e) => handleChange(e)}
            >
              <FormControlLabel
                value="horizontal"
                control={<Radio />}
                label="Horizontal"
                // labelPlacement="start"
              />
              <FormControlLabel
                value="vertical"
                control={<Radio />}
                label="Vertical"
                // labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-form-control-label-placement">
              Survey Type
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="survey_type"
              defaultValue="app_survey"
              value={createSurvey.survey_type}
              onChange={(e) => handleChange(e)}
            >
              <FormControlLabel
                value="app_survey"
                control={<Radio />}
                label="App Survey"
                // labelPlacement="start"
              />
              <FormControlLabel
                value="web_survey"
                control={<Radio />}
                label="Web Survey"
                // labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <button
            className="btncolorforCancel"
            variant="contained"
            type="submit"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="btncolor2"
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            Create Survey
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Survey;
