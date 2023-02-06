import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Grid, Stack, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export function UserForms() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
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
  );
}
