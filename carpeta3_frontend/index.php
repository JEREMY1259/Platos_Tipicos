<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>🍽️ CRUD Gastronomía</title>
  <link rel="stylesheet" href="css/estilo.css">
</head>
<body>
  <h1>🌎 Países y Platos Típicos</h1>

  <section id="formulario">
    <input type="hidden" id="id">
    <input type="text" id="pais" placeholder="País">
    <input type="text" id="plato" placeholder="Plato típico">
    <button onclick="agregar()">Agregar</button>
    <button onclick="editar()">Actualizar</button>
  </section>

  <table id="tabla">
    <thead>
      <tr>
        <th>ID</th>
        <th>País</th>
        <th>Plato Típico</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <script src="js/listar.js"></script>
  <script src="js/agregar.js"></script>
  <script src="js/editar.js"></script>
  <script src="js/eliminar.js"></script>
</body>
</html>
