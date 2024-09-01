import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { ResponsivePie } from "@nivo/pie";

// icons
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import { clients, email, sales, traffic } from "./nivo_chart/PieChartData";

const Row1 = () => {
  const theme = useTheme();
  return (
    <>
      <Stack
        justifyContent={{ xs: "center", sm: "space-between" }}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          my: 2,
          justifyContent:"space-between"
        }}
      >

        <Paper
          sx={{
            minWidth: "280px",
            display: "flex",
            flexDirection: "row",
            flexGrow:1,
            justifyContent: "space-between",
          }}
        >
          <Stack sx={{ mx: "10px", my: 3, gap: 1 }}>
            <EmailIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography>12,361</Typography>
            <Typography>Emails Sent</Typography>
          </Stack>
          <Stack sx={{ mx: "10px", gap: 1, alignItems:"center" }}>
            <Box height={"80px"} width={"80px"}>
              <ResponsivePie
                data={email}
                margin={{ top: 50, right: 65, bottom: 40, left: 65 }}
                innerRadius={0.7}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                enableArcLabels={false}
                enableArcLinkLabels={false}
              />
            </Box>
            <Typography>+14%</Typography>
          </Stack>
        </Paper>

        <Paper
          sx={{
            minWidth: "280px",
            display: "flex",
            flexDirection: "row",
            flexGrow:1,
            justifyContent: "space-between",
          }}
        >
          <Stack sx={{ mx: "10px", my: 3, gap: 1 }}>
            <PersonAddIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography>431,225</Typography>
            <Typography>Sales obtained</Typography>
          </Stack>
          <Stack sx={{ mx: "10px", gap: 1, alignItems:"center" }}>
            <Box height={"80px"} width={"80px"}>
              <ResponsivePie
                data={sales}
                margin={{ top: 50, right: 65, bottom: 40, left: 65 }}
                innerRadius={0.7}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'category10' }}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                enableArcLabels={false}
                enableArcLinkLabels={false}
              />
            </Box>
            <Typography>+21%</Typography>
          </Stack>
        </Paper>

        <Paper
          sx={{
            minWidth: "280px",
            display: "flex",
            flexDirection: "row",
            flexGrow:1,
            justifyContent: "space-between",
          }}
        >
          <Stack sx={{ mx: "10px", my: 3, gap: 1,  }}>
            <PointOfSaleIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography>32,441</Typography>
            <Typography>New Clients</Typography>
          </Stack>
          <Stack sx={{ mx: "10px", textAlign:"right", gap: 1 }}>
            <Box height={"80px"} width={"100px"}>
              <ResponsivePie
                data={clients}
                margin={{ top: 50, right: 65, bottom: 40, left: 80 }}
                innerRadius={0.7}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'paired' }}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                
              />
            </Box>
            <Typography paddingLeft={"20px"} textAlign={"center"}>+5%</Typography>
          </Stack>
        </Paper>

        <Paper
          sx={{
            minWidth: "280px",
            display: "flex",
            flexDirection: "row",
            flexGrow:1,
            justifyContent: "space-between",
          }}
        >
          <Stack sx={{ mx: "10px", my: 3, gap: 1 }}>
            <TrafficIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography>1,325,134</Typography>
            <Typography>Traffic Received</Typography>
          </Stack>
          <Stack sx={{ mx: "5px", textAlign:"center", gap: 1 }}>
          <Box height={"80px"} width={"100px"}>
              <ResponsivePie
                data={traffic}
                margin={{ top: 50, right: 65, bottom: 40, left: 80 }}
                innerRadius={0.7}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'spectral' }}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                enableArcLabels={false}
                enableArcLinkLabels={false}
              />
            </Box>
            <Typography paddingLeft={"20px"} textAlign={"center"}>+43%</Typography>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
};

export default Row1;
