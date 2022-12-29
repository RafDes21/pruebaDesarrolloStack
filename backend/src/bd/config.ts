import mongoose from "mongoose";

async function main() {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      "mongodb+srv://rafCoder:coderRafa@cluster0.7jdaatw.mongodb.net/clientes?retryWrites=true&w=majority"
    );
    console.log("connect mongo");
  } catch (error) {
    console.log(error);
  }
}

export default main;
