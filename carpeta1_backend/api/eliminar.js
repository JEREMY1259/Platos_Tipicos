import express from "express";
import { conexion } from "../db/conexion.js";
const router = express.Router();

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [resultado] = await conexion.execute("DELETE FROM gastronomia WHERE id=?", [id]);
    if (resultado.affectedRows > 0) {
      res.json({ mensaje: "🗑️ Eliminado correctamente" });
    } else {
      res.status(404).json({ error: "No se encontró el registro" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al eliminar" });
  }
});

export default router;
