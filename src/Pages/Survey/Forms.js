import { Checkbox, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg";
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { convertToHTML } from "draft-convert";
import "./formStyle.css"

export const TextBox = () =>{
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
    return(
        <>
        <div className="form-header">
        <div className="form-area">
            {/* <PreviewIcon/>
            <DeleteIcon/> */}
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
      </div>
      </div>
        </>
    )
}

export const SingleLine = () =>{
    return(
        <>
            <div style={{padding:"10px"}}>
            <input type="text" variant="standard" className="singliLine-header"/>
            <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
           Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
          </div>
          <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
           Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
          </div>
          <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
           Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
          </div>
          <div className="d-flex formInputs">
          <FormLabel for="Question Media Type" className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs">Question Media Type</FormLabel>
            <select id="Question Media Type" className="col-lg-7 col-md-7 form-control">
            <option value="Include Media Type" className="formInputs">Include Media Type</option>
            <option value="Image" className="formInputs">Image</option>
            <option value="Audio" className="formInputs">Audio</option>
            <option value="Video" className="formInputs">Video</option>
        </select>
        </div>
            <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
           Suffix
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
          </div>
          <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
           Limit Length
          </FormLabel>
          <input type="text" variant="standard" style={{height:'25px'}}/>&nbsp;&nbsp;   
          <div className="d-flex limit-input">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding"
            style={{fontSize:'13px'}}
          >
           To
          </FormLabel>
          <input type="text" variant="standard" style={{height:'25px'}}/>&nbsp;&nbsp;
          </div>
          </div>
          <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
           Validation Pattern
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
          </div>
          <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
           Validation Message
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
          </div>
          </div>
        </>
    )
}