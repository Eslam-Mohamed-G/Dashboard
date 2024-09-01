import { Box, useTheme } from "@mui/material";
import React from "react";

import { PieData } from "./PieData";
import PieChart from "./PieChart";

const Pie = () => {
  const theme = useTheme();
  return (
    <>
      <h2 style={{ color: theme.palette.primary.dark, padding: 0, margin: 0 }}>
        Pie Chart
      </h2>
      <p style={{ padding: 0, margin: "5px 0px" }}>Simple Pie Chart</p>

      <Box sx={{ height: "75vh" }}>
        <PieChart/>
      </Box>
    </>
  );
};

export default Pie;
