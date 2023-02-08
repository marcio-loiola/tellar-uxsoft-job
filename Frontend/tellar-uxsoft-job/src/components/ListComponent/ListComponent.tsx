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

const Item = styled(ListItem)(({ theme }) => ({
  backgroundColor: " #f2f2f2",
  color: "var(--green-color-100)",
  width: "30vw",
  height: "5rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--green-color-100)",
}));

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

const TitleText = styled(Typography)(({ theme }) => ({
  color: "var(--green-color-100)",
  fontSize: "2.2rem",
  fontWeight: "300",
  fontFamily: "Roboto",
  textDecoration: "none",
  component: "div",

  "&:hover": {
    color: "var(--secondary-color-dark)",
    textDecoration: "none",
  },
}));

const ListContainer = styled(Stack)(({ theme }) => ({
  color: "var(--secondary-color-dark)",
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "64px",
  gap: "1.2rem",
  padding: "0",
  margin: "0",
}));

export function ListComponent() {
  return (
    <List>
      <ListContainer>
        <TitleText variant="h4"> Lista de usuários cadastrados </TitleText>
        {userOptions.map((userOptions) => (
          <Item>
            <ListItemIcon>
              <SvgIcon>{userOptions.icon}</SvgIcon>
            </ListItemIcon>
            <ListItemText primary={userOptions.title} />
            <SvgIcon>
              <Edit />
            </SvgIcon>
            <SvgIcon>
              <Clear />
            </SvgIcon>
          </Item>
        ))}
      </ListContainer>
    </List>
  );
}
