async function eliminar(id) {
  if (!confirm("¿Seguro que deseas eliminar este registro?")) return;

  const res = await fetch(`http://localhost:3000/api/gastronomia/${id}`, {
    method: "DELETE"
  });

  const data = await res.json();
  alert(data.message || data.error);
  listar();
}
