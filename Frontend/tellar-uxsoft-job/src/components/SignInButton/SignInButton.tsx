import React from "react";

import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0.5rem 1rem",
  width: "2rem",
  height: "1rem",
  minHeight: "64px",
  backgroundColor: "var(--secondary-color-dark)",
  color: "var(--gray)",

  "&:hover": {
    color: "var(--secondary-color)",
    textDecoration: "none",
  },
}));

export function SignInButton() {
  return (
    <StyledButton>
      <Typography
        variant="h6"
        sx={{
          color: "var(--gray)",
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontFamily: "Roboto",
          textDecoration: "none",

          "&:hover": {
            color: "var(--secondary-color)",
            textDecoration: "none",
          },
        }}
      >
        Login
      </Typography>
    </StyledButton>
  );
}
