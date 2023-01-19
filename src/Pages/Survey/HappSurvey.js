import React, { useEffect, useState } from 'react';
import "./survey.css";
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

import Button from "@mui/material/Button";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useHistory } from 'react-router-dom';
import "./../OurEmployee/OurEmployee.css";
import { getUser } from '../../Utils/common/Common';
import apiClient from '../../services/axois';

function HappSurvey({onChange, survey, handleSubmit}) {
    const history = useHistory();
    const [themes, setThemes] = useState([]);

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
        <div className="col-md-6 col-lg-6">
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl formstyl"
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
                  className="radio-lbl"
                  // labelPlacement="start"
                />
                <FormControlLabel
                  value="vertical"
                  control={<Radio />}
                  disabled
                  label="Vertical"
                  className="radio-lbl"
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
                  className="radio-lbl"
                  // labelPlacement="start"
                />
                <FormControlLabel
                  value="web_survey"
                  control={<Radio />}
                  disabled
                  label="Web Survey"
                  className="radio-lbl"
                  // labelPlacement="start"
                />
              </RadioGroup>
            </span>
          </div>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Header Text <span className='star'>*</span>
            </FormLabel>
            <input name="headerText" value={survey.headerText} className="col-md-7 col-sm-7 form-control" onChange={(e)=>onChange(e)} />
          </div>
            <div className="d-flex formInputs" >
               <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              >
                Welcome Image
              </FormLabel>
              {/* <input type="file" /> */}
              {/* <TextField type="file" variant="standard" className="survey-lbl"  name='welcomeImage' value={survey.welcomeImage} onChange={(e)=>onChange(e)}/> */}
              <Form.Control type="file"  name='welcomeImage' onChange={(e)=>onChange(e)} />
            </div>
            <div className="d-flex formInputs" >
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              >
                Thank you Image*
              </FormLabel>
              {/* <input type="file" /> */}
              <Form.Control type="file"   name='thankyouImage' onChange={(e)=>onChange(e)}/>            </div>
            <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              >
                Thank You Duration (Seconds)
              </FormLabel>
              <input type="number" name="thankyouDuration" className="col-md-7 col-sm-7 form-control"  value={survey.thankyouDuration} onChange={(e)=>onChange(e)}/>
            </div>
          
          </div>
          <div className="col-md-6 col-lg-6">
          <div className="d-flex formInputs">
          <FormLabel
            for="Question Media Type"
            className="col-md-3 col-lg-4 control-label ng-binding survey-lbl"
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
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-4 control-label ng-binding survey-lbl"
            >
              Access Pin
            </FormLabel>
            <input name="accessPin" className="col-md-7 col-sm-7 form-control"
            value={survey.accessPin}
            onChange={(e)=>onChange(e)}/>
          </div>
          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-4 control-label ng-binding survey-lbl"
            >
              Loop Survey
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='loopSurvey'
              value={survey.loopSurvey} onChange={(e)=>onChange(e)}/>
          </div>
          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-4 control-label ng-binding survey-lbl"
            >
              PDF-show Answered Questions Only
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='pdf' value={survey.pdf} onChange={(e)=>onChange(e)}/>
          </div>
          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-4 control-label ng-binding survey-lbl"
            >
              Background Location Capture
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='backgroundLoc' value={survey.backgroundLoc} onChange={(e)=>onChange(e)}/>
          </div>
          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-4 control-label ng-binding survey-lbl"
            >
              Is Location Capture Mandatory?
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='captureMandatory' value={survey.captureMandatory} onChange={(e)=>onChange(e)}/>
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
    </div>
  )
}

export default HappSurvey