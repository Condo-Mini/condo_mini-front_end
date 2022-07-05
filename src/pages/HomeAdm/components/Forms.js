import React from 'react';
import { FormControl, InputLabel, Input } from '@mui/material';

function Forms() {
  return(    
    <div>
    <FormControl>
    <InputLabel htmlFor="my-input">Email address</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <FormControl>
    <InputLabel htmlFor="my-input">Password</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
    </FormControl> 
    </div> 
  )    

};

export default Forms;