import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { MainContent } from "../../components/MainContent/MainContent";
import { Footer } from "../../components/Footer/Footer";
import { UserForms } from "../../components/UserForms/UserForms";

import { styled } from "@mui/material/styles";

const RegisterContainer = styled(Container)(({ theme }) => ({
  pading: "1rem",
  margin: 0,
  display: "flex",
  flexFlow: "column",
  justifyContent: "start",
  alignItems: "normal",
  minHeight: "100vh",
  width: "100vw",
  height: "100vh",
}));

export default function UserRegister() {
  return (
    <>
      <RegisterContainer>
        {/* <Header />
        <MainContent>
          <UserForms />
        </MainContent> */}
        <Footer />
      </RegisterContainer>
    </>
  );
}
