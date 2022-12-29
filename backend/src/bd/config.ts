import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "";

async function main() {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoUrl);
    console.log("connect mongo");
  } catch (error) {
    console.log(error);
  }
}

export default main;
