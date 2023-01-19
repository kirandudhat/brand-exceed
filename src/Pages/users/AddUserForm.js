import React, { useEffect, useState } from 'react';
import "../Survey/survey.css";
import {
  Container,
  InputGroup,
  FormControl,
  Form,
  FormGroup,
  Col,
  Row,
  FormCheck,
} from "react-bootstrap";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import * as Yup from "yup";
import Button from "@mui/material/Button";

import apiClient from "../../services/axois/index";
import { useHistory } from 'react-router-dom';
import "./../OurEmployee/OurEmployee.css";
import { getUser } from '../../Utils/common/Common';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { EMPLOYEE_LIST } from '../../redux/employeeListing/types';
import './user.css'
function AddUserForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  let roles = {
    company : 2,
    survey_manager : 3,
    survey_creator : 4,
    data_viewer: 5,
    data_collector: 6,
  }
  const params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  let loggedInUser = getUser()
  const [surveyList , setSurveyList] = useState([])
  const [userList , setUserList] = useState([])
  const [email , setEmail] = useState()
  const [formField, setFormField] = useState({
    "name":"",
    "email":"",
    "password":"",
    "confirm_password": "",
    // "role": window.location.pathname.includes('company') ? 2 : 3,
    "role": loggedInUser.role === 1 ?  window.location.pathname.includes('company') ? 2 : { survey_manager : false,
      survey_creator : false,
      data_viewer: false,
      data_collector: false}:{ survey_manager : false,
        survey_creator : false,
        data_viewer: false,
        data_collector: false},
    "parent_id": loggedInUser.role > 2 ? loggedInUser.parent_id : loggedInUser.id,
    "username":"" ,
    "status":"",
    "auto_assign_survey" : false,
    "view_own_collected_data": false,
  })
  const empdata2 = useSelector((state) => state.empListReducer.employeeList);
  useEffect(()=>{
        dispatch({ type: EMPLOYEE_LIST });   
    apiClient.get('/company_list').then((response) => {
      if(response.data.data.length){
          setUserList(response.data.data)
      }
      });
    if(id){
    apiClient
    .get(`/users/edit/${id}`, formField)
    .then((response) => {
      setEmail(response.data.data.email)
      let rol = JSON.parse(response.data.data.role)
      let role = {
        survey_manager : rol.includes(3) ? true : false,
        survey_creator : rol.includes(4) ? true :  false,
        data_viewer: rol.includes(5) ? true :  false,
        data_collector: rol.includes(6) ? true :  false}
      setFormField({
        "name":response.data.data.name,
        "email":response.data.data.email,
        "role": window.location.pathname.includes('company') ? 2 : role,
        "survey_id": response.data.data.survey_id,
        "parent_id": window.location.pathname.includes('user') && loggedInUser.role == 1 ? response.data.data.parent_id :loggedInUser.id,
        "username":response.data.data.username ,
        "status":Number(response.data.data.status),
        "auto_assign_survey" : response.data.data.auto_assign_survey == '1' ? true : false,
        "view_own_collected_data": response.data.data.view_own_collected_data == '1' ? true : false,
      })
    })
  }
  },[])
  
  useEffect(()=>{
    if(empdata2?.data && empdata2.data.length){
      if(!id){
        let data = empdata2.data.filter((i)=> i.publish == 1).map((item)=> {return {...item,isSelected: false }})
       setSurveyList(data)
      } else {
        if(formField?.survey_id){
        let survey = []
        survey = formField && formField?.survey_id ?  formField.survey_id.split(',') : [] 
        let data = empdata2.data.filter((i)=> i.publish == 1).map((item)=> {return {...item,isSelected: survey.includes(`${item.id}`) ? true : false }})
        setSurveyList(data)
        let removeSurvey = {...formField}
        // delete removeSurvey.survey_id;
        setFormField(removeSurvey)
        } else {
          let data = empdata2.data.filter((i)=> i.publish == 1).map((item)=> {return {...item,isSelected: false }})
          setSurveyList(data)
        }
      }
    }
  },[empdata2, formField.survey_id])

const handleChange = (e) => {
  let {name,value} = e.target
 
    setFormField({
    ...formField,
    [name]: value
  })

}

const handleChecked = (e) => {
  let {name,value} = e.target
if(name == "data_collector" || name == 'data_viewer' || name == "survey_creator" || name == "survey_manager"){
  setFormField({
  ...formField,
  role: {
    ...formField.role,
    [name]: e.target.checked
  }
})

}  else {
  setFormField({
  ...formField,
  [name]: e.target.checked
})

}
}
const handleSubmit = async () =>{
  let checkField = Object.keys(formField).map((i) => {
    if(((i === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formField[i])) || i === "username" || i === "password" || i === "confirm_password" ) && formField[i] === ""){
      if(i === "email"){
        toast.error(`${formField[i]} is required or not valid`);
      }
      else if(i == 'role'){
        if(loggedInUser.role == 1 && window.location.pathname.includes('company') && formField.role <= 0){
          toast.error(`${formField[i]} is required`);
        } else if(loggedInUser.role == 1 && window.location.pathname.includes('users') && Object.keys(formField.role).filter((i) => formField.role[i] == true).length <= 0){
          toast.error(`${formField[i]} is required`);
        }
        else if(loggedInUser.role > 1 && Object.keys(formField.role).filter((i) => formField.role[i] == true).length <= 0){
          toast.error(`${formField[i]} is required`);
        }
      }
      else {
        toast.error(`${formField[i]} is required`);
      }

      return false
    } else {
      return true
    }
  })
  let findData = checkField && checkField.length && checkField.filter((i)=> i === false)
  if(findData.length <= 0){
    let surveyIds = surveyList.filter((item) => item.isSelected).map((i)=> i.id)
    if(id){
      let roleIds
      if(loggedInUser.role == 1 && window.location.pathname.includes('company')){
        roleIds = [2]
      } else if(loggedInUser.role == 1 && window.location.pathname.includes('users') && Object.keys(formField.role).filter((i) => formField.role[i] == true).length > 0){
       
        let fetchRole = Object.keys(formField.role).filter((i) => formField.role[i] == true)
         roleIds = fetchRole.map((i)=> roles[i])
      }
      else if(loggedInUser.role > 1 && Object.keys(formField.role).filter((i) => formField.role[i] == true).length > 0){
        let fetchRole = Object.keys(formField.role).filter((i) => formField.role[i] == true)
        roleIds = fetchRole.map((i)=> roles[i])
       
      }
      let data = {...formField,role: roleIds, id:id,auto_assign_survey: formField.auto_assign_survey == true ? "1" : "0",view_own_collected_data: formField.view_own_collected_data == true ? "1" : "0",survey_id: surveyIds}
      // if(data.email == email){
      //   delete data.email;
      // }
      apiClient
      .post(`/users/update`,data )
      .then((response) => {
        if (response) {
          toast.success(response.msg);
          if(window.location.pathname.includes('users')){
            history.push(`/users`)
          } else {
            history.push(`/company`)
          }
          return true;
        }
        return false;
      });
    } else {
      let roleIds
      if(loggedInUser.role == 1 && window.location.pathname.includes('company')){
        roleIds = [2]
      } else if(loggedInUser.role == 1 && window.location.pathname.includes('users') && Object.keys(formField.role).filter((i) => formField.role[i] == true).length > 0){
       
        let fetchRole = Object.keys(formField.role).filter((i) => formField.role[i] == true)
         roleIds = fetchRole.map((i)=> roles[i])
      }
      else if(loggedInUser.role > 1 && Object.keys(formField.role).filter((i) => formField.role[i] == true).length > 0){
        let fetchRole = Object.keys(formField.role).filter((i) => formField.role[i] == true)
        roleIds = fetchRole.map((i)=> roles[i])
       
      }
      apiClient
      .post("/users", {...formField, role: JSON.stringify(roleIds), auto_assign_survey: formField.auto_assign_survey == true ? "1" : "0",view_own_collected_data: formField.view_own_collected_data == true ? "1" : "0",survey_id: surveyIds})
      .then((response) => {
        if (response) {
          toast.success(response.msg);
          if(window.location.pathname.includes('users')){
            history.push(`/users`)
          } else {
            history.push(`/company`)
          }
          return true;
        }
        return false;
      });
    }
    
    setFormField({})
  }
}

const handleOnChange = (event, option, index) => {
  const values = [...surveyList];
  values[index].isSelected = event.target.checked;
  setSurveyList(values);
};
  return (
    <div className="ouremployee">
        <div className="employeeWrapper">
        <span style={{ fontWeight: "bold" }} className="surveyTitle">
        {window.location.pathname.includes('users')? 'Add/Edit User' : 'Add/Edit Company'}
        </span>
        <button
            className="btncolor"
            variant="contained"
            type="submit"
            // onClick={handleClickOpen}
          >
            Back
          </button>
      </div>
    <div className="background" style={{padding: '10px 62px 0 70px'}}>
      <div className="row SurvayForm">
        <div className="col-md-6 col-lg-6">
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl formstyl"
            >
              User Name<span className='star'>*</span>
            </FormLabel>
            <input name="username" onChange={(e) => handleChange(e)} value={formField.username} className="col-md-7 col-sm-7 userInputform" />
          </div>
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl formstyl"
            >
              Name <span className='star'>*</span>
            </FormLabel>
            <input name="name"  onChange={(e) => handleChange(e)} value={formField.name} className="col-md-7 col-sm-7 userInputform"/>
          </div>
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl formstyl"
            >
              Email
            </FormLabel>
            <input name="email"  onChange={(e) => handleChange(e)} value={formField.email} className="col-md-7 col-sm-7 userInputform"/>
          </div>
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl formstyl"
            >
              Password <span className='star'>*</span>
            </FormLabel>
            <input type='password' name="password"  onChange={(e) => handleChange(e)} value={formField.password} className="col-md-7 col-sm-7 userInputform"/>
          </div>
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl formstyl"
            >
              Confirm Password<span className='star'>*</span>
            </FormLabel>
            <input type='password' name="confirm_password" onChange={(e) => handleChange(e)} value={formField.confirm_password} className="col-md-7 col-sm-7 userInputform"/>
          </div>
          <div className="d-flex formInputs">
          <FormLabel
            for="Question Media Type"
            className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
          >
            User Status
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-md-7 col-sm-7 userInputform"
            style={{height:'38px'}}
            name='status'
            onChange={(e) => handleChange(e)} 
            value={Number(formField.status)}
            // disabled
          >
            <option value="">
              Select status
            </option>
            <option value="1">
              Active
            </option>
            <option value="0">
              Inactive
            </option>
          </select>
          </div>
          {(loggedInUser.role == 1 && window.location.pathname.includes('users'))?
          <div className="d-flex formInputs">
          <FormLabel
            for="Question Media Type"
            className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
          >
            Company
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-md-7 col-sm-7 userInputform"
            style={{height:'38px'}}
            name='parent_id'
            onChange={(e) => handleChange(e)} 
            value={Number(formField.parent_id)}
            // disabled
          >
            <option value="">
              select company
            </option>
            {userList && userList.length && userList.map((i)=>{
              return(
              <option value={Number(i.id)}>
              {i.name}
            </option>
            )})}
          </select>
          </div>
          : ""}
          {
           loggedInUser.role >= 2 || (loggedInUser.role == 1 && window.location.pathname.includes('users'))? 
          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Role  <span className='star'>*</span>
            </FormLabel>
            <div>
            <FormGroup  style={{display: 'grid', marginLeft: '11px'}}>
                <FormControlLabel control={<Checkbox  checked={formField?.role?.data_collector} name="data_collector"  onChange={(e)=>handleChecked(e)}/>} label="Data Collector" style={{justifyContent: 'start'}}/>
                {loggedInUser.role == 1 || loggedInUser.role == 2 || loggedInUser.role == 3  ?
                <FormControlLabel control={<Checkbox checked={formField?.role?.data_viewer} name="data_viewer"  onChange={(e)=>handleChecked(e)}/>} name="data_viewer" label="Data Viewer" style={{justifyContent: 'start'}}/> : "" }
                {loggedInUser.role == 1 || loggedInUser.role == 2 ?
                <>
                <FormControlLabel control={<Checkbox checked={formField?.role?.survey_creator} name="survey_creator"  onChange={(e)=>handleChecked(e)}/>} name="survey_creator" label="Survey Creator" style={{justifyContent: 'start'}}/>
                <FormControlLabel control={<Checkbox checked={formField?.role?.survey_manager} name="survey_manager"  onChange={(e)=>handleChecked(e)}/>}name="survey_manager" label="Survey Manager" style={{justifyContent: 'start'}}/> </>: "" }
            </FormGroup>
            </div>
          </div> : ""
          }
          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Auto Assign Survey
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='auto_assign_survey'  onChange={(e) => handleChecked(e)} checked={formField.auto_assign_survey}/>
            </div>
            <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              View Own Collected Data
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='view_own_collected_data' onChange={ handleChecked} checked={formField.view_own_collected_data}/>
            </div>
          
          </div>
          {/* {
           loggedInUser.role == 2?  */}
          <div className="col-md-6 col-lg-6" >
            <div className='assign-form'>
                <div style={{padding: '10px',height: '447px', overflow: 'auto'}}>
                <p className='assign-text'>Assign Survey</p>
                  <div style={{padding: '10px', height: '398px', }}>
                    <table className="table table-striped table-bordered table-hover margin-bottom-15 table-border-top">
                      <tbody>
                  {surveyList?.map((item, index) => (
                      <tr className="ng-scope">
                        <td className="text-center">
                          <div class="checkbox c-checkbox mt0 checkbox-green">
                            <lable>
                                <input
                                className="ng-pristine ng-untouched ng-valid ng-empty"
                                type="checkbox"
                                id={item.id}
                                value={item.id}
                                checked={item.isSelected}
                                onChange={(e) => handleOnChange(e, item, index)}
                                />
                              </lable>
                          </div>
                        </td>
                      <td>
                      <label className="" htmlFor={item.id}>
                      {item.name}
                      </label>
                      </td>
                      </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div> 
          <div className="forbtn">
        <button
          className="btncolor2"
          variant="contained"
          type="submit"
          onClick={handleSubmit}
        >
          Save
        </button>
        &nbsp;&nbsp;
        <button className="btncolorforCancel" variant="contained" onClick={()=> history.push(`/users`)}>
          Cancel
        </button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default AddUserForm