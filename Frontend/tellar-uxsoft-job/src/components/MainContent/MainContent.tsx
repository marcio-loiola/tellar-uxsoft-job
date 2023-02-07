import React from "react";

import { Box, Typography, Paper, Stack, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const Board = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexFlow: "column wrap",
  backgroundColor: "var(--gray-100)",
  color: "var(--gray)",
  width: "100vw",
  height: "80vh",
  gap: "10rem",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "64px",
  padding: "0",
  margin: "0",
}));

type Props = {
  children: React.ReactNode;
};

export function MainContent({ children }: Props) {
  return (
    <Stack>
      <Board>{children}</Board>
    </Stack>
  );
}
