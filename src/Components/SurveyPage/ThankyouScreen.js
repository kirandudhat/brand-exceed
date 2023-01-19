import { Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import responseImg from './../../assest/img/thankyouImage.png'

function ThankyouScreen({handleClick}) {
  const userDetails = useSelector((state)=>state.viewEmployeeDeatilsReducer.viewEmpData)
  return (
    <div className='main-page' style={{backgroundImage: `url(${userDetails?.thankyouImage ? `https://image.brandexceed.in/${userDetails?.thankyouImage}` :responseImg})`, backgroundSize: 'cover'}}>
      <div className='thankyou-button' >
        <Button className='thankyou' onClick={()=>handleClick('welcome')}>Start Again</Button>
      </div>
    </div>
  )
}

export default ThankyouScreen
