import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IUsersPapersProps {
  title: string;
  description: string;
}

const Board = styled(Paper)(({ theme }) => ({
  backgroundColor: " #e3e3e3",
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

const Text = styled(Typography)(({ theme }) => ({
  color: "var(--green-color-100)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  fontFamily: "Roboto",
  textDecoration: "none",
  component: "div",

  "&:hover": {
    color: "var(--secondary-color-dark)",
    textDecoration: "none",
  },
}));

export function UsersPaper({ title, description }: IUsersPapersProps) {
  return (
    <Board>
      <Stack>
        <Text variant="h3" sx={{ fontSize: "3rem" }}>
          {title}
        </Text>
        <Text variant="h3">{description}</Text>
      </Stack>
    </Board>
  );
}
