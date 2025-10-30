function cargar(id, pais, plato) {
  document.getElementById("id").value = id;
  document.getElementById("pais").value = pais;
  document.getElementById("plato").value = plato;
}

async function editar() {
  const id = document.getElementById("id").value;
  const pais = document.getElementById("pais").value;
  const plato = document.getElementById("plato").value;

  if (!id) return alert("Selecciona un registro para editar");

  const res = await fetch(`http://localhost:3000/api/gastronomia/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pais, plato_tipico: plato })
  });

  const data = await res.json();
  alert(data.message || data.error);
  listar();
  limpiar();
}
