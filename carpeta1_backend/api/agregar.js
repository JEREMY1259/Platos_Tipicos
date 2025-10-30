import express from "express";
import { conexion } from "../db/conexion.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { nombre, pais } = req.body;

  try {
    const [resultado] = await conexion.execute(
      "INSERT INTO gastronomia (nombre, pais) VALUES (?, ?)",
      [nombre, pais]
    );
    res.json({ mensaje: "✅ Registro agregado correctamente", id: resultado.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "❌ Error al agregar el registro" });
  }
});

export default router;
