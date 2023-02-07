import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { AppBar, Stack, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

import { SignInButton } from "../SignInButton/SignInButton";

const HomeBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "var(--green-color-500)",
  color: "var(--gray)",
  width: "100vw",
  height: "10vh",
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

  "&:hover": {
    color: "var(--secondary-color)",
    textDecoration: "none",
  },
}));

export function Header() {
  return (
    <HomeBar elevation={0} position="absolute">
      <Container>
        <Text variant="h6" sx={{ flexGrow: 1 }}>
          Projeto Tellar e UX Software
        </Text>
        <Stack direction="row" spacing={2}>
          {/* <Link to="/"> */}
          <Text variant="h6" sx={{ flexGrow: 1 }}>
            Login
          </Text>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <Text variant="h6" sx={{ flexGrow: 1 }}>
            Projetos
          </Text>
          {/*  </Link> */}
          {/*  <Link to="/"> */}
          <Text variant="h6" sx={{ flexGrow: 1 }}>
            Usuários
          </Text>
          {/*  </Link> */}
        </Stack>
      </Container>
    </HomeBar>
  );
}
