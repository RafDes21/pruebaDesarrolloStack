import { Router } from "express";
import { Clientes } from "../models/clientes";

const route = Router();

route.get("/clientes", async (_req, res) => {
  await Clientes.find().then((data) => res.json(data));
  res.status(200);
});

route.get("/clientes/:id", async (req, res) => {
  const { id } = req.params;

  await Clientes.findById(id).then((data) => res.json(data));
  res.status(200);
});

route.post("/clientes", async (req, res) => {
  const cliente = req.body;
  const clienteNuevo = new Clientes(cliente);
  await clienteNuevo.save();
  res.send("cliente agregado");
});

route.put("/clientes/:id", async (req, res) => {
  const { id } = req.params;

  const { nombre, documento, direccion, telefono } = req.body;
  await Clientes.updateOne(
    { _id: id },
    { $set: { nombre, documento, direccion, telefono } }
  );
  res.send("cliente modificado");
});

route.delete("/clientes", async (req, res) => {
  const ids: string = req.query.ids as string;

  if (ids) {
    await Clientes.deleteMany({ _id: { $in: ids.split(",") } }).then((data) =>
      res.json(data)
    );
  }
});

export default route;
