import mongoose from "mongoose";

const clienteColeccion = "clientes";

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true, max: 100 },
  documento: { type: String, required: true },
  direccion: { type: String, required: true, max: 100 },
  telefono: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Clientes = mongoose.model(clienteColeccion, clienteSchema);
