import React from "react";
import { Container, AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Aplicación de pedidos
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};
