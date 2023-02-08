import React from "react";

import { Box, Typography, Paper, Stack, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Person, Edit, Clear } from "@mui/icons-material";

interface IListComponentProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const userOptions = [
  {
    title: "Márcio Bruno Loiola Gomes - xxx.xxx.623-33",
    icon: <Person />,
  },
  {
    title: "Vitória Maria de Sousa Liberato - xxx.xxx.623-33",
    icon: <Person />,
  },
  {
    title: "Caio Victor de Sousa Tomás - xxx.xxx.623-33",
    icon: <Person />,
  },
  {
    title: "Maria Vaneza dos Santos Nascimento - xxx.xxx.623-33",
    icon: <Person />,
  },
];

const Item = styled(ListItem)(({ theme }) => ({
  backgroundColor: " #f2f2f2",
  color: "var(--green-color-100)",
  width: "100%",
  height: "5rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--green-color-100)",
}));

const TitleText = styled(Typography)(({ theme }) => ({
  color: "var(--green-color-100)",
  fontSize: "2.2rem",
  fontWeight: "300",
  fontFamily: "Roboto",
  textDecoration: "none",
  component: "div",
  margin: "0.8rem 0",

  "&:hover": {
    color: "var(--secondary-color-dark)",
    textDecoration: "none",
  },
}));

const ListContainer = styled(Stack)(({ theme }) => ({
  color: "var(--primary-color)",
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "64px",
  gap: "1.5rem",

  padding: "0",
  margin: "0",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  color: "var(--green-color-100)",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  padding: "0",
  margin: "0.7rem",
}));

const EditIconStyles = {
  color: "var(--green-color-100)",
  "&:hover": {
    textDecoration: "none",
    color: "#fac638",
  },
};

const PersonIconStyles = {
  color: "#ffbb00",
  "&:hover": {
    textDecoration: "none",
    color: "#ffbb00",
  },
};

const DeleteIconStyles = {
  color: "var(--green-color-100)",
  "&:hover": {
    textDecoration: "none",
    color: "var(--secondary-color-dark)",
  },
};

export function ListComponent() {
  return (
    <List>
      <TitleText variant="h4"> Lista de usuários cadastrados </TitleText>
      <ListContainer>
        {userOptions.map((userOptions) => (
          <Item>
            <ListItemIcon>
              <SvgIcon sx={PersonIconStyles}>{userOptions.icon}</SvgIcon>
            </ListItemIcon>
            <ListItemText primary={userOptions.title} />
            <IconContainer>
              <SvgIcon sx={EditIconStyles}>
                <Edit />
              </SvgIcon>
              <SvgIcon sx={DeleteIconStyles}>
                <Clear />
              </SvgIcon>
            </IconContainer>
          </Item>
        ))}
      </ListContainer>
    </List>
  );
}
