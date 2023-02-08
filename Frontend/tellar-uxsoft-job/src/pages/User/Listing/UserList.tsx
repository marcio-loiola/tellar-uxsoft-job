import React from "react";

import { Box, Typography, Paper, Stack, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { ListComponent } from "../../../components/ListComponent/ListComponent";

export function UserList() {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      sx={{
        padding: "5rem",
      }}
    >
      <ListComponent />
    </Stack>
  );
}
