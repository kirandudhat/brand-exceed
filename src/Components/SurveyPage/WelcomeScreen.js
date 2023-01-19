import { Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import responseImg from './../../assest/img/welcome-img.png'

function WelcomeScreen({handleClick}) {
  const userDetails = useSelector((state)=>state.viewEmployeeDeatilsReducer.viewEmpData)
  return (
    <div className='main-page' style={{backgroundImage: `url(${userDetails?.welcomeImage ? `https://image.brandexceed.in/${userDetails?.welcomeImage}` :responseImg})`, backgroundSize: 'cover'}}>
      <div className='thankyou-button' >
        <Button className='thankyou' onClick={()=>handleClick('form')}>Start Here</Button>
      </div>
    </div>
  )
}

export default WelcomeScreen
