import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Grid, Stack, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

/* const StackForms = styled(Stack)(({ theme }) => ({
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
})); */

export function UserForms() {
  return (
    /*  <StackForms> */
    <Grid
      container
      spacing={2}
      direction="column"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={6}>
        <TextField
          required
          id="outlined-required"
          label="Nome"
          defaultValue="Nome"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Sobrenome"
          defaultValue="Sobrenome"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Email"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Senha"
          defaultValue="Senha"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Confirmar Senha"
          defaultValue="Confirmar Senha"
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Cadastrar</Button>
      </Grid>
    </Grid>
    /*     </StackForms> */
  );
}
