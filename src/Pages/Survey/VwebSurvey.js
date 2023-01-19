import React, { useEffect, useRef } from 'react';
import "./../OurEmployee/OurEmployee.css";
import "./survey.css";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import Button from "@mui/material/Button";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import JoditEditor from 'jodit-react';
import { getUser } from '../../Utils/common/Common';
import apiClient from '../../services/axois';

function VwebSurvey({onChange, survey, handleSubmit}) {
    const [open, setOpen] = useState(false);
  const [time, setTime] = useState(false);
  const [showHeader,setShowHeader] = useState(false)
   // const [savebtn,setSavebtn] = useState([])

    // const handleSaveClick = () =>{
    //     setSavebtn([...savebtn,survey])
    // }
    // console.log("savebtn",savebtn)
  const params = new URLSearchParams(window.location.search) // id=123
    let name = params.get('name') // 123 
    let layout = params.get('layout') // 123 
    let survey_type = params.get('survey_type') // 123 
  const history = useHistory();
  const [themes, setThemes] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const editor = useRef(null);
  let loggedInUser = getUser()
  useEffect(()=>{
    let url = `/theme/${loggedInUser.id}`
    if(loggedInUser.role > 2){
      url = `/theme/${loggedInUser.parent_id}`
    }
    apiClient.get(url).then((response) => {
     if(response.data.data.length){
      setThemes(response.data.data)
     }
    });
},[])



  return (
    <div>
    <div className="background">
      <div className="row SurvayForm">
        <div className="col-md-8 col-lg-6">
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Name <span className='star'>*</span>
            </FormLabel>
            <input name="name" className="col-md-7 col-sm-7 form-control"  value={survey.name} onChange={(e)=>onChange(e)}/>
          </div>
          <div className="d-flex formInputs surveyRadio">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Layout Type
            </FormLabel>
            <span>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="layout"
                defaultValue="horizontal"
                className="survey-lbl"
                value={survey.layout}
                onChange={(e)=>onChange(e)}
              >
                <FormControlLabel
                  value="horizontal"
                  control={<Radio />}
                  disabled
                  label="Horizontal"
                  className="survey-lbl"
                  // labelPlacement="start"
                />
                <FormControlLabel
                  value="vertical"
                  control={<Radio />}
                  disabled
                  label="Vertical"
                  // labelPlacement="start"
                />
              </RadioGroup>
            </span>
          </div>
          <div className="d-flex formInputs surveyRadio">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Survey Type
            </FormLabel>
            <span>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="survey_type"
                defaultValue="horizontal"
                className="survey-lbl"
                value={survey.survey_type}
                onChange={(e)=>onChange(e)}
              >
                <FormControlLabel
                  value="app_survey"
                  control={<Radio />}
                  disabled
                  label="App Survey"
                  className="survey-lbl"
                  // labelPlacement="start"
                />
                <FormControlLabel
                  value="web_survey"
                  control={<Radio />}
                  disabled
                  label="Web Survey"
                  // labelPlacement="start"
                />
              </RadioGroup>
            </span>
          </div>
          <div className="d-flex align-items-center formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Show Header
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} className="survey-lbl" checked={showHeader} 
            onChange={e => setShowHeader(e.target.checked)}/>
            </div>
            {showHeader ? <> <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Header Text <span className='star'>*</span>
            </FormLabel>
            <input name="headerText" value={survey.headerText} className="col-md-7 col-sm-7 form-control" onChange={(e)=>onChange(e)}/>
          </div>
          <div className="d-flex formInputs" >
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              >
                Header Image
              </FormLabel>
              {/* <input type="file" /> */}
              <Form.Control type="file"  name='headerImage' onChange={(e)=>onChange(e)} />            </div> </>
            : "" }
            <div className="d-flex formInputs" >
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              >
                Welcome Image
              </FormLabel>
              {/* <input type="file" /> */}
              <Form.Control type="file"  name='welcomeImage' onChange={(e)=>onChange(e)} />            </div>
            <div className="d-flex formInputs" >
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              >
                Thank you Image <span className='star'>*</span>
              </FormLabel>
              {/* <input type="file" /> */}
              <Form.Control type="file"  name='thankyouImage' onChange={(e)=>onChange(e)} />            </div>
            <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              >
                Thank You Duration (Seconds)
              </FormLabel>
              <input type="number" name="thankyouDuration" className="col-md-7 col-sm-7 form-control" value={survey.thankyouDuration} onChange={(e)=>onChange(e)}/>
            </div>
          
          </div>
          <div className="col-md-8 col-lg-6">
          <div className="d-flex formInputs">
          <FormLabel
            for="Question Media Type"
            className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
          >
            Theme
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-md-7 col-sm-7 form-control"
            style={{height:'38px'}}
            name='theme'
            value={survey.theme}
            onChange={(e)=>onChange(e)}
          >
           {
              themes && themes.length && themes.map((item) => {
                return(
                <option value={item.id}>
                  {item.theme_name}
                </option>
                )
              })
            }
          </select>
          </div>
          <div className="d-flex formInputs">
          <FormLabel
            for="Question Media Type"
            className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
          >
            Default Language
          </FormLabel>
          <select
            id="Question Media Type"
            class="col-md-6 col-lg-7 form-control"
            style={{height:'38px'}}
            name='defaultLang'
            value={survey.defaultLang}
            onChange={(e)=>onChange(e)}
          >
            <option value="select">
              Select
            </option>
            <option value="English">
              English
            </option>
          </select>
          </div>
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Timeout (Seconds)
            </FormLabel>
            <Checkbox 
            inputProps={{ "aria-label": "controlled" }} 
            checked={time} 
            onChange={e => setTime(e.target.checked)}/>
            {time ? 
            <input className="col-md-4 col-sm-4 form-control" name='timeOut'
            value={survey.timeOut}
            onChange={(e)=>onChange(e)}/> :
            ""
          }
          </div>
          {time ? 
          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Auto Save On Timeout
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='saveOnTime'
            value={survey.saveOnTime}
            onChange={(e)=>onChange(e)}/>
          </div> : ""}

          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Loop Survey
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='loopSurvey'
              value={survey.loopSurvey} onChange={(e)=>onChange(e)}/>
          </div>
          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              PDF-show Answered Questions Only
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='pdf' value={survey.pdf} onChange={(e)=>onChange(e)}/>
          </div>
          </div>
        
      </div>
      <div>
      <div className="textArea">
        <FormLabel
          id="demo-form-control-label-placement"
          className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
        >
          Start Page
        </FormLabel>
        
        <div className='position-relative'>
        <JoditEditor
              ref={editor}
              name='startPage'
              value={survey.startPage}
              tabIndex={1} // tabIndex of textarea
              onBlur={(e)=>onChange({value: e, name: 'startPage'})} // preferred to use only this option to update the content for performance reasons
              // onChange={(e) => onChange({value: e, name: 'startPage'})}
            />
        </div>
      </div>
      <div className="textArea">
        <FormLabel
          id="demo-form-control-label-placement"
          className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
        >
          End Page (Success)
        </FormLabel>
        <div className='position-relative'>
        <JoditEditor
              ref={editor}
              name='endPageSuccess'
              value={survey.endPageSuccess}
              tabIndex={1} // tabIndex of textarea
              onBlur={(e)=>onChange({value: e, name: 'endPageSuccess'})} // preferred to use only this option to update the content for performance reasons
              // onChange={(e) => onChange({value: e, name: 'endPageSuccess'})}
            />
        </div>
        </div>

      <div className="textArea">
        <FormLabel
          id="demo-form-control-label-placement"
          className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
        >
          End Page
          (Termination)
        </FormLabel>

        <div className='position-relative'>
        <JoditEditor
              ref={editor}
              name='endPageTer'
              value={survey.endPageTer}
              tabIndex={1} // tabIndex of textarea
              onBlur={(e)=>onChange({value: e, name: 'endPageTer'})} // preferred to use only this option to update the content for performance reasons
              // onChange={(e) => onChange({value: e, name: 'endPageTer'})}
            />
        </div>
      </div>
      <div className="forbtn">
        <button
          className="btncolor2"
          variant="contained"
          type="submit"
          onClick={() => {
            handleSubmit()
          }}
        >
          Save
        </button>
        &nbsp;&nbsp;
        <button className="btncolorforCancel" variant="contained" type="submit">
          Cancel
        </button>
      </div>
      </div>
      </div>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ fontSize: "20px" }}>Preview</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default VwebSurvey