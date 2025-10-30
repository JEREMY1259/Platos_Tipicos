import express from "express";
import { conexion } from "../db/conexion.js";
const router = express.Router();

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, pais } = req.body;

  try {
    const [resultado] = await conexion.execute(
      "UPDATE gastronomia SET nombre=?, pais=? WHERE id=?",
      [nombre, pais, id]
    );

    if (resultado.affectedRows > 0) {
      res.json({ mensaje: "✏️ Actualizado correctamente" });
    } else {
      res.status(404).json({ error: "No se encontró el registro para actualizar" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar" });
  }
});

export default router;
