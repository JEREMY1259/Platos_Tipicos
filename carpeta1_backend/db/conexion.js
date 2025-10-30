import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let conexion;

try {
  conexion = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  console.log("✅ Conectado correctamente a MySQL en Railway");
} catch (err) {
  console.error("❌ Error al conectar con MySQL:", err.message);
  // Esto evita que el servidor muera
  conexion = null;
}

export { conexion };
