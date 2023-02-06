import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",

  padding: "30px 80px 31px 92px",
  zIndex: 1201,

  backgroundColor: "var(--green-color-500)",
  color: "var(--gray)",
  width: "100vw",
  height: "6vh",
  minHeight: "64px",
}));

const Text = styled(Typography)(({ theme }) => ({
  color: "var(--gray)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  fontFamily: "Roboto",
  textDecoration: "none",
  component: "div",

  "&:hover": {
    color: "var(--secondary-color)",
    textDecoration: "none",
  },
}));

export function Footer() {
  return (
    <Container>
      <Text variant="h6" sx={{ flexGrow: 1 }}>
        Projeto Tellar e UX Software
      </Text>
      <Text variant="h6" sx={{ flexGrow: 1 }}>
        Dúvidas frequentes
      </Text>
      <Text variant="h6" sx={{ flexGrow: 1 }}>
        Fale conosco
      </Text>
    </Container>
  );
}
