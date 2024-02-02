import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";

function Appbar() {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#333" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            Dashboard Panel
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Appbar;
