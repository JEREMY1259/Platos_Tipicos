import { conexion } from "./db/conexion.js";

async function probarConexion() {
  try {
    const [rows] = await conexion.query("SELECT NOW() AS fecha_actual");
    console.log("✅ Conexión exitosa con Railway MySQL");
    console.log("Fecha actual:", rows[0].fecha_actual);
  } catch (error) {
    console.error("❌ Error de conexión:", error.message);
  }
}

probarConexion();
