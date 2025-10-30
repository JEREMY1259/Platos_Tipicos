import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { conexion } from "./db/conexion.js";

import listar from "./api/listar.js";
import agregar from "./api/agregar.js";
import editar from "./api/editar.js";
import eliminar from "./api/eliminar.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// rutas CRUD
app.use("/api/gastronomia", listar);
app.use("/api/gastronomia", agregar);
app.use("/api/gastronomia", editar);
app.use("/api/gastronomia", eliminar);

// ruta raíz
app.get("/", (req, res) => {
  res.json({ status: "API activa", db: conexion ? "Conectada" : "Desconectada" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
