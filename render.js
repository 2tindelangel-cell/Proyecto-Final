const contenedor = document.getElementById('contenedor-productos');

function crearTarjeta(p) {
const alt = p.nombre.replaceAll('"', '&quot;');
return `
<div class="tarjeta-producto">
<img src="${p.imagen}" alt="${alt}">
<h3>${p.nombre}</h3>
<p class="precio">$${p.precio.toFixed(2)}</p>
<button class="boton-agregar btn-agregar"
data-id="${p.id}"
data-nombre="${alt}"
data-precio="${p.precio}">Agregar</button>
</div>`;
}

contenedor.innerHTML = productos.map(crearTarjeta).join('');