import React, { useEffect, useMemo, useState } from 'react';
import "../Survey/survey.css";
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
import * as Yup from "yup";
import Button from "@mui/material/Button";

import apiClient from "../../services/axois/index";
import { useHistory } from 'react-router-dom';
import "./../OurEmployee/OurEmployee.css";
import { getUser } from '../../Utils/common/Common';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { imageUplode } from '../../services/imgUploadServices';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function AddThemeForm() {
  const history = useHistory();
  const params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  let loggedInUser = getUser()
  const [formField, setFormField] = useState({
    "user_id": loggedInUser.id,
    "theme_name": "",
    "layout_type": "app",
    "image": "",
    "page_width": 50,
    "colors":{
      "body_background_color": "#FFFFFF",
      "body_icon_color": "#444444",
      "body_text_color": "#444444",
      "header_background_color": "#09C1D8",
      "header_text_color": "#FFFFFF",
      "input_text_color": "#000000",
      "footer_background_color": "#09C1D8",
      "footer_text_color": "#FFFFFF",
      "footer_icon_color": "#FFFFFF",
      "group_background_color": "#09C1D8",
      "group_text_color": "#FFFFFF"
    }
  })
  useEffect(()=> {
    if(!id){
    setFormField({
      ...formField,
      colors:{
        "body_background_color": "#FFFFFF",
        "body_icon_color": "#444444",
        "body_text_color": "#444444",
        "header_background_color": "#09C1D8",
        "header_text_color": "#FFFFFF",
        "input_text_color": "#000000",
        "footer_background_color": "#09C1D8",
        "footer_text_color": "#FFFFFF",
        "footer_icon_color": "#FFFFFF",
        "group_background_color": "#09C1D8",
        "group_text_color": "#FFFFFF"
      }
    })
  }
  },[formField.layout_type])
  useEffect(()=>{
    if(id){
    apiClient
    .get(`/theme/edit/${id}`)
    .then((response) => {
      let color = JSON.parse(response.data.data.colors)
      setFormField({
        "user_id": loggedInUser.id,
        "theme_name": response.data.data.theme_name,
        "layout_type": response.data.data.layout_type,
        "image": response.data.data.image,
        "page_width": response.data.data.page_width,
        "colors":{...color}
      })
    })
}
  },[id])
  
const handleChange = async(e) => {
  let {name,value} = e.target
 if(e.target.type === 'color'){
     setFormField({
     ...formField,
     colors:{
        ...formField.colors,
        [name]: value
     }
    })
 } else if(e.target.type == 'file'){
    const formData = new FormData();
    formData.append('image',  e.target.files[0])
    let uploadImage = await imageUplode(formData)
    setFormField({
      ...formField,
      [name]: uploadImage.data.data,
    });
 }else {
     setFormField({
     ...formField,
     [name]: value
      })

 }
}

const handleSubmit = () =>{
  let checkField = Object.keys(formField).map((i) => {
    if(i == 'colors' || i == 'image'){
      return true
    }
    else if(formField[i] === "" ){
        toast.error(`${i} is required`);
      return false
    } else {
      return true
    }
  })
  let colorFields = formField.colors;
  if(formField.layout_type == "web" || formField.layout_type == "app"){
    delete colorFields.footer_background_color
    delete colorFields.footer_text_color
    delete colorFields.footer_icon_color
  } else if(formField.layout_type == "tablet"){
    delete colorFields.header_background_color
    delete colorFields.header_text_color
    delete colorFields.group_background_color
    delete colorFields.group_text_color
  }
  let checkColorField = Object.keys(colorFields).map((i) => {
    if(formField.colors[i] == ""){
      toast.error(`${i} is required`);  
      // toast.error(`Please fill the mandatory fields`);
      return false
    }
     else {
      return true
    }
  })
  let findData = checkField && checkField.length && checkField.filter((i)=> i === false)
  let findData2 = checkColorField && checkColorField.length && checkColorField.filter((i)=> i === false)
  if(findData.length <= 0 && findData2.length <= 0){
    if(id){
        let data = {...formField, 
            colors: JSON.stringify(formField.colors),
            id:id}
            if(formField.image == ""){
              delete data.image
            }
      apiClient
      .post(`/theme/update`, data)
      .then((response) => {
        if (response) {
          toast.success(response.data.msg);
          return true;
        }
        return false;
      });
    } else {
        let data = {...formField, 
            colors: JSON.stringify(formField.colors)}
            if(formField.image == ""){
              delete data.image
            }
    apiClient
    .post("/theme", data)
    .then((response) => {
      if (response) {
        toast.success(response.data.msg);
        return true;
      }
      return false;
    });
  }
    setFormField({
        "user_id": loggedInUser.id,
        "theme_name": "",
        "layout_type": "app",
        "image": "",
        "page_width": 50,
        "colors":{}
      })
      history.push(`/themes`)
  }
}


  return (
    <div className="ouremployee">
        <div className="employeeWrapper">
        <span style={{ fontWeight: "bold" }} className="surveyTitle">
        Add/Edit Theme
        </span>
        <button
            className="btncolor"
            variant="contained"
            type="submit"
            // onClick={handleClickOpen}
          >
            Back
          </button>
      </div>
    <div className="background" style={{padding: '10px 62px 0 70px'}}>
      <div className="row SurvayForm">
        <div className="col-md-6 col-lg-6">
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Layout type<span className='star'>*</span>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name='layout_type' 
              value={formField['layout_type']} 
              onChange={(e)=>handleChange(e)}
              style={{display: 'flow-root'}}
            >
            <FormControlLabel value="app" control={<Radio />} label="App" />
            <FormControlLabel value="tablet" control={<Radio />} label="Tablet" />
            <FormControlLabel value="web" control={<Radio />} label="Web" />
            {/* <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
            </RadioGroup>
                {/* <input name="username" onChange={(e) => handleChange(e)} value={formField.username}     className="col-md-7 col-sm-7 userInputform" /> */}
            </div>
          <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Theme Name<span className='star'>*</span>
            </FormLabel>
                <input name="theme_name" onChange={(e) => handleChange(e)} value={formField.theme_name} className="col-md-7 col-sm-7 userInputform" />
            </div>
            
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Header Background Color<span className='star'>*</span>
            </FormLabel>
                <input type="color"  name="header_background_color" onChange={(e) => handleChange(e)} value={formField.colors.header_background_color} className="col-md-7 col-sm-7 userInputform" />
            </div>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Header Text Color<span className='star'>*</span>
            </FormLabel>
                <input type="color" name="header_text_color" onChange={(e) => handleChange(e)} value={formField.colors.header_text_color} className="col-md-7 col-sm-7 userInputform" />
            </div>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Body Background Color<span className='star'>*</span>
            </FormLabel>
                <input type='color' name="body_background_color" onChange={(e) => handleChange(e)} value={formField.colors.body_background_color} className="col-md-7 col-sm-7 userInputform" />
            </div>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Body Text Color<span className='star'>*</span>
            </FormLabel>
                <input type="color" name="body_text_color" onChange={(e) => handleChange(e)} value={formField.colors.body_text_color} className="col-md-7 col-sm-7 userInputform" />
            </div>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Body Icon Color<span className='star'>*</span>
            </FormLabel>
                <input type="color" name="body_icon_color" onChange={(e) => handleChange(e)} value={formField.colors.body_icon_color} className="col-md-7 col-sm-7 userInputform" />
            </div>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Input Text Color<span className='star'>*</span>
            </FormLabel>
                <input type="color" name="input_text_color" onChange={(e) => handleChange(e)} value={formField.colors.input_text_color} className="col-md-7 col-sm-7 userInputform" />
            </div>

          {
            formField.layout_type == "app" || formField.layout_type == "web" ? 
            <>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Group Background Color <span className='star'>*</span>
            </FormLabel>
                <input type="color" name="group_background_color" onChange={(e) => handleChange(e)} value={formField.colors.group_background_color} className="col-md-7 col-sm-7 userInputform" />
            </div>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
             Group Text Color  <span className='star'>*</span>
            </FormLabel>
                <input type="color" name="group_text_color" onChange={(e) => handleChange(e)} value={formField.colors.group_text_color} className="col-md-7 col-sm-7 userInputform" />
            </div>
            </>
            : ""
          }
            {formField.layout_type == 'tablet' ?
            <>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Footer Background Color<span className='star'>*</span>
            </FormLabel>
                <input type="color" name="footer_background_color" onChange={(e) => handleChange(e)} value={formField.colors.footer_background_color} className="col-md-7 col-sm-7 userInputform" />
            </div>
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Footer Text Color<span className='star'>*</span>
            </FormLabel>
                <input type="color" name="footer_text_color" onChange={(e) => handleChange(e)} value={formField.colors.footer_text_color} className="col-md-7 col-sm-7 userInputform" />
            </div>
            
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Footer Icon Color<span className='star'>*</span>
            </FormLabel>
                <input type="color" name="footer_icon_color" onChange={(e) => handleChange(e)} value={formField.colors.footer_icon_color} className="col-md-7 col-sm-7 userInputform" />
            </div>
            </>
            : ""}

            <div className="d-flex formInputs" >
              <FormLabel
                id="demo-form-control-label-placement"
                className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
                style={{textAlign: 'end'}}
              >
                Form Background Image
              </FormLabel>
              {/* <input type="file" /> */}
              <Form.Control type="file" name='image' onChange={(e) => handleChange(e)} className="col-md-7 col-sm-7 userInputform" /> 
              {
               id && formField.image ? 
              <p style={{marginLeft: '4px'}}>{formField.image}</p> : ""           
              }
            </div>

            { formField.layout_type == 'web' ?
            <div className="d-flex formInputs">
            <FormLabel
              id="demo-form-control-label-placement"
              className="col-md-5 col-lg-5 control-label ng-binding survey-lbl formstyl"
              style={{textAlign: 'end'}}
            >
              Page Width<span className='star'>*</span>
            </FormLabel>
                <input type="number" name="page_width" onChange={(e) => handleChange(e)} value={formField.page_width} className="col-md-7 col-sm-7 userInputform" />
            </div>
            : ""  }
          </div>
        <div className='col-md-6 col-lg-6'>
        {formField.layout_type == "app" ? 
         <div class="smartphone">
          <div class="content">
          <div style={{backgroundColor: `${formField.colors.body_background_color}`, height: 'inherit'}}>
          <div>
            <p style={{backgroundColor: `${formField.colors.header_background_color}`, width: '100%', padding: 10, color: `${formField.colors.header_text_color}`, textAlign: 'center', marginBottom: 5}}>Survey Header</p>
         </div>
          <div style={{marginLeft: 10, marginBottom: 25}}>
            <p style={{color: `${formField.colors.body_text_color}`, fontSize: 12}}>How did you hear about us?</p>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                style={{fontSize: 9}}
              >
                <FormControlLabel value="magazine" control={<Radio style={{color: `${formField.colors.body_icon_color}`}}/>} label="Magazine" className='radiobtn' style={{color: `${formField.colors.body_icon_color}`}}/>
                <FormControlLabel value="internet" control={<Radio style={{color: `${formField.colors.body_icon_color}`}}/>} label="Internet" className='radiobtn' style={{color: `${formField.colors.body_icon_color}`}}/>
                <FormControlLabel value="news" control={<Radio style={{color: `${formField.colors.body_icon_color}`}}/>} label="News" className='radiobtn' style={{color: `${formField.colors.body_icon_color}`}}/>
                <FormControlLabel value="social" control={<Radio style={{color: `${formField.colors.body_icon_color}`}}/>} label="Social" className='radiobtn' style={{color: `${formField.colors.body_icon_color}`}}/>
              </RadioGroup>
          </div>
          <div style={{marginLeft: 10}}>
          <FormLabel
              id="demo-form-control-label-placement"
              className="control-label ng-binding formstyl"
              style={{textAlign: 'end', color: `${formField.colors.body_text_color}`, fontSize: 12}}
            >
              Theme Name
            </FormLabel>
                <input  type="text" className="col-md-9 col-sm-9 form-control" style={{color:`${formField.colors.input_text_color}`}}/>
          </div>  
          <div style={{marginLeft: 10, marginTop: '63%'}}>
              <div style={{marginTop: 10}}>
              <Button style={{backgroundColor: `${formField.colors.group_background_color}`, color: `${formField.colors.group_text_color}`, textTransform: 'capitalize', float: 'left'}}>
                Previous
              </Button>
              <Button style={{backgroundColor: `${formField.colors.group_background_color}`, color: `${formField.colors.group_text_color}`, textTransform: 'capitalize', float: 'right', marginRight: 10}}>
                Next
              </Button>
              </div>
          </div>
          </div>
          </div>
        </div> : (formField.layout_type == "tablet") ? 
        <div class="tablet">
          <div class="content">
            <div style={{backgroundColor: `${formField.colors.body_background_color}`}}>
          <div>
          <p style={{backgroundColor: `${formField.colors.header_background_color}`, width: '100%', padding: 10, color: `${formField.colors.header_text_color}`, textAlign: 'start', marginBottom: 5}}>Survey Logo<span style={{float: 'right'}}>Survey Header Text</span></p>
        </div>
        <div style={{marginLeft: 10,textAlign: 'center'}}>
          <FormLabel
              id="demo-form-control-label-placement"
              className="control-label ng-binding formstyl"
              style={{marginTop: '35px',  color: `${formField.colors.body_text_color}`, fontSize: 12}}
            >
              Theme Name
            </FormLabel>
                <input  type="text" className="col-md-9 col-sm-9 form-control" style={{margin: '35px 0 10px 90px', color:`${formField.colors.input_text_color}`}}/>
          </div> 
          <div style={{marginTop: 56}}>
          <p style={{backgroundColor: `${formField.colors.footer_background_color}`, width: '100%', padding: 10, color: `${formField.colors.footer_text_color}`, textAlign: 'center', marginBottom: 5}}>1 of 6<span style={{float: 'right', color:`${formField.colors.footer_icon_color}` }}><ArrowCircleRightIcon/></span></p>
        </div>
        </div>
          </div>
        </div>
        : 
        <div class="laptop">
        <div class="content">
          <div style={{width: '50%', border: '1px solid #dde6e9', backgroundColor: `${formField.colors.body_background_color}`}}>
        <div>
            <p style={{backgroundColor: `${formField.colors.header_background_color}`, width: '100%', padding: 10, color: `${formField.colors.header_text_color}`, textAlign: 'center', marginBottom: 5}}>Survey Header</p>
        </div>
          <div style={{marginLeft: 10}}>
            <p style={{color: `${formField.colors.body_text_color}`, fontSize: 12}}>How did you hear about us?</p>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                style={{fontSize: 9}}
              >
                <FormControlLabel value="magazine" control={<Radio style={{color: `${formField.colors.body_icon_color}`}}/>} label="Magazine" className='radiobtn' style={{color: `${formField.colors.body_icon_color}`}}/>
                <FormControlLabel value="internet" control={<Radio style={{color: `${formField.colors.body_icon_color}`}}/>} label="Internet" className='radiobtn' style={{color: `${formField.colors.body_icon_color}`}}/>
                <FormControlLabel value="news" control={<Radio style={{color: `${formField.colors.body_icon_color}`}}/>} label="News" className='radiobtn' style={{color: `${formField.colors.body_icon_color}`}}/>
                <FormControlLabel value="social" control={<Radio style={{color: `${formField.colors.body_icon_color}`}}/>} label="Social" className='radiobtn' style={{color: `${formField.colors.body_icon_color}`}}/>
              </RadioGroup>
          </div>
          <div style={{marginLeft: 10}}>
          <FormLabel
              id="demo-form-control-label-placement"
              className="control-label ng-binding formstyl"
              style={{textAlign: 'end', color: `${formField.colors.body_text_color}`, fontSize: 12}}
            >
              Theme Name
            </FormLabel>
                <input  type="text" className="col-md-9 col-sm-9 form-control" style={{color:`${formField.colors.input_text_color}`}}/>
          </div>  
          <div style={{marginLeft: 10}}>
              <div style={{marginTop: 10}}>
              <Button style={{backgroundColor: `${formField.colors.group_background_color}`, color: `${formField.colors.group_text_color}`, textTransform: 'capitalize', float: 'left'}}>
                Previous
              </Button>
              <Button style={{backgroundColor: `${formField.colors.group_background_color}`, color: `${formField.colors.group_text_color}`, textTransform: 'capitalize', float: 'right', marginRight: 10}}>
                Next
              </Button>
              </div>
          </div>
          </div>
        </div>
      </div>
      }
        </div>
          <div className="forbtn">
        <button
          className="btncolor2"
          variant="contained"
          type="submit"
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
    </div>
  )
}

export default AddThemeForm