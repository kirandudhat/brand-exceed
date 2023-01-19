import { Button, FormLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomeInput, { CheckBoxList, CheckBoxListWithOther, Dates, DateTime, DecimalInput, Dropdown, DropdownWithOther, Email, MaleFemale, MultiLine, NetPromoterScore, NumberInput, NumberPoint, NumberPointSlider, NumberWithCodeInput, PhoneNumber, RadioButton, RadioButtonWithOther, Rating, Ratings, SingleLine, TextBox, Time, TrueFalse, TwoColumnCheckBox, YesNo } from './inputFields/CustomeInput'
import './responseForm.css'
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FieldProp,
  FormBuilder,
  validationUtils
} from "@jeremyling/react-material-ui-form-builder";
import { useForm, UseFormReturn } from "react-hook-form";
import { parseISO, isAfter } from "date-fns";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ADD_DEVELOPER_PROJECTS } from '../../redux/addProjects/types';
import moment from 'moment';
import apiClient from '../../services/axois';

function ResponseForm({pageData, startDate, handleClick}) {
  const dispatch = useDispatch();
    const [maxPage, setMaxPage] = useState(1)
    const [page, setPage] = useState(1)
    const [formField, setFormField] = useState({})
    const [style,setStyle] = useState({})
    const [empty,setEmpty] = useState(false)
    const userDetails = useSelector((state)=>state.viewEmployeeDeatilsReducer.viewEmpData)
    const userEmail = useSelector((state)=>state.authReducer)
    
    // useEffect(()=>{
    //   setFormField({...formField, date_collected: startDate})
    // },[])
    useEffect(()=>{
      apiClient
      .get(`/theme/edit/${Number(userDetails.theme)}`)
      .then((response) => {
        if(response.data.data){
        let colors = JSON.parse(response.data.data.colors)
        setStyle({...colors, page_width: response.data.data.page_width})
        // setFormField({
        //   "user_id": loggedInUser.id,
        //   "theme_name": response.data.data.theme_name,
        //   "layout_type": response.data.data.layout_type,
        //   "image": response.data.data.image,
        //   "page_width": response.data.data.page_width,
        //   "colors":JSON.parse(response.data.data.colors)
        // })
      }
      })
        if(pageData && pageData.length){
            const findMaxPage = pageData.reduce((p, c) => p.page > c.page ? p : c);
            setMaxPage(findMaxPage.page)
          //  let formDatas = page 
           let field = {} 
            for (const input of pageData) {
              if(input.field.split('_')[0] != 'TextBox'){
                field = {...field, [input.variableName]: ''}
              }
            }
            setFormField({...formField, ...field})
        }
    },[pageData])
   const handleChangeCheckbox = (e, key) => {
    let {name } = e.target

      setFormField({
        ...formField,
        [key]: {
          ...formField[key],
          [name]: e.target.checked
        }
      })
   }
  const handleChange = (e) =>{
    let {name,value} = e.target
    if(e.target.checked){

      setFormField({
        ...formField,
        [name]: value
      })
    }
    else{
      setFormField({
      ...formField,
      [name]: value
    })
  }
    setEmpty(false)
  }
  const handleNextEvent = () => {
        // if(formField){
          const findField = pageData.filter((item) => item.page === page)
          const checkField = findField.map((item) => {
            if(item.variableName && item.questionRequired  && !formField[item.variableName]){
              if(item.ValidationMessage){
                toast.error(`${item.ValidationMessage}`);
              }else{
                toast.error(`${item.variableName} is required field`);
              }
              return false
            }
            else if(item.field.includes("Email") && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formField[item.variableName])){
              toast.error(`Invalid email address`);
              return false
            }
            else if(item.field.includes("PhoneNumber") && formField[item.variableName].length != 10){
              toast.error(`Please Enter Valid Phone Number`);
              return false
            }
            else{
              return true
            }
          })
          if(checkField && checkField.length && !checkField.includes(false)){
            setPage(page + 1) 
          }
       
    

  }
  const handlePrevEvent = () => {
      setPage(page - 1) 
  }
  const handleSubmit = async() => {
        const findField = pageData.filter((item) => item.page === page)
          const checkField = findField.map((item) => {
            if(item.variableName && item.questionRequired  && !formField[item.variableName]){
              if(item.ValidationMessage){
                toast.error(`${item.ValidationMessage}`);
              }else{
                toast.error(`${item.variableName} is required field`);
              }
              return false
            }
            else if(item.field.includes("Email") && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formField[item.variableName])){
              toast.error(`Invalid email address`);
              return false
            }
            else if(item.field.includes("PhoneNumber") && formField[item.variableName].length != 10){
              toast.error(`Please Enter Valid Phone Number`);
              return false
            }
            else{
              return true
            }
          })
          let findData = checkField && checkField.length && checkField.filter((i)=> i === false)
          if(findData.length <= 0){
            let endDate = Date.now();
            let actualEndDate = moment(endDate).format('YYYY-DD-MM hh:mm:ss')
            let actualStartDate = moment(startDate).format('YYYY-DD-MM hh:mm:ss')
            const diffTime = Math.abs(endDate - startDate);
            var seconds = (diffTime / 1000).toFixed(0);
            dispatch({ type: ADD_DEVELOPER_PROJECTS, payload: {...formField, date_collected: actualStartDate,
              survey_end_time: actualEndDate , survey_id: userDetails.id, duration: seconds, upload_time: actualEndDate }});
            setFormField({})
            handleClick('thankyou')
          }
  }

  return (
    <div>
      <div className='container'>
            <div className='content'>
                <div className='content-header' style={{background: style.header_background_color, color: style.header_text_color}}>
                   <img src={userDetails?.headerImage ? `https://image.brandexceed.in/${userDetails.headerImage}` : "/static/media/mainLogo.0ad7e851.svg"} className="headerImage"/>
                   <span className='pre-election' style={{color: style.header_text_color}}>{userDetails?.headerText}</span>
                </div>
                <div style={{background :style.body_background_color, color: style.body_text_color}}>
              {
                pageData && pageData.filter((i) => i.page === page).map((item)=>{
                  if(item.field.includes("TextBox")){
                   return  <TextBox item={item} formField={formField} handleChange={handleChange} style={style}/>     
                  }
                  else if(item.field.includes("SingleLine")){
                    return <SingleLine item={item} formField={formField} handleChange={handleChange} empty={empty} style={style}/>
                  }
                  else if(item.field.includes("Email")){
                    return <Email item={item} formField={formField} handleChange={handleChange} empty={empty} style={style}/>
                  }
                  else if(item.field.includes("NumberInput")){
                    return <NumberInput item={item} formField={formField} handleChange={handleChange} empty={empty} style={style}/>
                  }
                  else if(item.field.includes("PhoneNumber")){
                    return <PhoneNumber item={item} formField={formField} handleChange={handleChange} empty={empty} style={style}/>
                  }
                  else if(item.field.includes("MultiLine")){
                    return <MultiLine item={item} formField={formField} handleChange={handleChange} empty={empty} style={style}/>
                  }
                  else if(item.field.includes("DecimalInput")){
                    return <DecimalInput item={item} formField={formField} handleChange={handleChange} empty={empty} style={style}/>
                  }
                  else if(item.field.includes("RadioButton")){
                    return <RadioButton item={item} formField={formField} handleChange={handleChange} empty={empty} style={style}/>
                  }
                  else if(item.field.includes("Rating")){
                    return <Ratings item={item} formField={formField} handleChange={handleChange} empty={empty} style={style}/>
                  }
                  else if(item.field.includes("CheckBoxList")){
                    return <CheckBoxList item={item} formField={formField} handleChange={(event) => handleChangeCheckbox(event, item.variableName)} style={style}/>
                  }
                  else if(item.field.includes("Dropdown")){
                    return <Dropdown item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("NumberWithCodeInput")){
                    return <NumberWithCodeInput item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("RadioButtonWithOther")){
                    return <RadioButtonWithOther item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("DropdownWithOther")){
                    return <DropdownWithOther item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("CheckBoxListWithOther")){
                    return <CheckBoxListWithOther item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("TwoColumnCheckBox")){
                    return <TwoColumnCheckBox item={item} formField={formField} handleChange={(event) => handleChangeCheckbox(event, item.variableName)} style={style}/>
                  }
                  else if(item.field.includes("NumberPoint")){
                    return <NumberPoint item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("NumberPointSlider")){
                    return <NumberPointSlider item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("Date")){
                    return <Dates item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("Time")){
                    return <Time item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("DateTime")){
                    return <DateTime item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("NetPromoterScore")){
                    return <NetPromoterScore item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("Yes")){
                    return <YesNo item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("True")){
                    return <TrueFalse item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                  else if(item.field.includes("Male")){
                    return <MaleFemale item={item} formField={formField} handleChange={handleChange} style={style}/>
                  }
                })
              }
                <div className='nextButton' >
                    {maxPage && maxPage > 1 ? 
                    <>
                    {page < maxPage  ?  
                    <Button className='formNext-btn' onClick={handleNextEvent} style={{backgroundColor: style?.group_background_color ? style.group_background_color : 'rgb(9, 193, 216)', color: style?.group_text_color ? style.group_text_color : 'rgb(255, 255, 255)'}}>Next</Button> : <Button className='formNext-btn' onClick={handleSubmit} style={{backgroundColor: style?.group_background_color ? style.group_background_color : 'rgb(9, 193, 216)', color: style?.group_text_color ? style.group_text_color : 'rgb(255, 255, 255)'}}>Finish</Button>}
                    {page > 1 || maxPage <= page ? 
                    <Button className='formPrevios-btn' onClick={handlePrevEvent} style={{backgroundColor: style?.group_background_color ? style.group_background_color : 'rgb(9, 193, 216)', color: style?.group_text_color ? style.group_text_color : 'rgb(255, 255, 255)'}}>Previous</Button> : ""}
                    </>
                    : <Button className='formNext-btn' onClick={handleSubmit} style={{backgroundColor: style?.group_background_color ? style.group_background_color : 'rgb(9, 193, 216)', color: style?.group_text_color ? style.group_text_color : 'rgb(255, 255, 255)'}}>Finish</Button>}
                </div>
              </div>
                <div className='footer-content'>
                    <small className='footer-text'>
                        2022 <a className='footer-text'>Techgrains Technologies Pvt. Ltd.</a>
                        All rights reserved
                    </small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResponseForm
