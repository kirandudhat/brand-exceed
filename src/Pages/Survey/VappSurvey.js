import React from 'react';
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

function VappSurvey({onChange, survey, handleSubmit}) {
    const [time, setTime] = useState(false);
    const [showHeader,setShowHeader] = useState(false)
       // const [savebtn,setSavebtn] = useState([])

    // const handleSaveClick = () =>{
    //     setSavebtn([...savebtn,survey])
    // }
    // console.log("savebtn",savebtn)
    const history = useHistory();
  return (
    <div>
    <div className="background">
      <div className="row SurvayForm">
        <div className="col-md-8 col-lg-6">
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
            >
              Name *
            </FormLabel>
            <input name="name" className="col-md-7 col-sm-7 form-control" value={survey.name} onChange={onChange}/>
          </div>
          <div className="surveyRadio">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
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
                onChange={onChange}
              >
                <FormControlLabel
                  value="horizontal"
                  control={<Radio />}
                  label="Horizontal"
                  className="survey-lbl"
                  // labelPlacement="start"
                />
                <FormControlLabel
                  value="vertical"
                  control={<Radio />}
                  label="Vertical"
                  // labelPlacement="start"
                />
              </RadioGroup>
            </span>
          </div>
          <div className="surveyRadio">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
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
                onChange={onChange}
              >
                <FormControlLabel
                  value="horizontal"
                  control={<Radio />}
                  label="App Survey"
                  className="survey-lbl"
                  // labelPlacement="start"
                />
                <FormControlLabel
                  value="vertical"
                  control={<Radio />}
                  label="Web Survey"
                  // labelPlacement="start"
                />
              </RadioGroup>
            </span>
          </div>
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
            >
              Show Header
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} className="survey-lbl" checked={showHeader} 
            onChange={e => setShowHeader(e.target.checked)}/>
            </div>
          {showHeader ? <> <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
            >
              Header Text *
            </FormLabel>
            <input name="headerText" value={survey.headerText} className="col-md-7 col-sm-7 form-control" onChange={onChange}/>
          </div>
          <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
              >
                Header Image
              </FormLabel>
              {/* <input type="file" /> */}
              <TextField type="file" variant="standard" className="survey-lbl"  name='headerImage' value={survey.headerImage} onChange={onChange}/>
            </div> </>
            : "" }
            <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
              >
                Welcome Image
              </FormLabel>
              {/* <input type="file" /> */}
              <TextField type="file" variant="standard" className="survey-lbl" name='welcomeImage' value={survey.welcomeImage} onChange={onChange}/>
            </div>
            <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
              >
                Thank you Image*
              </FormLabel>
              {/* <input type="file" /> */}
              <TextField type="file" variant="standard" className="survey-lbl"  name='thankyouImage' value={survey.thankyouImage} onChange={onChange}/>
            </div>
            <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
              >
                Thank You Duration (Seconds)
              </FormLabel>
              <input name="thankyouDuration" className="col-md-7 col-sm-7 form-control" value={survey.thankyouDuration} onChange={onChange}/>
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
            onChange={onChange}
          >
            <option value="Default">
              Default
            </option>
          </select>
          </div>
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Access Pin
            </FormLabel>
            <input className="col-md-7 col-sm-7 form-control"  name='accessPin'
            value={survey.accessPin}
            onChange={onChange}/>
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
            onChange={onChange}/> :
            ""
          }
          </div>
          {time ? 
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Auto Save On Timeout
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='saveOnTime'
            value={survey.saveOnTime}
            onChange={onChange}/>
          </div> : ""}
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Loop Survey
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='loopSurvey'
              value={survey.loopSurvey} onChange={onChange}/>
          </div>
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              PDF-show Answered Questions Only
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='pdf' value={survey.pdf} onChange={onChange}/>
          </div>
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Background Location Capture
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='backgroundLoc' value={survey.backgroundLoc} onChange={onChange}/>
          </div>
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Is Location Capture Mandatory?
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='captureMandatory' value={survey.captureMandatory} onChange={onChange}/>
          </div>
          </div>
        
      </div>
      <div>
      <div className="forbtn">
        <button
          className="btncolor"
          variant="contained"
          type="submit"
          onClick={() => {
            handleSubmit()
          }}
        >
          Save
        </button>
        &nbsp;&nbsp;
        <button className="btncolor" variant="contained" type="submit">
          Cancel
        </button>
      </div>
      </div>
      </div>

    </div>
  )
}

export default VappSurvey