import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

console.log("🌍 Variables leídas por el servidor:");
console.log({
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS ? "****" : "NO DEFINIDA",
  DB_NAME: process.env.DB_NAME
});

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
  conexion = null;
}

export { conexion };
