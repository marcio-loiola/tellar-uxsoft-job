import React from "react";

import { Box, Typography, Paper, Stack, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const Board = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexFlow: "column wrap",
  backgroundColor: "#f6f6f6",
  color: "var(--gray)",
  width: "100vw",
  height: "fit-content",
  gap: "10rem",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  minHeight: "50rem",
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
