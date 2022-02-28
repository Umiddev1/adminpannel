import React from 'react'
import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import './NewEmp.css';
function NewEmp() {
  return (
    <div className='newemp'>
      <div className="newemp__wrapper">
        <div>
      <Button variant="contained" 
        style={{backgroundColor:"white", padding:'18px 10px', paddingLeft:"25px"}} 
        startIcon={<PeopleAltIcon 
        color='primary' 
        style={{fontSize:'30px'}} />}
      >
      </Button>
        </div>
        <div className="newemp__des">
          <h4 className='newemp__title'>New Employee</h4>
          <p className="newemp__text">Form design with validation</p>
        </div>
      </div>
    </div>
  )
}

export default NewEmp
