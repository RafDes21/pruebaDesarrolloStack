import { saveClients, saveClient } from "../slices/clienteSlice";
import axios from "axios";

const apiHost = "http://localhost:8080";

export const getClients = () => {
  return async (dispatch: any) => {
    const res = await axios.get(`${apiHost}/api/clientes`);
    dispatch(saveClients(res.data));
  };
};

export const getClientById = (id: string) => {
  return async (dispatch: any) => {
    const res = await axios.get(`${apiHost}/api/clientes/${id}`);
    dispatch(saveClient(res.data));
  };
};

export const deleteClientsByIds = (ids: string[]) => {
  return async (dispatch: any) => {
    await axios.delete(`${apiHost}/api/clientes?ids=${ids.join(",")}`);
    dispatch(getClients());
  };
};

export const updateClientById = (id: string, client: any) => {
  return async () => {
    await axios.put(`${apiHost}/api/clientes/${id}`, client);
  };
};
