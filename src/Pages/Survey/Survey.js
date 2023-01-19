import React, { useState } from "react";
import moment from "moment";
import "./../OurEmployee/OurEmployee.css";
import { Button } from "react-bootstrap";
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
import './togglestyle.scss'
import { empStatusUpdate } from "../../services/Approve_rejectLeaveServicers";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DELETE_HOLIDAY } from "../../redux/deteleHoliday/type";
import { deleteholiday } from "../../services/deleteHolidayServices";
import { VIEW_PROJECTS_LIST } from "../../redux/projectsListing/types";
import { projectsListing } from "../../services/empProjectsListServices";
import { DialogContentText } from "@material-ui/core";
import { getUser } from "../../Utils/common/Common";
import { Link } from "@mui/material";


const Survey = () => {
  const [emptyName, setEmptyName] = useState(false);
  const [createSurvey, setCreateSurvey] = useState({
    name: "",
    layout: "horizontal",
    survey_type: "app_survey",
  });
  const dispatch = useDispatch();
  let loggedInUser = getUser()
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [isLoded, setIsLoded] = useState(false);
  const [empData,setEmpData] = useState([])

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
    setCreateSurvey({
      ...createSurvey,
      [name]: value,
    });
  };

  const handleSubmit = () => {

    if(createSurvey.name)
    {
      history.push(
        `/survey/createsurvey?name=${createSurvey.name}&layout=${createSurvey.layout}&survey_type=${createSurvey.survey_type}`
      );
    }
    else
    {
setEmptyName(true)
    }
    
  };
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
        // content:'Publish'
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
        // content:'Unpublish'
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  // const empStatus = useSelector(
  //   (state) => state.employeeStatusUpdateReducer.payload
  // );
  const empdata2 = useSelector((state) => state.empListReducer.employeeList);
  React.useEffect(() => {
      dispatch({ type: EMPLOYEE_LIST });
    }, []);
      React.useEffect(() => {
        let data = empdata2?.data
        if(data && data.length > 0){
        if(loggedInUser.role > 2 && empdata2.details.view_own_collected_data == "1" ){
          let survey = empdata2.details.survey_id.split(',')
          data = empdata2.data.map((item)=> {
            if(survey?.includes(`${item.id}`) ){
              return {
                ...item,
                responses: 0
              }
            } else {
              return item
            }
          })
        }
        setEmpData(data)
      }
    }, [empdata2]);
 
//     if(isLoded){
//       dispatch({ type: EMPLOYEE_LIST });
//       setIsLoded(false)

  // EMPLOYEE_LIST -> get survey list
  // ADD_CLIENTS -> create survey

  const isLoading = useSelector((state) => state.empListReducer.loading);

    const handleDisableEmployee = async(id) => {
      await empStatusUpdate(id)
    };
    const handleDeleteUser = async(id) =>{
      await deleteholiday(id);
     let deleteId = empData.filter((i)=>i.id !== id)
     setEmpData(deleteId)
    }
  const columns = [
    { field: "id", headerName: "#", maxWidth: 10, className:"pstyl" },
    {
      field: "name",
      headerName: "Name",
      flex: 1.5,
      width: 30,
      renderCell: ({ row }) => {
        return <p className="pstyl" onClick={()=> history.push(`/survey/createsurvey?id=${row.id}`)}>{row.name}</p>;
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
                onClick={()=>history.push(`/survey/CreateSurveyForm?id=${row.id}`)}
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
          <p className="pstyl" onClick={()=>{window.open(`/response?id=${row.id}`, '_blank'); }}> <VisibilityIcon className="iconstyl"/></p>
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
        if(row.responses > 0){
          return <p className="pstyl" onClick={()=>{history.push(`/Suveyresponse?id=${row.id}`); }}>{row.responses && row.responses > 0 ? row.responses : 0}</p>;
        } else {
          return <p>{row.responses && row.responses > 0 ? row.responses : 0}</p>;
        }
      },
    },
    {
      field: "publish",
      headerName: "Status",
      type: "text",
      flex: 1,
      width: 10,
      renderCell: ({ row }) => {
        return (
          <>
          <FormControlLabel
            control={<Android12Switch defaultChecked={row.publish}/>}
            name="publish"
            onClick={()=>handleDisableEmployee(row.id)}
          />
          <DeleteForeverIcon className="delet-btn" onClick={()=>handleDeleteUser(row.id)}/>
          
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
  const column2 = [
    { field: "id", headerName: "#", maxWidth: 10, className:"pstyl" },
    {
      field: "name",
      headerName: "Name",
      flex: 1.5,
      width: 30,
      renderCell: ({ row }) => {
        return <p className="pstyl" onClick={()=> history.push(`/survey/createsurvey?id=${row.id}`)}>{row.name}</p>;
      },
    },
    {
      field: "responses",
      headerName: "Responses",
      type: "text",
      flex: 1,
      width: 10,
      renderCell: ({ row }) => {
        if(row.responses > 0){
          return <p className="pstyl" onClick={()=>{history.push(`/Suveyresponse?id=${row.id}`); }}>{row.responses && row.responses > 0 ? row.responses : 0}</p>;
        } else {
          return <p>{row.responses && row.responses > 0 ? row.responses : 0}</p>;
        }
      },
    }
  ]
  const getformattedDate = (list) => {
    return list.map((date) => ({
      ...date,
      date_of_joining: moment(date.date_of_joining).format("DD-MM-YYYY"),
    }));
  };
  return (
    <>
      <div className="ouremployee">
      <div className="employeeWrapper">
        <span style={{ fontWeight: "bold" }} className="surveyTitle">
          Create Surveys
        </span>
        {
          loggedInUser.role <= 4 ? 
        <button
            className="btncolor"
            variant="contained"
            type="submit"
            onClick={handleClickOpen}
          >
            Create Survey
          </button> : ""
        }
      </div>
        {
          empData && empData.length > 0 ?
        <div className="employeemain" style={{borderWidth:"2px 1px 2px 1px",borderStyle:"solid",borderColor:"lightgray"}}>
          {
            <Datatable
              column={loggedInUser.role <= 4 ? columns : column2}
              tableData={empData}
              isLoading={isLoading}
            />
          }
        </div>
          : <p className="nodata">No data available</p>
        }
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
            {/* <input type="radio" name="test" value="big"/>
            <span><img src="https://thumbs.dreamstime.com/z/online-questionnaire-icon-simple-style-online-questionnaire-icon-simple-illustration-online-questionnaire-vector-icon-web-187717117.jpg"></img></span> */}
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
                // style={{margin:0}}
                label="Horizontal"
                // labelPlacement="start"
              />
              {/* <span></span> */}
              <FormControlLabel
                value="vertical"
                control={<Radio />}
                label="Vertical"
                // style={{margin:0}}
                // labelPlacement="start"
              />
              {/* <span></span> */}
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
