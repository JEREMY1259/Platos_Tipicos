import { conexion } from "../db/conexion.js";

export const eliminar = async (req, res) => {
  try {
    const { id } = req.params;

    const [resultado] = await conexion.query(
      "DELETE FROM gastronomia WHERE id = ?",
      [id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: "Registro no encontrado" });
    }

    res.json({ message: "🗑️ Registro eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar registro" });
  }
};
