import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { MainContent } from "../../components/MainContent/MainContent";
import { Footer } from "../../components/Footer/Footer";
import { UserForms } from "../../components/UserForms/UserForms";

import { styled } from "@mui/material/styles";

const RegisterContainer = styled(Container)(({ theme }) => ({
  padding: 0,
  margin: 0,
  display: "flex",
  flexFlow: "column",
  justifyContent: "start",
  alignItems: "normal",
  minHeight: "100vh",
  width: "100vw",
  height: "100vh",

  "@media (min-width: 600px)": {
    width: "100%",
    height: "100vh",
    padding: 0,
    margin: 0,
  },
}));

export default function UserRegister() {
  return (
    <>
      <RegisterContainer>
        <Header />
        <MainContent>
          <UserForms />
        </MainContent>
        <Footer />
      </RegisterContainer>
    </>
  );
}
