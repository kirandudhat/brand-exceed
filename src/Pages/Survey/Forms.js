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
import { Children, useState } from "react";
import { convertToHTML } from "draft-convert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./formStyle.css";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const formController = (name, data, formData, handleChange, handleChecked) => {
  switch(name) {
    case 'TextBox':
     return <TextBox data={data} formData={formData}  handleChange={handleChange}/>;
    case 'SingleLine':
      return <SingleLine data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'MultiLine':
      return <MultiLine data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'NumberInput':
      return <NumberInput data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'NumberWithCodeInput':
      return <NumberWithCodeInput data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'DecimalInput':
      return <DecimalInput data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'Email':
      return <Email data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'PhoneNumber':
      return <PhoneNumber data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'RadioButton':
      return <RadioButton data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'RadioButtonWithOther':
      return <RadioButtonWithOther data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'Dropdown':
      return <Dropdown data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'DropdownWithOther':
      return <DropdownWithOther data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'CheckBoxList':
      return <CheckBoxList data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'CheckBoxListWithOther':
      return <CheckBoxListWithOther data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'TwoColumnCheckBox':
      return <TwoColumnCheckBox data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'NumberPoint':
      return <NumberPoint data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'Rating':
      return <Rating data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'YesNo':
      return <YesNo data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'TrueFalse':
      return <TrueFalse data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'MaleFemale':
      return <MaleFemale data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'Date':
      return <Date data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'Time':
      return <Time data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'DateTime':
      return <DateTime data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'NetPromoterScore':
      return <NetPromoterScore data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'BarCodeScanner':
      return <BarCodeScanner data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'MapCoordinates':
      return <MapCoordinates data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    default:
     return null;
   }
}


export const TextBox = ({data,formData, handleChange}) => {
  console.log("textbox---->",data,formData, handleChange)
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

export const SingleLine = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field);

  console.log("SingleLine",findData)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" checked={findData.question} onChange={(e)=>handleChange(e, field)}/>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" value={findData.discription} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="suffix" value={findData.suffix} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Limit Length
          </FormLabel>
          <input type="text" variant="standard" name="limitTo" className="form-control2" value={findData.limitTo} onChange={(e)=>handleChange(e, field)}/>
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" name="limitFrom" className="form-control2" value={findData.limitFrom} onChange={(e)=>handleChange(e, field)}/>
            &nbsp;&nbsp;
          </div>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Validation Pattern
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="validationPattern" value={findData.validationPattern} onChange={(e)=>handleChange(e, field)}  placeholder="Define validation pattern"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Validation Message
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="ValidationMessage" value={findData.ValidationMessage} onChange={(e)=>handleChange(e, field)} placeholder="Define validation message"/>
        </div>
      </div>
    </>
  );
};
export const MultiLine = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" value={findData.discription} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="suffix" value={findData.suffix} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Limit Length
          </FormLabel>
          <input type="text" variant="standard" className="form-control2" name="limitTo" value={findData.limitTo} onChange={(e)=>handleChange(e, field)}/>
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" className="form-control2" name="limitFrom" value={findData.limitFrom} onChange={(e)=>handleChange(e, field)}/>
            &nbsp;&nbsp;
          </div>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const NumberInput = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" value={findData.discription} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="suffix" value={findData.suffix} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Limit Length
          </FormLabel>
          <input type="text" variant="standard" className="form-control2"  name="limitTo" value={findData.limitTo} onChange={(e)=>handleChange(e, field)}/>
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" className="form-control2" name="limitFrom" value={findData.limitFrom} onChange={(e)=>handleChange(e, field)}/>
            &nbsp;&nbsp;
          </div>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-bindingformInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Validation Pattern
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="validationPattern" value={findData.validationPattern} onChange={(e)=>handleChange(e, field)} placeholder="Define validation pattern"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Validation Message
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="ValidationMessage" value={findData.ValidationMessage} onChange={(e)=>handleChange(e, field)} placeholder="Define validation message"/>
        </div>
      </div>
    </>
  );
};
export const NumberWithCodeInput = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" value={findData.discription} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="suffix" value={findData.suffix} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Limit Length
          </FormLabel>
          <input type="text" variant="standard" className="form-control2" name="limitTo" value={findData.limitTo} onChange={(e)=>handleChange(e, field)}/>
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" className="form-control2" name="limitFrom" value={findData.limitFrom} onChange={(e)=>handleChange(e, field)}/>
            &nbsp;&nbsp;
          </div>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Validation Pattern
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="validationPattern" value={findData.validationPattern} onChange={(e)=>handleChange(e, field)} placeholder="Define validation pattern"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Validation Message
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="ValidationMessage" value={findData.ValidationMessage} onChange={(e)=>handleChange(e, field)} placeholder="Define validation message"/>
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
                  className="col-lg-11 col-md-12 "
                  name="code1" value={findData.code1} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="from1" value={findData.from1} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="to1" value={findData.to1} onChange={(e)=>handleChange(e, field)}
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="code2" value={findData.code2} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="from2" value={findData.from2} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="to2" value={findData.to2} onChange={(e)=>handleChange(e, field)}
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="code3" value={findData.code3} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="from3" value={findData.from3} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="to3" value={findData.to3} onChange={(e)=>handleChange(e, field)}
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="code4" value={findData.code4} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="from4" value={findData.from4} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="to4" value={findData.to4} onChange={(e)=>handleChange(e, field)}
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="code5" value={findData.code5} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="from5" value={findData.from5} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="to5" value={findData.to5} onChange={(e)=>handleChange(e, field)}
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="code6" value={findData.code6} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="from6" value={findData.from6} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="to6" value={findData.to6} onChange={(e)=>handleChange(e, field)}
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="code7" value={findData.code7} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="from7" value={findData.from7} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="to7" value={findData.to7} onChange={(e)=>handleChange(e, field)}
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="code8" value={findData.code8} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="from8" value={findData.from8} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="to8" value={findData.to8} onChange={(e)=>handleChange(e, field)}
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="code9" value={findData.code9} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="from9" value={findData.from9} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="to9" value={findData.to9} onChange={(e)=>handleChange(e, field)}
                />
              </td>
            </tr>
            <tr className="code-table-header">
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="code10" value={findData.code10} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="from10" value={findData.from10} onChange={(e)=>handleChange(e, field)}
                />
              </td>
              <td className="code-table-col">
                <input
                  type="text"
                  variant="standard"
                  className="col-lg-11 col-md-12"
                  name="to10" value={findData.to10} onChange={(e)=>handleChange(e, field)}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export const DecimalInput = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" value={findData.discription} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="suffix" value={findData.suffix} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Precision
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="precision" value={findData.precision} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Limit Value between
          </FormLabel>
          <input type="text" variant="standard" className="form-control2" name="limitTo" value={findData.limitTo} onChange={(e)=>handleChange(e, field)}/>
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" className="form-control2" name="limitFrom" value={findData.limitFrom} onChange={(e)=>handleChange(e, field)}/>
            &nbsp;&nbsp;
          </div>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Validation Pattern
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="validationPattern" value={findData.validationPattern} onChange={(e)=>handleChange(e, field)} placeholder="Define validation pattern"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Validation Message
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="ValidationMessage" value={findData.ValidationMessage} onChange={(e)=>handleChange(e, field)} placeholder="Define validation message"/>
        </div>
      </div>
    </>
  );
};
export const Email = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" value={findData.discription} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const PhoneNumber = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" value={findData.discription} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const RadioButton = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
                name="option" value={findData.option} onChange={(e)=>handleChange(e, field)}
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
                name="hiddenOption" value={findData.hiddenOption} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }}  name="randomizeOption" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const RadioButtonWithOther = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
                name="option" value={findData.option} onChange={(e)=>handleChange(e, field)}
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
                name="hiddenOption" value={findData.hiddenOption} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="randomizeOption" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const Dropdown = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" value={findData.discription} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
                name="option" value={findData.option} onChange={(e)=>handleChange(e, field)}
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
                name="hiddenOption" value={findData.hiddenOption} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-bindingformInputs"
          >
            Enable text search
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="enableText" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="randomizeOption" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const DropdownWithOther = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" value={findData.discription} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
                name="option" value={findData.option} onChange={(e)=>handleChange(e, field)}
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
                name="hiddenOption" value={findData.hiddenOption} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-bindingformInputs"
          >
            Enable text search
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="enableText" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="randomizeOption" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const CheckBoxList = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
                name="option" value={findData.option} onChange={(e)=>handleChange(e, field)}
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
                name="hiddenOption" value={findData.hiddenOption} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Minimum Options Required
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="minimumOption" value={findData.minimumOption} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Maximum Options Selectable
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="maximumOption" value={findData.maximumOption} onChange={(e)=>handleChange(e, field)}/>
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
                name="uniqueOption" value={findData.uniqueOption} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="checkallOption" value={findData.checkallOption} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="randomizeOption" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const CheckBoxListWithOther = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
                name="option" value={findData.option} onChange={(e)=>handleChange(e, field)}
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
                name="hiddenOption" value={findData.hiddenOption} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Minimum Options Required
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="minimumOption" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Maximum Options Selectable
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="maximumOption" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
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
                name="uniqueOption" value={findData.uniqueOption} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control"  name="checkallOption" value={findData.checkallOption} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="randomizeOption" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const TwoColumnCheckBox = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
                name="option" value={findData.option} onChange={(e)=>handleChange(e, field)}
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
                name="hiddenOption" value={findData.hiddenOption} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Minimum Options Required
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="minimumOption" value={findData.minimumOption} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Maximum Options Selectable
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="maximumOption" value={findData.maximumOption} onChange={(e)=>handleChange(e, field)}/>
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
                name="uniqueOption" value={findData.uniqueOption} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control"  name="checkallOption" value={findData.checkallOption} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Randomize Options
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="randomizeOption" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
      </div>
    </>
  );
};

export const NumberPoint = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="form-control2" name="limitTo" value={findData.limitTo} onChange={(e)=>handleChange(e, field)}/>
          &nbsp;&nbsp;
          <div className="d-flex limit-input">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-lg-3 col-md-4 control-label ng-binding"
              style={{ fontSize: "13px" }}
            >
              To
            </FormLabel>
            <input type="text" variant="standard" className="form-control2" name="limitFrom" value={findData.limitFrom} onChange={(e)=>handleChange(e, field)}/>
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
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control"  name="startValue" value={findData.startValue} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Mid Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control"  name="midValue" value={findData.midValue} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            End Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control"  name="endValue" value={findData.endValue} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
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
            defaultValue="numbers"
            name="display"
            value={findData.display}
            onChange={(e)=>handleChange(e, field)}
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

export const Rating = ({data,formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="col-lg-3 col-md-3 form-control" name="numberOfRating" value={findData.numberOfRating} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const YesNo = ({data, formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
        </div>

        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const TrueFalse = ({data, formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
        </div>

        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const MaleFemale = ({data, formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
        </div>

        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-bindingformInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const Date = ({data, formData, handleChange, handleChecked}) => {
  const [value, setValue] = useState(dayjs('2022-04-07'));
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="description" value={findData.description} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia"
            value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-bindingformInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
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
          renderInput={(params) => <TextField {...params} helperText={null} name="minDate" value={findData.minDate} onChange={(e)=>handleChange(e, field)}/>}
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
          renderInput={(params) => <TextField {...params} helperText={null} name="maxDate" value={findData.maxDate} onChange={(e)=>handleChange(e, field)}/>}
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
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};

export const Time = ({data, formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="description" value={findData.description} onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="numberOfRating" value={findData.numberOfRating} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia" value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const DateTime = ({data, formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Description
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control"  name="description"
            value={findData.description}
            onChange={(e)=>handleChange(e, field)} placeholder="Type help information for question here..."/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
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
            name="questionMedia" value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-4 col-md-4 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const NetPromoterScore = ({data, formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

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
            name="questionMedia" value={findData.questionMedia} onChange={(e)=>handleChange(e, field)}
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
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
        </div>

        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Start Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control"  name="startValue" value={findData.startValue} onChange={(e)=>handleChange(e, field)}/>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Mid Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control"  name="midValue" value={findData.midValue} onChange={(e)=>handleChange(e, field)}/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            End Value Label
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="endValue" value={findData.endValue} onChange={(e)=>handleChange(e, field)}/>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Auto Next Duration (In Seconds)
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="autonextDuration" value={findData.autonextDuration} onChange={(e)=>handleChange(e, field)}/>
        </div>
      </div>
    </>
  );
};
export const BarCodeScanner = ({data, formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Disallow Manual Entry
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="disallowManual" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-5 col-md-5 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
        </div>
      </div>
    </>
  );
};
export const MapCoordinates = ({data, formData, handleChange, handleChecked}) => {
  let field = Object.keys(data)[0]
  let findData = formData.find((item)=>item.field === field)
  return (
    <>
      <div style={{ padding: "10px" }}>
        <input type="text" variant="standard" className="singliLine-header" name="question" value={findData.question} onChange={(e)=>handleChange(e, field)}/>

        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding formInputs"
          >
            Display Title
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="displayTitle" value={findData.displayTitle} onChange={(e)=>handleChange(e, field)} placeholder="Display Title"/>
        </div>
        <div className="d-flex formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding  formInputs"
          >
            Variable Name
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="variableName" value={findData.variableName} onChange={(e)=>handleChange(e, field)} placeholder="Define variable name"/>
        </div>

        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Is Question Required?
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="questionRequired" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>

        <div className="formInputs">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding formInputs"
          >
            Prevent duplicate location capture
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} name="preventDuplicate" checked={findData.questionRequired}  onChange={(e)=>handleChecked(e, field)}/>
        </div>
      </div>
    </>
  );
};
