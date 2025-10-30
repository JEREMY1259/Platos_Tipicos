const API = "https://tuapp-production.up.railway.app/api/gastronomia"; // reemplaza con tu URL real

// Función para eliminar un registro
async function eliminarGastronomia(id) {
  if (!confirm("¿Seguro que deseas eliminar este registro?")) return;

  try {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert("🗑️ Registro eliminado correctamente");
      location.reload(); // recarga la lista
    } else {
      alert("❌ Error al eliminar: " + (data.error || data.mensaje));
    }
  } catch (error) {
    console.error("Error al eliminar:", error);
  }
}
