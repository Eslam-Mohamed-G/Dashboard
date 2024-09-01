// import { IconButton, Toolbar, styled, Typography, InputBase, Stack, Box, useTheme } from "@mui/material";
import { InputBase, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

// icons    // icons    // icons    // icons
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));


function TopBar({ open, handleDrawerOpen, setMode }) {
  const theme = useTheme();

  return (
    <Box>
      <AppBar
        position="fixed"
        // @ts-ignore
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>

          <Box flexGrow={1} />

          <Stack direction={"row"}>
            {/*********************Dark--Light   mode **********************/}
            {/*********************Dark--Light   mode **********************/}
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
              >
                <DarkModeOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
                color="inherit"
              >
                <LightModeOutlinedIcon />
              </IconButton>
            )}

            <IconButton>
              <EmailOutlinedIcon />
            </IconButton>

            <IconButton>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton>
              <Person2OutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
