import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { LogoDev } from "@mui/icons-material";
import Icon from "@mui/material/Icon";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexFlow: "row wrap",
  padding: "1.5rem",
  margin: 0,
  backgroundColor: "var(--green-color-500)",
  color: "var(--gray)",
  width: "100vw",
  height: "15vh",
  justifyContent: "space-between",
  alignItems: "center",
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

const LogoContainer = styled(Box)({
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
});

const InfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  textAlign: "right",
  gap: "0px",
  padding: 0,
  margin: 0,
}));

export function Footer() {
  return (
    <Container component="footer">
      <LogoContainer>
        <Text variant="h6" sx={{ flexGrow: 1 }}>
          Projeto Tellar e UX Software
        </Text>
        <Icon>
          <LogoDev fontSize="large" />
        </Icon>
      </LogoContainer>
      <InfoContainer>
        <Text variant="h6" sx={{ flexGrow: 1 }}>
          Dúvidas frequentes
        </Text>
        <Text variant="h6" sx={{ flexGrow: 1 }}>
          Fale conosco
        </Text>
        <Text variant="h6" sx={{ flexGrow: 1 }}>
          Desenvolvido por Márcio Loiola - J.M.J.T -2023
        </Text>
      </InfoContainer>
    </Container>
  );
}
