import { Box, Button, Stack, TextField, useTheme } from '@mui/material'
import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const data = [
    {value: 'Admin',  label: 'Admin'},   
    {value: 'Manger', label: 'Manger'},
    {value: 'User',   label: 'User'},
  ];
const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Form = () => {
  const theme = useTheme();
  const {register, handleSubmit, watch, formState: { errors },} = useForm();
  

  //snackbar   //snackbar   //snackbar   //snackbar
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {setOpen(true);};
  const submit = () => {
    console.log("done");

    handleClick()
  };
  
  return (
    <>
      <h2 style={{ color: theme.palette.primary.dark, padding: 0, margin: 0 }}>
        CREATE USER
      </h2>
      <p style={{ padding: 0, margin: "5px 0px" }}>Create a New User Profile</p>
      
      <Box
        onSubmit={handleSubmit(submit)}
        component="form"
        sx={{
          width: "98%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={ Boolean(errors.firstName)? "This field is required" : null}
            {...register("firstName", { required: true, minLength: 2 })}
            label="First Name"
            variant="filled"
            sx={{ flex: 1 }}
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={ Boolean(errors.firstName)? "This field is required" : null}
            {...register("lastName", { required: true, minLength: 2 })}
            label="Last Name"
            variant="filled"
            sx={{ flex: 1 }}
          />
        </Stack>
        <TextField
          error={Boolean(errors.email)}
          helperText={ Boolean(errors.email)? "This field is required" : null}
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />
        <TextField
          
          error={Boolean(errors.number)}
          helperText={ Boolean(errors.number)? "This field is required" : null}
          {...register("number", { required: true, pattern: /(\d{3})(\d{3})(\d{4})/ })}
          label="Contact Number"
          variant="filled"
        />
        <TextField  label="Address1" variant="filled"/>
        <TextField  label="Address2" variant="filled"/>
        
        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            onClick={handleSubmit(submit)}
            variant="contained"
            sx={{ width: "180px", fontWeight: "bold", color: "white" }}
          >
            Create New User
          </Button>

        </Box>
        <Snackbar anchorOrigin={{vertical:"top", horizontal:"right"}} open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          // variant="filled"
          sx={{ width: '100%' }}
        >
          Account created successfully
        </Alert>
      </Snackbar>
      </Box>
    </>
  );
}

export default Form;