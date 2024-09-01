import Box from "@mui/material/Box/Box";
import LineChart from "./nivo_chart/LineChart";
import React from "react";
import { Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/DownloadOutlined";
import { transaction } from "./transactionData";

const Row2 = () => {
  const theme = useTheme();
  return (
    <>
      <Stack
        justifyContent={{ xs: "center", sm: "space-between" }}
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 2 }}
      >
        
        <Paper sx={{ height: "470px", minWidth: "400px", flexGrow: 1 }}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Revenue Generated
              <Typography color={theme.palette.text.primary}>
                $95,342,32
              </Typography>
            </Typography>
            <Button sx={{ m: 2 }}>
              <DownloadIcon />
            </Button>
          </Stack>

          <LineChart />
        </Paper>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flexGrow: 1,
            maxHeight:"470px",
            minWidth:"330px",
            overflow:"auto"
          }}
        >
          <Paper sx={{ display: "flex", flexGrow: 1, minWidth: "280px" }}>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Recent Transactions
            </Typography>
          </Paper>

          {transaction.map((item) => {
            return (
              <Paper
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  minWidth: "280px",
                  justifyContent: "space-between",
                  px: 1,
                  alignItems: "center",
                }}
              >
                <Typography
                  color={theme.palette.text.primary}
                  p={1.2}
                  variant="h6"
                >
                  {item.txId}
                  <Typography>{item.user}</Typography>
                </Typography>

                <Typography p={1.2} justifyContent={"center"}>
                  {item.date}
                </Typography>
                <Button
                  sx={{
                    height: "40px",
                    color: "white",
                    backgroundColor: theme.palette.error.main,
                  }}
                >
                  ${item.cost}
                </Button>
              </Paper>
            );
          })}

        </Box>
      </Stack>
    </>
  );
};

export default Row2;
