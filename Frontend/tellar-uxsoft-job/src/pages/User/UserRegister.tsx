import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { MainContent } from "../../components/MainContent/MainContent";
import { Footer } from "../../components/Footer/Footer";
import { UserForms } from "../../components/UserForms/UserForms";
import { UsersPaper } from "../../components/UsersPaper/UsersPaper";
import { PanelHeader } from "../../components/PanelHeader/PanelHeader";

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
          <PanelHeader label="USUÁRIOS" user="José" />
          {/* CRUD - CRIAR, LER, EDITAR E DELETAR USUÁRIOS */}
          <Stack display="flex" flexDirection="row" sx={{ gap: "10rem" }}>
            <UsersPaper
              title="Cadastro"
              description="Cadastre um novo usuário para acesso prévio a plataforma"
            />
            <UsersPaper
              title="Listagem"
              description="Verifique a lista de usuários, altere dados e exclua usuários inativos"
            />
          </Stack>
        </MainContent>
        <Footer />
      </RegisterContainer>
    </>
  );
}
