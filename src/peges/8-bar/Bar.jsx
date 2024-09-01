import { Box, useTheme } from "@mui/material";
import React from "react";
import BarChart from "./BarChart";


const Bar = () => {
  const theme = useTheme();
  return (
    <>
      <h2 style={{ color: theme.palette.primary.dark, padding: 0, margin: 0 }}>
        Bar Chart
      </h2>
      <p style={{ padding: 0, margin: "5px 0px" }}>
        The minimum wage in Germany, France and Spain (EUR/month)
      </p>

      <BarChart/>
    </>
  );
};

export default Bar;
