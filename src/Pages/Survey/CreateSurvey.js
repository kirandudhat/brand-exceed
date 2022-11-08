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
import { useHistory } from "react-router-dom";

const CreateSurvey = () => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(false)
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
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  return (
    <div className="ouremployee">
      <div className="employeeWrapper">
        <span style={{ fontWeight: "bold" }} className="surveyTitle">
          Create Surveys
        </span>
        <button className="backbtn" variant="contained" type="submit" onClick={()=>history.push("/admin/survey")}>
          Back
        </button>
      </div>
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
            <input name="name" className="col-md-7 col-sm-7 form-control" />
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
                name="layout"
                defaultValue="horizontal"
                className="survey-lbl"
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
          {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Show Header" /> */}
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
            >
              Show Header
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} className="survey-lbl"/>
            </div>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
            >
              Header Text *
            </FormLabel>
            <input name="name" className="col-md-7 col-sm-7 form-control" />
          </div>
          <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
              >
                Header Image
              </FormLabel>
              {/* <input type="file" /> */}
              <TextField type="file" variant="standard" className="survey-lbl"/>
            </div>
            <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
              >
                Welcome Image
              </FormLabel>
              {/* <input type="file" /> */}
              <TextField type="file" variant="standard" className="survey-lbl"/>
            </div>
            <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
              >
                Thank you Image*
              </FormLabel>
              {/* <input type="file" /> */}
              <TextField type="file" variant="standard" className="survey-lbl" />
            </div>
            <div className="d-flex formInputs">
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-4 col-lg-4 control-label ng-binding survey-lbl"
              >
                Thank You Duration (Seconds)
              </FormLabel>
              <input name="name" className="col-md-7 col-sm-7 form-control" />
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
            <input name="name" className="col-md-7 col-sm-7 form-control" />
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
            <input name="name" className="col-md-4 col-sm-4 form-control"/> :
            ""
          }
          </div>
          {/* Dipended on above checkbox */}
          {time ? 
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Auto Save On Timeout
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }}/>
          </div> : ""}
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
          >
            <option value="select">
              Select
            </option>
            <option value="English">
              English
            </option>
          </select>
          </div>
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Loop Survey
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }}/>
          </div>
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              PDF-show Answered Questions Only
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
          </div>
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Background Location Capture
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
          </div>
          <div className="formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-3 col-lg-3 control-label ng-binding survey-lbl"
            >
              Is Location Capture Mandatory?
            </FormLabel>
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
          </div>
          </div>
        
      </div>
      <div>
      <div className="textArea">
        <FormLabel
          id="demo-form-control-label-placement"
          className="col-md-2 col-lg-2 control-label ng-binding survey-lbl"
        >
          Start Page
        </FormLabel>
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class survey-message"
          toolbarClassName="toolbar-class"
          className="col-md-7 col-lg-7 col-sm-7"
        />
      </div><span style={{paddingLeft:"14%"}}>
        <PreviewIcon className="previewIcon" onClick={handleClickOpen} />
        <DeleteIcon className="previewIcon" /></span>

        <div className="textArea">
        <FormLabel
          id="demo-form-control-label-placement"
          className="col-md-2 col-lg-2 control-label ng-binding survey-lbl"
        >
          End Page
          <br />
          (Success)
        </FormLabel>
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class  survey-message"
          toolbarClassName="toolbar-class"
          className="col-md-7 col-lg-7 col-sm-7 survey-message"
        />
      </div><span style={{paddingLeft:"14%"}}>
        <PreviewIcon className="previewIcon" onClick={handleClickOpen} />
        <DeleteIcon className="previewIcon" /></span>

      <div className="textArea">
        <FormLabel
          id="demo-form-control-label-placement"
          className="col-md-2 col-lg-2 control-label ng-binding survey-lbl"
        >
          End Page
          <br />
          (Termination)
        </FormLabel>
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class  survey-message"
          toolbarClassName="toolbar-class"
          className="col-md-7 col-lg-7 col-sm-7 survey-message"
        />
      </div><span style={{paddingLeft:"14%"}}>
        <PreviewIcon className="previewIcon" onClick={handleClickOpen} />
        <DeleteIcon className="previewIcon" /></span>
      <div className="forbtn">
        <button
          className="btncolor"
          variant="contained"
          type="submit"
          onClick={() => {
            history.push("/admin/CreateSurveyForm");
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
  );
};
export default CreateSurvey;
