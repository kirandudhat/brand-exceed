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
import { Form } from 'react-bootstrap';

function HwebSurvey({onChange, survey, handleSubmit}) {
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(false);
 
    const history = useHistory();
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );
    const [endSucces, setEndSucces] = useState(() =>
      EditorState.createEmpty()
    );
    const [endTer, setEndTer] = useState(() =>
      EditorState.createEmpty()
    );
    const [convertedContent, setConvertedContent] = useState(null);
    const [convertedContentEndSuccess, setConvertedContentEndSuccess] = useState(null);
    const [convertedContentEndTer, setConvertedContentEndTer] = useState(null);
    const handleEditorChange = (state) => {
      setEditorState(state);
      convertContentToHTML();
    };
    const handleEditorChangeEndSuccess = (state) => {
        setEndSucces(state);
        convertContentToHTMLEndSuccess();
    };
    const handleEditorChangeEndTer = (state) => {
        setEndTer(state);
        convertContentToHTMLEndTer();
    };
    const convertContentToHTML = () => {
      let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
      setConvertedContent(currentContentAsHTML);
    };
    const convertContentToHTMLEndSuccess = () => {
      let currentContentAsHTML = convertToHTML(endSucces.getCurrentContent());
      setConvertedContentEndSuccess(currentContentAsHTML);
    };
    const convertContentToHTMLEndTer = () => {
      let currentContentAsHTML = convertToHTML(endTer.getCurrentContent());
      setConvertedContentEndTer(currentContentAsHTML);
    };

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
            <input name="name" value={survey.name} className="col-md-7 col-sm-7 form-control" onChange={onChange}/>
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
                onChange={onChange}
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
                onChange={onChange}
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
          {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Show Header" /> */}
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              name="headerText"
            >
              Header Text <span className='star'>*</span>
            </FormLabel>
            <input name="headerText" value={survey.headerText} className="col-md-7 col-sm-7 form-control" onChange={onChange} />
          </div>
          <div className="d-flex formInputs" >
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              >
                Header Image
              </FormLabel>
              {/* <input type="file" /> */}
              <Form.Control type="file"   name='headerImage' onChange={onChange}/>
            </div>
            <div className="d-flex formInputs" >
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              >
                Welcome Image
              </FormLabel>
              {/* <input type="file" /> */}
              <Form.Control type="file"  name='welcomeImage' onChange={onChange} />            </div>
            <div className="d-flex formInputs" >
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              >
                Thank you Image <span className='star'>*</span>
              </FormLabel>
              {/* <input type="file" /> */}
              <Form.Control type="file"   name='thankyouImage' onChange={onChange}/>            </div>
            <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
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
            onChange={onChange}
          >
            <option value="select">
              Select
            </option>
            <option value="English">
              English
            </option>
          </select>
          </div>
          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
              
            >
              Loop Survey
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='loopSurvey'
              value={survey.loopSurvey} onChange={onChange}/>
          </div>
          <div className="formInputs d-flex align-items-center">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              PDF-show Answered Questions Only
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} name='pdf' value={survey.pdf} onChange={onChange}/>
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
          <Editor
             editorState={editorState}
             onEditorStateChange={handleEditorChange}
             wrapperClassName="wrapper-class"
             editorClassName="editor-class survey-message"
             toolbarClassName="toolbar-class"
             className="col-md-7 col-lg-7 col-sm-7"
             name='startPage'
             value={survey.startPage}
          //   onChange={onChange}
          />
        <div className='textareabtn'><span>
          <PreviewIcon className="previewIcon" onClick={handleClickOpen} />
          <DeleteIcon className="previewIcon" /></span></div>
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
          <Editor
            editorState={endSucces}
            onEditorStateChange={handleEditorChangeEndSuccess}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class  survey-message"
            toolbarClassName="toolbar-class"
            className="col-md-7 col-lg-7 col-sm-7 survey-message"
            name='endPageSuccess'
            value={survey.endPageSuccess}
          //   onChange={onChange}
          />
        <div className='textareabtn'><span>
          <PreviewIcon className="previewIcon" onClick={handleClickOpen} />
          <DeleteIcon className="previewIcon" /></span></div>
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
          <Editor
             editorState={endTer}
             onEditorStateChange={handleEditorChangeEndTer}
             wrapperClassName="wrapper-class"
             editorClassName="editor-class  survey-message"
             toolbarClassName="toolbar-class"
             className="col-md-7 col-lg-7 col-sm-7 survey-message"
             name='endPageTer'
             value={survey.endPageTer}
          //   onChange={onChange}
          />
        <div className='textareabtn'><span>
          <PreviewIcon className="previewIcon" onClick={handleClickOpen} />
          <DeleteIcon className="previewIcon" /></span></div>
        </div>
      </div>

      <div className="forbtn">
        <button
          className="btncolor2"
          variant="contained"
          // type="submit"
          onClick={handleSubmit}

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

export default HwebSurvey