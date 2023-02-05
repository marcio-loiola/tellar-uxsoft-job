import React from "react";
import { Box, Typography } from "@mui/material";
import { AppBar, Stack, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const HomeBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "var(--green-color-500)",
  color: "var(--gray)",
  width: "100vw",
  height: "6vh",
  justifyContent: "center",
  minHeight: "64px",
}));

const Container = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0.5rem 1rem",
}));

const Text = styled(Typography)(({ theme }) => ({
  color: "var(--gray)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  fontFamily: "Roboto",
  textDecoration: "none",
  component: "div",
}));

export function Header() {
  return (
    <HomeBar elevation={0} position="absolute">
      <Container>
        <Text variant="h6" sx={{ flexGrow: 1 }}>
          Projeto Tellar e UX Software
        </Text>
        <Stack direction="row" spacing={2}>
          <Text variant="h6" sx={{ flexGrow: 1 }}>
            Login
          </Text>
          <Text variant="h6" sx={{ flexGrow: 1 }}>
            Projetos
          </Text>
          <Text variant="h6" sx={{ flexGrow: 1 }}>
            Usuários
          </Text>
        </Stack>
      </Container>
    </HomeBar>
  );
}
