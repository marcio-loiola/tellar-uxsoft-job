import React, { useState, useEffect } from "react";

import { Box, Typography, Paper, Stack, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Person, Edit, Clear } from "@mui/icons-material";

import api from "../../services/http/index";
import { listItem as Component } from "../ListItem";

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

type ListItem = {
  name: string;
  cpf: string;
  setItem: (arg: string) => void;
};

export function ListComponent() {
  const [item, setItem] = useState<ListItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/users");
      setItem(response?.data);
    };
    fetchData();
  }, []);

  return (
    <List>
      <TitleText variant="h4"> Lista de usuários cadastrados </TitleText>
      <ListContainer>
        {item?.map((item: any) => {
          return <Component key={item.objectID} item={item} />;
        })}
      </ListContainer>
    </List>
  );
}
