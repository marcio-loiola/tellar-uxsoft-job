import { Box, Typography, Paper, Stack, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Person, Edit, Clear, Person2 } from "@mui/icons-material";

const Item = styled(ListItem)(({ theme }) => ({
  backgroundColor: " #f2f2f2",
  color: "var(--green-color-100)",
  width: "100%",
  height: "5rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--green-color-100)",
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

interface ItemProps {
  item: {
    objectID: number;
    name: string;
    cpf: string;
  };
}

export function listItem(props: ItemProps) {
  return (
    <Item>
      <ListItemIcon>
        <SvgIcon sx={PersonIconStyles}>
          <Person2 />
        </SvgIcon>
      </ListItemIcon>
      <ListItemText primary={props.item.name} secondary={props.item.cpf} />
      <IconContainer>
        <SvgIcon sx={EditIconStyles}>
          <Edit />
        </SvgIcon>
        <SvgIcon sx={DeleteIconStyles}>
          <Clear />
        </SvgIcon>
      </IconContainer>
    </Item>
  );
}
