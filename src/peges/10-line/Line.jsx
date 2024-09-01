import React from "react";
import { Box, useTheme } from "@mui/material";
import LineChart from "./LineChart";

const Line = () => {
  const theme = useTheme();
  return (
    <>
      <h2 style={{ color: theme.palette.primary.dark, padding: 0, margin: 0 }}>
        Line Chart
      </h2>

      <Box  sx={{ height: "75vh" }}>
        <LineChart/>
      </Box>

      
    </>
  );
};

export default Line;
