import React from 'react';
import { Box, TextField } from '@mui/material';
import Home from './Home';
const Employeeform = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <br></br>
        <h3>Employee Registeration</h3>
        <br></br>
        <TextField required id="outlined-required" label="Enter Your Name" />
        <br></br>
        <TextField id="outlined-required" label="Designation" />
        <br></br>
        <TextField id="outlined-required" label="Location" />
        <br></br>
        <TextField id="outlined-number" label="Salary" />
        <br></br>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Box>
  );
};

export default Employeeform;
