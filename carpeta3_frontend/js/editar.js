const API = "https://tuapp-production.up.railway.app/api/gastronomia"; // reemplaza con tu URL real

// Función para editar un registro
async function editarGastronomia(id, nombre, pais) {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, pais }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert("✅ Registro actualizado correctamente");
    } else {
      alert("❌ Error al actualizar: " + (data.error || data.mensaje));
    }
  } catch (error) {
    console.error("Error en editar:", error);
  }
}

// Ejemplo de uso (puedes cambiarlo según tu interfaz)
document.getElementById("btnEditar").addEventListener("click", () => {
  const id = document.getElementById("idEditar").value;
  const nombre = document.getElementById("nombreEditar").value;
  const pais = document.getElementById("paisEditar").value;
  editarGastronomia(id, nombre, pais);
});
