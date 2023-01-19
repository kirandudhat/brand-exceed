import React from 'react'
import Datatable from '../DataTables/Datatable'
import SaveAsIcon from '@mui/icons-material/SaveAs';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TextField } from '@mui/material';
import Box from "@mui/material/Box";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { VIEW_PROJECTS_LIST } from '../../redux/projectsListing/types';

function Responses() {
  const dispatch = useDispatch();
    const [value, setValue] = React.useState([null, null]);
    const responseData = useSelector((state) => state.ProjectsListReducer.projectsList)
    const [response,setResponse] = useState([])
    const [header,setHeader] = useState([])
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    // console.log("responseData",responseData, id)

useEffect(()=>{
  dispatch({ type: VIEW_PROJECTS_LIST, payload: id});
},[])
    
    useEffect(()=>{
      let columns = []
      let header = [{ field: "id", headerName: "Id", className:"pstyl" }]
      if(responseData.result && responseData.result.length > 0 ){
      for (const [index, data] of responseData?.result.entries()) {
        let obj = {id : (index + 1)}
        for (const item in data) {
          obj ={...obj,[responseData?.headers[item]]: typeof data[item] === 'object' ? Object.keys(data[item]).filter((i) => data[item][i]).join() :  data[item]}
        }
        columns.push(obj)
      }
      for (const data of responseData?.headers) {
        header.push({ field: data, headerName: data,width: 200, className:"pstyl" })
      }
    }
      setHeader(header)
      setResponse(columns)

    },[responseData])

   
  return (
    <div className='response-table'>
    <div>
    <div className="ouremployee">
      <div className="employeeWrapper">
        <span style={{ fontWeight: "bold" }} className="surveyTitle">
         Survey Responses : Name
        </span>
      </div>
        <div className="employeemain" style={{borderWidth:"2px 1px 2px 1px",borderStyle:"solid",borderColor:"lightgray"}}>
          {
            <Datatable
              column={header}
              tableData={response}
              // isLoading={isLoading}
            />
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Responses