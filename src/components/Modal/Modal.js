import React, { useContext, useState } from "react";
import './Modal.css';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import RowRadioButtonsGroup from "./RadioButton/RadioButton";
import SelectAutoWidth from "./Select/Select";
import Button from '@mui/material/Button';
import { BigContext } from "../../context/context";
import { rows } from "../BigData/BigData";
import { createData } from "../BigData/BigData";
import useForm from "../useForm/useForm";
function Modal() {
  const {value} = useContext(BigContext)
  const {isBool, handleBooll} = value;
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [city, setCity] = useState('')
  const [category, setCategory] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    rows.push(createData(name,email,mobile,category))
    console.log(rows);
  }
  return (
    <div className="modal__bg">
      <div className="modal">
        <div className="modal__head">
          <h2 className="modal__title">Employee Form</h2>
          <a className="modal__close" href="#">
          <ClearIcon onClick={handleBooll} color="error" />
          </a>
        </div>
        <form onSubmit={handleSubmit} className="modal__inps">
          <div className="modal__inps-left">
            <div>
            <TextField 
            onChange={e => setName(e.target.value)} 
            className="inps" 
            type="text" 
            id="outlined-basic"
            name="name" 
            label="Full Name" 
            variant="outlined" 
            /></div>
            <div>
            <TextField 
            onChange={e => setEmail(e.target.value)} 
            className="inps" 
            type="email" 
            name="email"
            id="outlined-basic" 
            label="Email" 
            variant="outlined"/>
            </div>
            <div>
              <TextField 
            onChange={e => setMobile(e.target.value)}
            className="inps" 
            type="number" 
            id="outlined-basic"
            name="mobile" 
            label="Mobile" 
            variant="outlined"/>
            </div>
            <div>
              <TextField onChange={e => setCity(e.target.value)} 
              className="inps" 
              type="text"
              id="outlined-basic"
              name="city"
              label="City" 
              variant="outlined" />
            </div>
          </div>  
          <div className="modal__inps-right">
              <RowRadioButtonsGroup />
              <SelectAutoWidth setCategory={setCategory} />
              <Button type="submit" style={{marginLeft:'10px', marginTop:'40px'}} color="primary" variant="contained">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Modal;