import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { conexion } from "./db/conexion.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "API activa", db: conexion ? "Conectada" : "Desconectada" });
});

if (conexion) {
  console.log("✅ Base de datos disponible");
} else {
  console.log("⚠️ Sin conexión a la base de datos (pero el servidor sigue activo)");
}

// Evita que el servidor muera
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
