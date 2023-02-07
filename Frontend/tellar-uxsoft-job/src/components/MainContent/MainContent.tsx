import React from "react";

import { Box, Typography, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const Board = styled(Paper)(({ theme }) => ({
  backgroundColor: "var(--gray)",
  color: "var(--gray)",
  width: "100vw",
  height: "80vh",
  display: "flex",
  flexFlow: "column wrap",
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
