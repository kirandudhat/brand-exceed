import { Button, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import "./survey.css";
import "./styles.css"
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Example from "./example";
import { VIEW_EMPLOYEE_DETAILS } from "../../redux/viewEmployee/types";
import { useDispatch, useSelector } from "react-redux";

function CreateSurveyForm() {
  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  useEffect(()=>{
    dispatch({ type: VIEW_EMPLOYEE_DETAILS, payload: id });
  },[])
  const surveyData = useSelector(
    (state) => state.viewEmployeeDeatilsReducer.viewEmpData
  );
  return (
    <div className='queHeader'>
    <div className='form-header'>
      <h3 className='headerColor'>
      Questionnaire: ({surveyData?.name})
      </h3>
      {/* <div>
      <Button variant="contained" className='form-btn'>Questionnaire</Button>&nbsp;
      <Button variant="contained" className='form-btn'>ReSequence</Button>&nbsp;
      <Button variant="contained" className='form-btn'>Condotional Display</Button>&nbsp;
      <Button variant="contained" className='form-btn'>Answer Filtering</Button>&nbsp;
      <Button variant="contained" className='form-btn'>Randomization</Button>&nbsp;
      <Button variant="contained" className='form-btn'>Scoring</Button>&nbsp;
      <Button variant="contained" className='form-btn'>Preview</Button>&nbsp;
      </div> */}
    </div>
  
    <div>
    <DndProvider backend={Backend}>
      <Example />
    </DndProvider>
    </div>

    </div>
  )
}

export default CreateSurveyForm