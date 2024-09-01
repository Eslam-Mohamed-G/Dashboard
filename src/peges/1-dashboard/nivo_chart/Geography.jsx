import React from "react";
import GeoMap from "./GeoMap";
import { Box, useTheme } from "@mui/material";

const Geography = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "50vh",
          width: "100%",
        }}
      >
        <GeoMap />
      </Box>
    </>
  );
};

export default Geography;
