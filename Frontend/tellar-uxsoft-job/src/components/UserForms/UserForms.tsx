import React from "react";
import { Box, Typography, Paper, FormControl } from "@mui/material";
import { Grid, Stack, Container, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "var(--green-color-100)",
  fontSize: "1.5rem",
  fontWeight: "300",
  fontFamily: "Roboto",
  textDecoration: "none",
  component: "div",

  "&:hover": {
    backgroundColor: "var(--secondary-color)",
    textDecoration: "none",
  },
}));

export function UserForms() {
  return (
    <Stack>
      <FormControl>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={8}>
            <TextField
              required
              id="nomecompleto"
              name="nomecompleto"
              label="Nome Completo"
              fullWidth
              autoComplete="nomecompleto"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="cpf"
              name="cpf"
              label="CPF"
              fullWidth
              autoComplete="cpf"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="email"
              name="email"
              label="E-mail"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="telefone"
              name="telefone"
              label="Telefone"
              fullWidth
              autoComplete="telefone"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="cep"
              name="cep"
              label="CEP"
              fullWidth
              autoComplete="cep"
            />
          </Grid>
          <Grid item xs={1} sm={6}>
            <TextField
              required
              id="endereco"
              name="endereco"
              label="Endereço"
              fullWidth
              autoComplete="endereco"
            />
          </Grid>
          <Grid item xs={4} sm={5}>
            <TextField
              required
              select
              id="cidade"
              name="cidade"
              label="Cidade"
              fullWidth
              autoComplete="cidade"
            />
          </Grid>
          <Grid item xs={5} sm={5}>
            <TextField
              required
              id="bairro"
              name="bairro"
              label="Bairro"
              fullWidth
              autoComplete="bairro"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              required
              id="numero"
              name="numero"
              label="Número"
              fullWidth
              autoComplete="numero"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="complemento"
              name="complemento"
              label="Complemento"
              fullWidth
              autoComplete="complemento"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <StyledButton variant="contained">Cadastrar</StyledButton>
          </Grid>
        </Grid>
      </FormControl>
    </Stack>
  );
}
