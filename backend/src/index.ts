import "../envConfig";
import express from "express";
import cors from "cors";
import route from "./routes/clientes.routes";
import dbConfig from "./bd/config";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConfig();

app.use("/api", route);

app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`);
});
