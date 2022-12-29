import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { updateClientById } from "../redux/thunks/thunksClients";
import { useAppDispatch } from "../redux/hooks/hooks";

type DatosType = {
  nombre: string;
  documento: string;
  direccion: string;
  telefono: string;
};

const Formul: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  
  const [datos, setDatos] = React.useState<DatosType>({
    nombre: "",
    documento: "",
    direccion: "",
    telefono: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };
  const handeSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (id) {
      dispatch(updateClientById(id, datos));
      navigate("/");

      console.log("actualizado");
    } else {
      axios({
        method: "post",
        url: "http://localhost:8080/api/clientes",
        data: {
          nombre: datos.nombre,
          documento: datos.documento,
          direccion: datos.direccion,
          telefono: datos.telefono,
        },
      });
      toast.success("Cliente Agregado!");
      navigate("/");
    }
  };

  const itemClient = async (id: string) => {
    const url = `http://localhost:8080/api/clientes/${id}`;
    const res = await axios.get(url);
    console.log(res.data);
    const { nombre, documento, direccion, telefono } = res.data;
    setDatos({
      nombre,
      documento,
      direccion,
      telefono,
    });
  };

  useEffect(() => {
    if (id) {
      itemClient(id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="sm" sx={{ marginTop: "90px" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeigth: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "10px", borderRadius: "8px" }}>
            {id ? (
              <Typography sx={{ mt: 1, mb: 1 }}>Datos Editados</Typography>
            ) : (
              <Typography sx={{ mt: 1, mb: 1 }}>Ingrese los datos</Typography>
            )}
            <Box component="form" onSubmit={handeSubmit}>
              <TextField
                fullWidth
                name="nombre"
                label="Nombre"
                value={datos.nombre}
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                name="documento"
                value={datos.documento}
                label="DNI"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                name="direccion"
                label="Dirección"
                sx={{ mt: 2, mb: 1.5 }}
                value={datos.direccion}
                required
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                name="telefono"
                label="Teléfono"
                sx={{ mt: 2, mb: 1.5 }}
                required
                value={datos.telefono}
                onChange={handleInputChange}
              />
              {id ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                >
                  Actualizar
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                >
                  Agregar Cliente
                </Button>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Formul;
