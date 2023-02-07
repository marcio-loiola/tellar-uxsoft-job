import React from "react";
import { Box, Typography, Paper, Stack, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IUsersPapersProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Board = styled(Paper)(({ theme }) => ({
  backgroundColor: " #f2f2f2",
  color: "var(--secondary-color-dark)",
  width: "20rem",
  height: "15rem",
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "64px",
  padding: "0",
  margin: "0",
}));

const TitleText = styled(Typography)(({ theme }) => ({
  color: "var(--green-color-100)",
  fontSize: "2.2rem",
  fontWeight: "500",
  fontFamily: "Roboto",
  textDecoration: "none",
  component: "div",

  "&:hover": {
    color: "var(--secondary-color-dark)",
    textDecoration: "none",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  color: "var(--green-color-100)",
  fontSize: "1.5rem",
  fontWeight: "300",
  fontFamily: "Roboto",
  textDecoration: "none",
  component: "div",

  "&:hover": {
    textDecoration: "none",
  },
}));

const Icon = styled(SvgIcon)(({ theme }) => ({
  color: "var(--secondary-color-dark)",
  fontSize: "3rem",
  fontWeight: "bold",
  fontFamily: "Roboto",
  textDecoration: "none",
  component: "div",
}));

export function UsersPaper({ icon, title, description }: IUsersPapersProps) {
  return (
    <Board>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Icon>{icon}</Icon>
        <TitleText variant="h3">{title}</TitleText>
        <Text variant="h3">{description}</Text>
      </Stack>
    </Board>
  );
}
