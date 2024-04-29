import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { app } from "./fb";
import "./Home.css";

const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut().then(() => {
      window.location.href = "/login";
    }).catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
  };

  return (
    <div className="home-container">
      <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
          <Paper className="home-item" elevation={3}>
            <Typography variant="h5" component="h2" gutterBottom>
            Información Meteorológica
            </Typography>
            <Button color="primary" component={Link} to="/tiempo">Ver Tiempo</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="home-item" elevation={3}>
            <Typography variant="h5" component="h2" gutterBottom>
              Usuarios
            </Typography>
            <Button color="primary" component={Link} to="/users">Ver Usuarios</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="home-item" elevation={3}>
            <Typography variant="h5" component="h2" gutterBottom>
              Roles
            </Typography>
            <Button color="primary" component={Link} to="/roles">Ver Roles</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="home-item" elevation={3}>
            <Typography variant="h5" component="h2" gutterBottom>
              Clases
            </Typography>
            <Button color="primary" component={Link} to="/clases">Ver Clases</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="home-item" elevation={3}>
            <Typography variant="h5" component="h2" gutterBottom>
              Inasistencias
            </Typography>
            <Button color="primary" component={Link} to="/inasistencias">Ver Inasistencias</Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" onClick={cerrarSesion}>Cerrar Sesión</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
