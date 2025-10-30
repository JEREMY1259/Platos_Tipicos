import { conexion } from "../db/conexion.js";

export const agregar = async (req, res) => {
  try {
    const { pais, plato_tipico } = req.body;
    if (!pais || !plato_tipico) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    await conexion.query(
      "INSERT INTO gastronomia (pais, plato_tipico) VALUES (?, ?)",
      [pais, plato_tipico]
    );
    res.json({ message: "✅ Registro agregado correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al agregar registro" });
  }
};
