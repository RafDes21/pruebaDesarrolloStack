import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/system";
import React from "react";
import {Link} from "react-router-dom"
import AutoComplete from "../components/AutoComplete";

const Navbar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
            <Container>
                <Grid container  justifyContent="space-between">
                    <Grid item><Link to={'/'}>Home</Link></Grid>
                    <Grid><AutoComplete/></Grid>
                    <Grid item><Link to={'/agregar'}>Agregar Cliente</Link></Grid>
                </Grid>
            </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
