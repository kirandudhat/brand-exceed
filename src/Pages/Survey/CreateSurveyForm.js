import { Button, Grid } from '@mui/material'
import React from 'react'
import "./survey.css";
import "./styles.css"
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Example from "./example";

function CreateSurveyForm() {
  return (
    <div className='queHeader'>
    <div className='form-header'>
      <div className='headerColor'>
      Questionnaire: (Name)
      </div>
      <div>
      <Button variant="contained" className='form-btn'>Questionnaire</Button>&nbsp;
      <Button variant="contained" className='form-btn'>ReSequence</Button>&nbsp;
      <Button variant="contained" className='form-btn'>Condotional Display</Button>&nbsp;
      <Button variant="contained" className='form-btn'>Answer Filtering</Button>&nbsp;
      <Button variant="contained" className='form-btn'>Randomization</Button>&nbsp;
      <Button variant="contained" className='form-btn'>Scoring</Button>&nbsp;
      <Button variant="contained" className='form-btn'>Preview</Button>&nbsp;
      </div>
    </div>
    <hr/>
    <div>
    <DndProvider backend={Backend}>
      <Example />
    </DndProvider>
    </div>

    </div>
  )
}

export default CreateSurveyForm