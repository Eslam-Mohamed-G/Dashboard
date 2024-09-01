import { Box, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import PieChart from './nivo_chart/PieChart';
import BarChart from './nivo_chart/BarChart';
import Geography from './nivo_chart/Geography';

const Row3 = () => {
  const theme = useTheme();
  return (
    <Box justifyContent={{ xs: "center", sm: "space-between" }} sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", flexGrow:1, gap:2, my:2}}>

      <Paper className='paper' sx={{minWidth:"32%", height:"65vh", flexGrow:1}}>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Campaign
            </Typography>
        <PieChart/>
      </Paper>
      
      <Paper className='paper' sx={{minWidth:"32%", height:"65vh", flexGrow:1}}>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Sales Quanttity
            </Typography>
        <BarChart/>
      </Paper>
      
      <Paper className='paper' sx={{minWidth:"32%", height:"65vh", flexGrow:1}}>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Geography Based Traffic
            </Typography>
        <Geography/>
      </Paper>
    </Box>
  )
}

export default Row3