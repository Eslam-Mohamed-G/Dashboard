import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid/DataGrid/DataGrid';
import React from 'react'
import { rows } from './data';


// toolbar  // toolbar  // toolbar  // toolbar  
import { GridToolbar } from '@mui/x-data-grid/components/toolbar/GridToolbar';
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector
        slotProps={{ tooltip: { title: 'Change density' } }}
      />
      <Box sx={{ flexGrow: 1 }} />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: 'Export data' },
          button: { variant: 'outlined' },
        }}
      />
    </GridToolbarContainer>
  );
}
// toolbar  // toolbar  // toolbar  // toolbar  

const Contacts = () => {
  const theme = useTheme();


  const columns = [
    {field: "id",headerName: "ID", width: 30,align: "center",headerAlign: "center",},
    {field: "registrar", headerName:"Registrar ID", width:50,headerAlign:"center", flex:1,align: "center"},
    {field: "name", headerName: "Name", width: 150, flex: 1 },
    {field: "age", headerName: "Age", width: 33, flex: 1  },
    {field: "phone", headerName: "Phone", width: 150, flex: 1 },
    {field: "email", headerName: "Email", width: 150, flex: 1 },
    {field:"city", headerName: "City", width:150, flex:1, },
    {field: "Zib",headerName: "Zib Code",width: 150,flex: 1,align: "center",headerAlign:"center",}
  
  ];

  return (
    <>
    <h2 style={{color:theme.palette.primary.dark, padding:0, margin:0}}>CONTACTS</h2>
    <p style={{padding:0, margin:"5px 0px"}}>List of Contacts for Future Reference</p>

    <Box sx={{ height: 600, width: "98%", mx: "auto", mt:3 }}>
      <DataGrid
      slots={{
        toolbar: CustomToolbar,
      }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
    </>
  )
}

export default Contacts