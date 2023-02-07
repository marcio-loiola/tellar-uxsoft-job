import React from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { LabelImportantSharp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

interface IPanelHeaderProps {
  label: string;
  user: string;
}

const Text = styled(Typography)(() => ({
  color: "var(--green-color-100)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  fontFamily: "Roboto",
  textDecoration: "none",
  component: "div",

  "&:hover": {
    textDecoration: "none",
  },
}));

export function PanelHeader({ label, user }: IPanelHeaderProps) {
  return (
    <Container>
      <Text sx={{ fontSize: "2rem" }}> PAINEL DE {label}</Text>

      <Text sx={{ fontSize: "1.5rem" }}>
        Olá {user}! essas são as opções disponíveis para este painel
      </Text>
    </Container>
  );
}
