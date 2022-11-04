import "./../OurEmployee/OurEmployee.css";
import "./survey.css";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import Button from '@mui/material/Button';
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useHistory } from "react-router-dom";

const CreateSurvey = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory()
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
    __html: DOMPurify.sanitize(html)
  };
};
  return (
    <div className="ouremployee">
      <div className="employeeWrapper">
        <span style={{ fontWeight: "bold" }} className="surveyTitle">
          Create Surveys
        </span>
        <button className="backbtn" variant="contained" type="submit">
            Back
        </button>
      </div>
      <hr/>
      <div className="row SurvayForm">
        <div className="col">
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Name *
          </FormLabel>
          <input name="name" />
        </div>
          <div className="surveyRadio">
            <FormLabel
              id="demo-form-control-label-placement"
              className="labelInput"
            >
              Layout Type
            </FormLabel>
            <span>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="layout"
                defaultValue="horizontal"
              >
                <FormControlLabel
                  value="horizontal"
                  control={<Radio />}
                  label="Horizontal"
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
              className="labelInput"
            >
              Survey Type
            </FormLabel>
            <span>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="layout"
                defaultValue="horizontal"
              >
                <FormControlLabel
                  value="horizontal"
                  control={<Radio />}
                  label="App Survey"
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
            className="labelInput"
          >
            Show Header
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
          </div>
          <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
           Header Image
          </FormLabel>
          {/* <input type="file" /> */}
          <TextField type="file" variant="standard"/>
          </div>
          <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
           Welcome Image
          </FormLabel>
          {/* <input type="file" /> */}
          <TextField type="file" variant="standard"/>
          </div>
          <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
          Thank you Image*
          </FormLabel>
          {/* <input type="file" /> */}
          <TextField type="file" variant="standard"/>
          </div>
          <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Thank You Duration (Seconds)
          </FormLabel>
          <input name="name" />
          </div>
        </div>
        <div className="col">
        <div className="formInputs">
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Theme</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Theme"
        >
          <MenuItem value={10}>Default</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Access Pin
          </FormLabel>
          <input name="name"/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Timeout (Seconds)
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
          <input name="name" />
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Auto Save On TimeOut
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="formInputs">
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Default Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Select"
        >
          <MenuItem value={10}>English</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Loop Survey
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            PDF-show Answered<br/> Questions Only
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Background Location Capture
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Is Location Capture Mandatory?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        </div>
      </div>
      <div className="textArea">
          <FormLabel
              id="demo-form-control-label-placement"
              // className="labelInput"
              >
              Start Page
          </FormLabel>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
          <PreviewIcon className="previewIcon" onClick={handleClickOpen}/>
          <DeleteIcon className="previewIcon"/>
      </div>          
           <div className="textArea">
          <FormLabel
              id="demo-form-control-label-placement"
              // className="labelInput"
              >
              End Page<br/>(Success)
          </FormLabel>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
          <PreviewIcon className="previewIcon" onClick={handleClickOpen}/>
          <DeleteIcon className="previewIcon"/>
      </div>
           <div className="textArea">
          <FormLabel
              id="demo-form-control-label-placement"
              // className="labelInput"
              >
              End Page<br/>(Termination)
          </FormLabel>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
          <PreviewIcon className="previewIcon" onClick={handleClickOpen}/>
          <DeleteIcon className="previewIcon"/>
      </div>
          <div className="forbtn">
          <button className="btncolor" variant="contained" type="submit" onClick={()=>{history.push("/admin/CreateSurveyForm")}}>
            Save
          </button>&nbsp;&nbsp;
          <button className="btncolor" variant="contained" type="submit">
            Cancel
          </button>
          </div>
          
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{fontSize:'20px'}}>Preview</DialogTitle>
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
