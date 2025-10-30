import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { conexion } from "./db/conexion.js";

import listar from "./apis/listar.js";
import agregar from "./apis/agregar.js";
import editar from "./apis/editar.js";
import eliminar from "./apis/eliminar.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Rutas CRUD principales
app.use("/api/gastronomia", listar);
app.use("/api/gastronomia", agregar);
app.use("/api/gastronomia", editar);
app.use("/api/gastronomia", eliminar);

app.get("/", (req, res) => {
  res.json({ status: "API activa", db: conexion ? "Conectada" : "Desconectada" });
});

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
