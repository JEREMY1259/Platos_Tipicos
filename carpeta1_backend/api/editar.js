import { conexion } from "../db/conexion.js";

export const editar = async (req, res) => {
  try {
    const { pais, plato_tipico } = req.body;
    const { id } = req.params;

    if (!pais || !plato_tipico) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const [resultado] = await conexion.query(
      "UPDATE gastronomia SET pais = ?, plato_tipico = ? WHERE id = ?",
      [pais, plato_tipico, id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: "Registro no encontrado" });
    }

    res.json({ message: "✏️ Registro actualizado correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar registro" });
  }
};
