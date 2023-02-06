import React from "react";

import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Board = styled(Paper)(({ theme }) => ({
  backgroundColor: "var(--gray)",
  color: "var(--gray)",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  minHeight: "64px",
}));

type Props = {
  children: React.ReactNode;
};

export function MainContent({ children }: Props) {
  return <Board>{children}</Board>;
}
