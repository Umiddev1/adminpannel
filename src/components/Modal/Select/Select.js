import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useForm from '../../useForm/useForm';
export default function SelectAutoWidth({setCategory}) {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 345 }}>
        <InputLabel  id="demo-simple-select-autowidth-label">Departament</InputLabel>
        <Select 
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={(e) => setCategory(e.target.value)}
          autoWidth
          label="Departament"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Development">Development</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
          <MenuItem value="Accounting">Accounting</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}