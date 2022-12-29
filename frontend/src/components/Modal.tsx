import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAppSelector, useAppDispatch } from "../redux/hooks/hooks";
import { AiFillCloseCircle } from "react-icons/ai";
import { updateStateModal } from "../redux/slices/clienteSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CompModal: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const client = useAppSelector((state) => state.clients.client);
  const stateModal = useAppSelector((state) => state.clients.stateModal);

  const closeModal = () => {
    dispatch(updateStateModal(!stateModal));
  };

  return (
    <Modal sx={style} open={stateModal}>
      <Container>
        <Typography>DATOS</Typography>
        <Typography>Nombre: {client.nombre}</Typography>
        <Typography>Dirección: {client.direccion}</Typography>
        <Typography>DNI: {client.documento}</Typography>
        <Typography>TELEFONO: {client.telefono}</Typography>
        <AiFillCloseCircle onClick={closeModal} />
      </Container>
    </Modal>
  );
};

export default CompModal;

