import express from "express";
import route from "./routes/clientes.routes";
import cors from "cors";
import main from "./bd/config"

const PORT = 8080;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main()

//rutas
app.use("/api", route);

app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`);
});
