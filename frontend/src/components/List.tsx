import React from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Table, TableCell, TableRow } from "@mui/material";
import { Item } from "./Item";
import { useAppSelector, useAppDispatch } from "../redux/hooks/hooks";
import { deleteClientsByIds } from "../redux/thunks/thunksClients";

const List: React.FC<{}> = () => {
  const selectedclientsId = useAppSelector(
    (state) => state.clients.selectedClientIds
  );

  const dispatch = useAppDispatch();

  const eliminarClientes = () => {
    dispatch(deleteClientsByIds(selectedclientsId));
  };

  return (
    <TableContainer component={Paper}>
      <h2>LISTA DE CLIENTES</h2>
      <Table sx={{ minWidth: 360 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell onClick={eliminarClientes}>ELIMINAR</TableCell>
            <TableCell>NOMBRE</TableCell>
            <TableCell>DIRECCION</TableCell>
            <TableCell>DOCUMENTO</TableCell>
            <TableCell>TELEFONO</TableCell>
            <TableCell>INFO</TableCell>
          </TableRow>
        </TableHead>
        <Item />
      </Table>
    </TableContainer>
  );
};

export default List;
