import { conexion } from "./db/conexion.js";

async function seed() {
  try {
    console.log("🚀 Insertando datos en la tabla 'gastronomia'...");

    // Crear tabla si no existe
    await conexion.query(`
      CREATE TABLE IF NOT EXISTS gastronomia (
        id INT AUTO_INCREMENT PRIMARY KEY,
        pais VARCHAR(100) NOT NULL,
        plato_tipico VARCHAR(100) NOT NULL
      );
    `);

    // Insertar datos
    await conexion.query(`
      INSERT INTO gastronomia (pais, plato_tipico) VALUES
      ('Perú', 'Ceviche'),
      ('México', 'Tacos'),
      ('Italia', 'Pizza'),
      ('Japón', 'Sushi'),
      ('España', 'Paella'),
      ('Argentina', 'Asado'),
      ('Colombia', 'Bandeja paisa'),
      ('Chile', 'Empanadas'),
      ('Brasil', 'Feijoada'),
      ('Francia', 'Croissant');
    `);

    console.log("✅ Datos insertados correctamente.");
    await conexion.end();
  } catch (error) {
    console.error("❌ Error al ejecutar el seed:", error.message);
  }
}

seed();
