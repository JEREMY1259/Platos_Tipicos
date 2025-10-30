const API = "http://localhost:3000/api/gastronomia";

async function listar() {
  const res = await fetch(API);
  const data = await res.json();

  const tbody = document.querySelector("#tabla tbody");
  tbody.innerHTML = "";

  data.forEach(reg => {
    tbody.innerHTML += `
      <tr>
        <td>${reg.id}</td>
        <td>${reg.pais}</td>
        <td>${reg.plato_tipico}</td>
        <td>
          <button onclick="cargar(${reg.id}, '${reg.pais}', '${reg.plato_tipico}')">✏️</button>
          <button onclick="eliminar(${reg.id})">🗑️</button>
        </td>
      </tr>
    `;
  });
}

document.addEventListener("DOMContentLoaded", listar);
