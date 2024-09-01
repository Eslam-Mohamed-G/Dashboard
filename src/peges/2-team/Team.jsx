import React from 'react'
import { DataGrid} from '@mui/x-data-grid';
import { rows } from './data';
import { useTheme } from '@mui/material';
import { Box, Typography } from "@mui/material";

//icons
import AdminIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityIcon from '@mui/icons-material/SecurityOutlined';



const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    { field: "name", headerName: "Name", width: 150, flex: 1 },
    { field: "email", headerName: "Email", width: 150, flex: 1 },
    { field: "age", headerName: "Age", width: 150, flex: 1 },
    { field: "phone", headerName: "Phone", width: 150, flex: 1 },
    {
      field: "access",
      headerName: "Access",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign:"center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              width: 100,
              mt: 1.2,
              p: "5px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.main
                  : "#3da58a",
            }}
          >
            {access === "Admin" ? <AdminIcon fontSize="small" sx={{color:"white"}} /> : access === "Manager" ? <LockIcon fontSize="small" sx={{color:"white"}}/> : <SecurityIcon fontSize="small" sx={{color:"white"}}/>}
            
            <Typography variant="body1" sx={{ fontSize: "small", color:"white", marginLeft:"2px", marginTop:"2px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <>
    <h2 style={{color:theme.palette.primary.dark, padding:0, margin:0}}>TEAM </h2>
    <p style={{padding:0, margin:"5px 0px"}}>Managing the Team Members</p>
    <Box sx={{ height: 600, width: "98%", mx: "auto", mt:3 }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
    </>
    
  );
}

export default Team