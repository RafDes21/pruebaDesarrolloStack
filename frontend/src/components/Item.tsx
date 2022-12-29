import React, { useEffect } from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { FiEye } from "react-icons/fi";

// uso del estado de redux (Isra)
import { useAppSelector, useAppDispatch } from "../redux/hooks/hooks";
import { getClients, getClientById } from "../redux/thunks/thunksClients";
import { toggleClientId, updateStateModal } from "../redux/slices/clienteSlice";

interface Client {
  direccion: string;
  documento: string;
  nombre: string;
  telefono: string;
  _id: string;
}

export const Item: React.FC<{}> = () => {
  // const [adId, setAdId] = useState()
  const dispatch = useAppDispatch();

  const clients: Client[] = useAppSelector((state) => state.clients.clients);
 const stateModal = useAppSelector((state) => state.clients.stateModal)

  

  //   console.log(clients);

  useEffect(() => {
    dispatch(getClients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //   const isItemSelected = () => {};

  const toggleSelectClient = (id: string, checked: boolean) => {
    dispatch(toggleClientId({ id, checked }));
  };

  const clientById = (id: string) => {
    dispatch(getClientById(id))
    dispatch(updateStateModal(!stateModal))
  };

  return (
    <TableBody>
      {clients.map((item, index) => (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell>
            <Checkbox
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                toggleSelectClient(item._id, event.target.checked);
              }}
            />
          </TableCell>
          <TableCell component="th" scope="row">
            {item.nombre}
          </TableCell>
          <TableCell>{item.direccion}</TableCell>
          <TableCell>{item.documento}</TableCell>
          <TableCell>{item.telefono}</TableCell>
          <TableCell>
            <FiEye onClick={() => clientById(item._id)} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
