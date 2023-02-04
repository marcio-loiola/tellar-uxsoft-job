import React from "react";
import { Box, Typography } from "@mui/material";
import { AppBar as MuiAppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: "var(--color-primary)",
  color: "var(--black)",
}));

export function Header() {
  return (
    <AppBar position="static">
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
      </Box>
    </AppBar>
  );
}
