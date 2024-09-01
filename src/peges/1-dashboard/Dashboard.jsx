import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import DownloadIcon from "@mui/icons-material/DownloadOutlined";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <>
      <h2 style={{ color: theme.palette.primary.dark, padding: 0, margin: 0 }}>
        DASHBOARD
      </h2>
      <p style={{ padding: 0, margin: "5px 0px" }}>Welcome to your dashboard</p>

      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" color="primary">
          <DownloadIcon />
          Download Reports
        </Button>
      </Box>

      <Box sx={{ gap: 2 }}>
        <Row1 />
        <Row2 />
        <Row3 />
      </Box>
    </>
  );
};

export default Dashboard;
