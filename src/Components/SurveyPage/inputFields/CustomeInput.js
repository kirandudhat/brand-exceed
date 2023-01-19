import {
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";
import { Children, useRef, useState } from "react";
import { convertToHTML } from "draft-convert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import "./formStyle.css";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { object } from "yup";
import JoditEditor from "jodit-react";
import Rating from '@mui/material/Rating';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import DOMPurify from "dompurify";


export const formController = (name, data, formData, handleChange, handleChecked) => {
  
  switch(Object.keys(data)[0].split('_')[0]) {
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
    // case 'Date':
    //   return <Date data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'Time':
      return <Time data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'DateTime':
      return <DateTime data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    case 'NetPromoterScore':
      return <NetPromoterScore data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    // case 'BarCodeScanner':
    //   return <BarCodeScanner data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    // case 'MapCoordinates':
    //   return <MapCoordinates data={data} formData={formData}  handleChange={handleChange} handleChecked={handleChecked}/>;
    default:
     return null;
   }
}


export const TextBox = ({item, style}) => {
  return (
    <>
    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.text)}} style={{padding:25}}></div>
    </>
  );
};

export const SingleLine = ({item, formField, handleChange, empty, style }) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
       <div className="input-form">
        <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
            style={{color: `${style.body_text_color}`}}
          >
            {item.displayTitle}
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" required="required" name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)} style={{color: `${style.input_text_color}`}}/>
        </div>
        </div>
      </div>
    </>
  );
};
export const MultiLine = ({item, formField, handleChange, empty, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div className="input-form">
        <div>
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-2 col-md-2 control-label ng-binding label-form d-flex"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
          <textarea type="text" className="textarea-form" name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)} rows={4} style={{color: style.input_text_color}}/>
        </div>
        </div>
      </div>
    </>
  );
};
export const NumberInput = ({item, formField, handleChange, empty, style}) => {
  return (
    <>
    <div style={{ padding: "10px" }}>
       <div className="input-form">
        <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
          <input type="number" variant="standard" className="col-lg-7 col-md-7 form-control" name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)} style={{color: style.input_text_color}}/>
        </div>
        </div>
      </div>
    </>
  );
};
export const NumberWithCodeInput = ({item, formField, handleChange, empty, style}) => {
  return (
    <>
       <div style={{ padding: "10px" }}>
       <div className="input-form">
        <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
            style={{color: style.body_text_color}}
          >
           {item.displayTitle}
          </FormLabel>
          <input type="number" variant="standard" className="col-lg-7 col-md-7 form-control" name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)} style={{color: style.input_text_color}}/>
        </div>
        </div>
      </div>
    </>
  );
};

export const DecimalInput = ({item, formField, handleChange, empty, style}) => {

  return (
    <>
      <div style={{ padding: "10px" }}>
      <div className="input-form">
        <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
            style={{color: style.body_text_color}}
          >
           {item.displayTitle}
          </FormLabel>
          <input type="number" variant="standard" className="col-lg-7 col-md-7 form-control" name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)} style={{color: style.input_text_color}}/>
        </div>
        </div>
      </div>
    </>
  );
};
export const Email = ({item, formField, handleChange, empty, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div className="input-form">
          <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)} style={{color: style.input_text_color}}/>
          </div>
        </div>
      </div>
    </>
  );
};
export const PhoneNumber = ({item, formField, handleChange, empty, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div className="input-form">
          <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
          <input type="number" variant="standard" className="col-lg-7 col-md-7 form-control" name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)} style={{color: style.input_text_color}}/>
          </div>
        </div>
      </div>
    </>
  );
};
export const RadioButton = ({item, formField, handleChange, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
      <div className="input-form">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"  className="label-form" style={{color: style.body_text_color}}>{item.displayTitle}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)}
            >
            {item.option.split("++\n").map((i,index)=>{
            return <FormControlLabel value={i} control={<Radio style={{color: style.body_icon_color}}/>} label={i} style={{color: style.body_icon_color}}/>
            })}
            {/* <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
            </RadioGroup>
      </FormControl>
      </div>
      </div>
    </>
  );
};
export const RadioButtonWithOther = ({item, formField, handleChange, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
      <div className="input-form">
      <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" className="label-form" style={{color: style.body_text_color}}>{item.displayTitle}</FormLabel>
          <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)}
            >
            {item.option.split("++\n").map((i,index)=>{
            return <FormControlLabel value={i} control={<Radio style={{color: style.body_icon_color}}/>} label={i} style={{color: style.body_icon_color}}/>
            })}
          </RadioGroup> 
      </FormControl>
      </div>
      </div>
    </>
  );
};
export const Dropdown = ({item, formField, handleChange, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div className="input-form">
          <FormLabel
            // for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
        
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
            name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)}
          >
             {item.option.split("++\n").map((i,index)=>{
            return <option value={i} control={<Radio style={{color: style.body_icon_color}}/>} style={{color: style.body_icon_color}}>{i}</option>
            })}
          </select>
        </div>
      </div>
    </>
  );
};
export const DropdownWithOther = ({item, formField, handleChange, style}) => {
  return (
    <>
    <div style={{ padding: "10px" }}>
        <div className="input-form">
          <FormLabel
            // for="Question Media Type"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
          <select
            id="Question Media Type"
            className="col-lg-7 col-md-7 form-control"
            name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)}
          >
             {item.option.split("++\n").map((i,index)=>{
            return <option value={i} control={<Radio style={{color: style.body_icon_color}}/>} style={{color: style.body_icon_color}}>{i}</option>
            })}
          </select>
        </div>
        {/* <div className="input-form">
          <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
          >
            Phone Number
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" />
          </div>
        </div> */}
      </div>
    </>
  );
};
export const CheckBoxList = ({item, formField, handleChange, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div className="input-form">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
           {item.displayTitle}
          </FormLabel>
          <FormGroup>
          {item.option.split("++\n").map((i,index)=>{
            return  <FormControlLabel control={<Checkbox name={i} checked={formField[item.variableName] ? !!formField[item.variableName][i] : null} onChange={(e)=>handleChange(e)} style={{color: style.body_icon_color}}/>} label={i} style={{color: style.body_icon_color}}/>
            })}
          </FormGroup>
        </div>
      </div>
    </>
  );
};
export const CheckBoxListWithOther = ({item, formField, handleChange, style}) => {
  return (
    <>
       <div style={{ padding: "10px" }}>
        <div className="input-form">
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
          <FormGroup>
          {item.option.split("++\n").map((i,index)=>{
            return  <FormControlLabel control={<Checkbox name={item.variableName} checked={formField[item.variableName]} onChange={(e)=>handleChange(e)} style={{color: style.body_icon_color}}/>} label={i} style={{color: style.body_icon_color}}/>
            })}
          </FormGroup>
        </div>
        {/* <div className="input-form">
          <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
          >
            Phone Number
          </FormLabel>
          <input type="text" variant="standard" className="col-lg-7 col-md-7 form-control" name="discription" />
          </div>
        </div> */}
      </div>
    </>
  );
};
export const TwoColumnCheckBox = ({item, formField, handleChange, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
      <div className="input-form">
          <FormLabel
            id="demo-form-control-label-placement"
            className="control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
      <div className="d-flex">
      <div className="col-6 input-form">
          <FormGroup>
          {item.option.split("++\n").map((i,index)=>{
            return  <FormControlLabel control={<Checkbox name={i} checked={formField[item.variableName] ? !!formField[item.variableName][i]: null} onChange={(e)=>handleChange(e)} style={{color: style.body_icon_color}}/>} label={i} style={{color: style.body_icon_color}}/>
            })}
          </FormGroup>
        </div>
        {/* <div className="col-6 input-form">
          <FormGroup>
          {item.option.split("++\n").map((i,index)=>{
            return  <FormControlLabel control={<Checkbox name={i} checked={formField[item.variableName][i]} onChange={(e)=>handleChange(e)}/>} label={i} />
            })}
          </FormGroup>
        </div> */}
        </div>
        </div>
      </div>
    </>
  );
};

export const NumberPoint = ({item, formField, handleChange, style}) => {
  // const [value, setValue] = useState(1);

  // const handleChange = (event, newValue) => {
  //   if (typeof newValue === 'number') {
  //     setValue(newValue);
  //   }
  // };
  return (
    <>
      <div style={{ padding: "22px" }}>
      <div className="input-form">
      <FormLabel
            id="demo-form-control-label-placement"
            className="control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
      </FormLabel>
      <Slider 
      step={1} 
      marks={[{value: item.startValue,label: item.startValue},{value: item.midValue, label: item.midValue},{value: item.endValue, label: item.endValue}]} 
      min={1} 
      max={10}  
      valueLabelDisplay="auto"
      name={item.variableName}
      onChange={handleChange}  
      style={{color: style.body_icon_color}}
      />
      </div>
      </div>
      <Typography id="non-linear-slider" gutterBottom className="number-slider">
        Numbers: {formField[item.variableName]}
      </Typography>
    </>
  );
};

export const NumberPointSlider = ({item, formField, handleChange, style}) => {
  // const [value, setValue] = useState(1);

  // const handleChange = (event, newValue) => {
  //   if (typeof newValue === 'number') {
  //     setValue(newValue);
  //   }
  // };
  return (
    <>
      <div style={{ padding: "22px" }}>
      <div className="input-form">
      <FormLabel
            id="demo-form-control-label-placement"
            className="control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
      </FormLabel>
      <Slider 
      step={1} 
      marks={[{value: item.startValue,label: item.startValue},{value: item.midValue, label: item.midValue},{value: item.endValue, label: item.endValue}]} 
      min={1} 
      max={10}  
      valueLabelDisplay="auto"
      name={item.variableName}
      onChange={handleChange} 
      style={{color: style.body_icon_color}} 
      />
      </div>
      </div>
      <Typography id="non-linear-slider" gutterBottom className="number-slider">
        Numbers: {formField[item.variableName]}
      </Typography>
    </>
  );
};
export const YesNo = ({item, formField, handleChange, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div className="input-form">
          <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
          <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)}
            >
           <FormControlLabel value='yes' control={<Radio style={{color: style.body_icon_color}}/>} label="Yes" style={{color: style.body_icon_color}}/>
           <FormControlLabel value='no' control={<Radio style={{color: style.body_icon_color}}/>} label="No" style={{color: style.body_icon_color}}/>
            {/* <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
            </RadioGroup>          
            </div>
        </div>
      </div>
    </>
  );
};
export const TrueFalse = ({item, formField, handleChange, style}) => {
  return (
    <>
       <div style={{ padding: "10px" }}>
        <div className="input-form">
          <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
          <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)}
            >
           <FormControlLabel value='true' control={<Radio style={{color: style.body_icon_color}}/>} label="True" style={{color: style.body_icon_color}}/>
           <FormControlLabel value='false' control={<Radio style={{color: style.body_icon_color}}/>} label="False" style={{color: style.body_icon_color}}/>
            {/* <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
          </RadioGroup>  
            </div>
        </div>
      </div>
    </>
  );
};
export const MaleFemale = ({item, formField, handleChange, style}) => {
  return (
    <>
       <div style={{ padding: "10px" }}>
        <div className="input-form">
          <div >
          <FormLabel
            id="demo-form-control-label-placement"
            className="col-lg-3 col-md-4 control-label ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
          </FormLabel>
          <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)}
            >
           <FormControlLabel value='male' control={<Radio style={{color: style.body_icon_color}}/>} label="Male" style={{color: style.body_icon_color}}/>
           <FormControlLabel value='female' control={<Radio style={{color: style.body_icon_color}}/>} label="Female" style={{color: style.body_icon_color}}/>
          </RadioGroup>
            </div>
        </div>
      </div>
    </>
  );
};
export const Ratings = ({item, formField, handleChange,style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
      <div className="input-form">
      <div>
      <FormLabel
            id="demo-form-control-label-placement"
            className="control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
            {item.displayTitle}
      </FormLabel>
      </div>
      <Rating
        name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)}
        className="ratings" style={{color: style.body_icon_color}}
      />
      </div>
      </div>
    </>
  );
};

export const Dates = ({item, formField, handleChange, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
      <div className="input-form">
      <div>
      <FormLabel
            id="demo-form-control-label-placement"
            className="control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
           {item.displayTitle}
      </FormLabel>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic example"
        name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)}
        renderInput={(params) => <TextField {...params} style={{color: style.input_text_color}}/>}
        allowClear      
      />
    </LocalizationProvider>
    </div>
      </div>
    </>
  );
};

export const Time = ({item, formField, handleChange, style}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div className="input-form">
        <FormLabel
            id="demo-form-control-label-placement"
            className="control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
           {item.displayTitle}
      </FormLabel>
        </div>
        <div>
          <input type="time" className="timeInput" name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)} style={{color: style.input_text_color}}/>
        </div>
      </div>
    </>
  );
};
export const DateTime = ({item, formField, handleChange, style}) => {
  const [value, setValue] = useState(dayjs('2022-04-07'));
  return (
    <>
      <div style={{ padding: "10px" }}>
      <div className="input-form">
      <div >
        <FormLabel
            id="demo-form-control-label-placement"
            className="control-FormLabel ng-binding label-form"
            style={{color: style.body_text_color}}
          >
           {item.displayTitle}
      </FormLabel>
        </div>
        <div  style={{marginTop: "17px"}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} style={{color: style.input_text_color}}/>}
        label="DateTimePicker"
        name={item.variableName} value={formField[item.variableName]} onChange={(e)=>handleChange(e)}
      />
    </LocalizationProvider>
    </div>
    </div>
      </div>
    </>
  );
};
export const NetPromoterScore = ({item, formField, handleChange, style}) => {
  // const [value, setValue] = useState(1);

  // const handleChange = (event, newValue) => {
  //   if (typeof newValue === 'number') {
  //     setValue(newValue);
  //   }
  // };
  return (
    <>
      <div style={{ padding: "22px" }}>
        <div className="input-form">
          <FormLabel
                id="demo-form-control-label-placement"
                className="control-FormLabel ng-binding label-form"
                style={{color: style.body_text_color}}
          >
                {item.displayTitle}
          </FormLabel>
              <Slider 
              step={1} 
              marks={[{value: item.startValue,label: item.startValue},{value: item.midValue, label: item.midValue},{value: item.endValue, label: item.endValue}]} 
              min={11} 
              max={20}  
              valueLabelDisplay="auto"
              name={item.variableName}
              onChange={handleChange} 
              style={{color: style.body_icon_color}} 
              />
        </div>
      </div>
      <Typography id="non-linear-slider" gutterBottom className="number-slider">
        Numbers: {formField[item.variableName]}
      </Typography>
    </>
  );
};

