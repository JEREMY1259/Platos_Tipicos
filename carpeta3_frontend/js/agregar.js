async function agregar() {
  const pais = document.getElementById("pais").value;
  const plato = document.getElementById("plato").value;

  if (!pais || !plato) return alert("Completa todos los campos");

  const res = await fetch("http://localhost:3000/api/gastronomia", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pais, plato_tipico: plato })
  });

  const data = await res.json();
  alert(data.message || data.error);
  listar();
  limpiar();
}

function limpiar() {
  document.getElementById("id").value = "";
  document.getElementById("pais").value = "";
  document.getElementById("plato").value = "";
}
