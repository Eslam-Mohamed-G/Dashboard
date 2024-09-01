import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid/DataGrid/DataGrid';
import { columns, rows } from './datainvoices';




const Invoices = () => {
  const theme = useTheme();

  return (
    <>
    <h2 style={{color:theme.palette.primary.dark, padding:0, margin:0}}>INVOICES</h2>
    <p style={{padding:0, margin:"5px 0px"}}>List of Invoices Balances</p>
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>

  )
}

export default Invoices