import React from "react";

import { UserForms } from "../../../components/UserForms/UserForms";
import { PanelHeader } from "../../../components/PanelHeader/PanelHeader";

import { Box, Typography, Paper, Stack, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export function UserRegister() {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      sx={{
        padding: "5rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          backgroundColor: "#f1f1f1",
          borderRadius: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Text sx={{ fontSize: "1.5rem", fontWeight: 300 }}>
          {" "}
          Cadastro de usuários{" "}
        </Text>

        <Text sx={{ fontSize: "1rem", fontWeight: 300 }}>
          {" "}
          Insira os dados abaixo para cadastrar um novo usuário
        </Text>
      </Container>
      <UserForms />
    </Stack>
  );
}
