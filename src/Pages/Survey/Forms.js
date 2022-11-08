import {
  Checkbox,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { convertToHTML } from "draft-convert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./formStyle.css";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const TextBox = () => {
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
  return (
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
  );
};

export const SingleLine = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />
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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
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
          <input type="text" variant="standard" style={{ height: "25px" }} />
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" style={{ height: "25px" }} />
            &nbsp;&nbsp;
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
  );
};
export const MultiLine = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />
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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
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
          <input type="text" variant="standard" style={{ height: "25px" }} />
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" style={{ height: "25px" }} />
            &nbsp;&nbsp;
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
      </div>
    </>
  );
};
export const NumberInput = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />
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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
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
          <input type="text" variant="standard" style={{ height: "25px" }} />
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" style={{ height: "25px" }} />
            &nbsp;&nbsp;
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
  );
};
export const NumberWithCodeInput = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />
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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
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
          <input type="text" variant="standard" style={{ height: "25px" }} />
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" style={{ height: "25px" }} />
            &nbsp;&nbsp;
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
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Code Values
          </FormLabel>
          <table className="code-table">
            <tr className="code-table-header">
              <th className="code-table-col">Code</th>
              <th className="code-table-col">From</th>
              <th className="code-table-col">To</th>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export const DecimalInput = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />
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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
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
            Precision
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Limit Value between
          </FormLabel>
          <input type="text" variant="standard" style={{ height: "25px" }} />
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" style={{ height: "25px" }} />
            &nbsp;&nbsp;
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
  );
};
export const Email = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />
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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
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
      </div>
    </>
  );
};
export const PhoneNumber = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />
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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
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
      </div>
    </>
  );
};
export const RadioButton = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Hidden Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
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
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};
export const RadioButtonWithOther = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Hidden Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
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
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};
export const Dropdown = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Hidden Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
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
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Enable text search
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};
export const DropdownWithOther = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Hidden Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
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
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Enable text search
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};
export const CheckBoxList = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Hidden Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
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
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Minimum Options Required
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Maximum Options Selectable
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Unique Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Check All Options
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
      </div>
    </>
  );
};
export const CheckBoxListWithOther = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Hidden Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
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
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Minimum Options Required
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Maximum Options Selectable
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Unique Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Check All Options
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
      </div>
    </>
  );
};
export const TwoColumnCheckBox = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Hidden Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
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
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Minimum Options Required
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Maximum Options Selectable
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Unique Option
          </FormLabel>
          <div style={{ display: "inline-grid", width: "100%" }}>
            <div>
              <textarea
                type="text"
                variant="standard"
                className="col-lg-7 col-md-7"
              />
            </div>
            <div>
              <span className="col-lg-7 col-md-7">
                after every option ++ sign{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Check All Options
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
      </div>
    </>
  );
};

export const NumberPoint = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Limit Value between
          </FormLabel>
          <input type="text" variant="standard" style={{ height: "25px" }} />
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" style={{ height: "25px" }} />
            &nbsp;&nbsp;
          </div>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Start Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Mid Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            End Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
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
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Display As
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="display"
            defaultValue="numbers"
            // value={createSurvey.survey_type}
            // onChange={(e)=>handleChange(e)}
          >
            <FormControlLabel
              value="numbers"
              control={<Radio />}
              label="Numbers"
              // labelPlacement="start"
            />
            <FormControlLabel
              value="slider"
              control={<Radio />}
              label="Slider"
              // labelPlacement="start"
            />
          </RadioGroup>
        </div>
      </div>
    </>
  );
};

export const Rating = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Number of ratings
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-3 col-md-3" />
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
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};
export const YesNo = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};
export const TrueFalse = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};
export const MaleFemale = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};
export const Date = () => {
  const [value, setValue] = useState(dayjs('2022-04-07'));
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
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
            Minimum Date
          </FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          views={['day']}
          label="Just date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
          </LocalizationProvider>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Maximum Date
          </FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          views={['day']}
          label="Just date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
          </LocalizationProvider>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};

export const Time = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
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
      </div>
    </>
  );
};
export const DateTime = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
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
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};
export const NetPromoterScore = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

        <div className="d-flex formInputs">
          <FormLabel
            for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Question Media Type
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
          >
            <option value="Include Media Type" className="formInputs">
              Include Media Type
            </option>
            <option value="Image" className="formInputs">
              Image
            </option>
            <option value="Audio" className="formInputs">
              Audio
            </option>
            <option value="Video" className="formInputs">
              Video
            </option>
          </select>
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
            Start Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Mid Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            End Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7" />
        </div>

        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5" />
        </div>
      </div>
    </>
  );
};
export const MapCoordinates = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" />

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

        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>

        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="formInputs"
          >
            Prevent duplicate location capture
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
        </div>
      </div>
    </>
  );
};
