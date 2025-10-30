import express from "express";
import { conexion } from "../db/conexion.js";

const router = express.Router();

// 🔹 Ruta GET para listar todos los registros
router.get("/", async (req, res) => {
  try {
    const [filas] = await conexion.execute("SELECT * FROM gastronomia");
    res.json(filas);
  } catch (error) {
    console.error("❌ Error al listar registros:", error);
    res.status(500).json({ error: "Error al listar los registros" });
  }
});

// 🔹 Exportar correctamente para que server.js lo pueda importar
export default router;
