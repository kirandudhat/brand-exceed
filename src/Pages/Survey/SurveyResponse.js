import React from 'react';
import { useEffect } from 'react';
import responseImg from './../../assest/img/welcome-img.png'
import { useDispatch, useSelector } from "react-redux";
import { EMPLOYEE_BY_ID } from '../../redux/employeeListing/types';
import { VIEW_EMPLOYEE_DETAILS, VIEW_EMPLOYEE_SUCCESS } from '../../redux/viewEmployee/types';
import { useState } from 'react';
import { Button } from '@mui/material';
import './survey.css'
import WelcomeScreen from '../../Components/SurveyPage/WelcomeScreen';
import ResponseForm from '../../Components/SurveyPage/ResponseForm';
import moment from 'moment';
import ThankyouScreen from '../../Components/SurveyPage/ThankyouScreen';
function SurveyResponse() {
  const params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  const dispatch = useDispatch();
  const viewData = useSelector((state) => state.viewEmployeeDeatilsReducer.viewEmpData);
  const [pageData, setPageData] = useState([])
  const [screen, setScreen] =useState('welcome')
  const [startDate,setStartDate] = useState()
  React.useEffect(() => {
    dispatch({ type: VIEW_EMPLOYEE_DETAILS, payload: id });  }, []);

  useEffect(() => {
    if(viewData){
      setPageData(JSON.parse(viewData.fields))
    }
  },[viewData])  

  const handleClick = (name) => {
    setScreen(name)
    setStartDate(Date.now())
  }
  return (
   <div>
    {screen === 'welcome' ? 
      <WelcomeScreen handleClick={handleClick}/>
    : screen === 'form' ?
    <ResponseForm pageData={pageData} startDate={startDate} handleClick={handleClick}/> :
    screen === 'thankyou' ?
    <ThankyouScreen handleClick={handleClick}/> : ""
    }
   </div>
  )
}

export default SurveyResponse