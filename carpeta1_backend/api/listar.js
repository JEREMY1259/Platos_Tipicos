import { conexion } from "../db/conexion.js";

export const listar = async (req, res) => {
  try {
    const [rows] = await conexion.query("SELECT * FROM gastronomia");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Error al listar los registros" });
  }
};
