import { Router } from "express";
import { Clientes } from "../models/clientes";

const route = Router();

route.get("/clientes", async (_req, res) => {
  const data = await Clientes.find().sort({date:-1});


  res.json(data);
});

route.get("/clientes/:id", async (req, res) => {
  const { id } = req.params;

  const data = await Clientes.findById(id);
  res.json(data);
});

route.post("/clientes", async (req, res) => {
  const cliente = req.body;
  const clienteNuevo = new Clientes(cliente);
  await clienteNuevo.save();
  res.send();
});

route.put("/clientes/:id", async (req, res) => {
  const { id } = req.params;

  const { nombre, documento, direccion, telefono } = req.body;
  await Clientes.updateOne(
    { _id: id },
    { $set: { nombre, documento, direccion, telefono } }
  );
  res.status(200).send();
});

route.delete("/clientes", async (req, res) => {
  const ids: string = req.query.ids as string;

  if (ids) {
    await Clientes.deleteMany({ _id: { $in: ids.split(",") } });
  }
  return res.status(200).send();
});

export default route;
