import mongoose from "mongoose";
// import { Clientes } from "../models/clientes";

async function main() {
   
    
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      "mongodb+srv://rafCoder:coderRafa@cluster0.7jdaatw.mongodb.net/clientes?retryWrites=true&w=majority"
    );
    console.log("connect mongo");

    // console.log("CREATE");
    // const usuarioData = {
    //   nombre: "juan",
    //   documento: 877343,
    //   direccion: "jp@.coasas",
    //   telefono: 12345,
    // };

    // const usuarioNuevo = new Clientes(usuarioData);
    // console.log(usuarioNuevo);
    // await usuarioNuevo.save();
    // console.log(usuarioNuevo);
    // mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
}

export default main;
