import React from "react";
import GeoMap from "./GeoMap";
import { Box, useTheme } from "@mui/material";

const Geography = () => {
  const theme = useTheme();
  return (
    <>
      <h2 style={{ color: theme.palette.primary.dark, padding: 0, margin: 0 }}>
        Choropleth Chart
      </h2>
      <p style={{ padding: 0, margin: "5px 0px" }}>Simple Choropleth Chart</p>
      <Box
        sx={{
          height: "75vh",
          width: "90%",
          border: "1px solid",
          borderRadius: "5px",
        }}
      >
        <GeoMap />
      </Box>
    </>
  );
};

export default Geography;
