(function () {
  "use strict";

 
  var NUMERO_WHATSAPP = "526685621836"; 
  var NOMBRE_TIENDA = "MiniExpress GS";
  var CLAVE = "miniexpress_carrito";
  

  var respaldo = "[]";
  var items = cargar();

  function leer() {
    try { return window.localStorage.getItem(CLAVE) || respaldo; } catch (e) { return respaldo; }
  }
  function escribir(texto) {
    respaldo = texto;
    try { window.localStorage.setItem(CLAVE, texto); } catch (e) { /* sin almacenamiento: queda en memoria */ }
  }
  function cargar() {
    try {
      var lista = JSON.parse(leer());
      return Array.isArray(lista) ? lista : [];
    } catch (e) { return []; }
  }
  function guardar() { escribir(JSON.stringify(items)); }

  function dinero(n) {
    return Number(n).toLocaleString("es-MX", { style: "currency", currency: "MXN" });
  }
  function cantidadTotal() {
    return items.reduce(function (s, p) { return s + p.cantidad; }, 0);
  }
  function precioTotal() {
    return items.reduce(function (s, p) { return s + p.cantidad * p.precio; }, 0);
  }

  function agregar(prod) {
    var precio = parseFloat(prod.precio);
    if (!prod.id || !prod.nombre || isNaN(precio)) { return; }
    var existente = items.filter(function (p) { return p.id === prod.id; })[0];
    if (existente) {
      existente.cantidad += 1;
    } else {
      items.push({ id: String(prod.id), nombre: String(prod.nombre), precio: precio, cantidad: 1 });
    }
    guardar();
    pintar();
  }
  function cambiar(id, delta) {
    var p = items.filter(function (x) { return x.id === id; })[0];
    if (!p) { return; }
    p.cantidad += delta;
    if (p.cantidad <= 0) { quitar(id); return; }
    guardar();
    pintar();
  }
  function quitar(id) {
    items = items.filter(function (x) { return x.id !== id; });
    guardar();
    pintar();
  }
  function vaciar() {
    items = [];
    guardar();
    pintar();
  }

  function mensajePedido() {
    var lineas = ["Hola, quiero hacer un pedido en " + NOMBRE_TIENDA + ":", ""];
    items.forEach(function (p) {
      lineas.push("- " + p.cantidad + " x " + p.nombre + " (" + dinero(p.cantidad * p.precio) + ")");
    });
    lineas.push("");
    lineas.push("Total: " + dinero(precioTotal()));
    lineas.push("");
    lineas.push("Entrega: (¡escribe aquí si es a domicilio o para recoger!)");
    return lineas.join("\n");
  }
  function urlWhatsApp(texto) {
    return "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto);
  }

  /* ===== Interfaz ===== */
  var btn, fondo, panel, lista, totalEl, enviar, resumen;

  var CSS = [
    ".btn-carrito{position:absolute;right:20px;bottom:14px;display:flex;align-items:center;gap:10px;",
    "background:#fff;color:#1F5E37;border:none;border-radius:30px;padding:10px 18px;font-size:16px;font-weight:bold;",
    "cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.25);font-family:inherit}",
    ".btn-carrito:hover{background:#f1f8f3}",
    ".btn-carrito .carrito-resumen{border-left:1px solid #9cc7a9;padding-left:10px;font-weight:normal}",
    ".btn-carrito.pulso{animation:carrito-pulso .4s}",
    "@keyframes carrito-pulso{50%{transform:scale(1.08)}}",
    ".btn-carrito-flotante{position:fixed;right:20px;top:20px;bottom:auto;z-index:900}",
    ".carrito-fondo{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:1000}",
    ".carrito-fondo[hidden]{display:none}",
    ".carrito-panel{position:fixed;top:0;right:0;height:100%;width:min(420px,100%);background:#fff;z-index:1001;",
    "display:flex;flex-direction:column;box-shadow:-4px 0 12px rgba(0,0,0,.25);transform:translateX(100%);",
    "visibility:hidden;transition:transform .25s,visibility 0s .25s;color:#333;font-size:18px}",
    ".carrito-panel.abierto{transform:none;visibility:visible;transition:transform .25s}",
    ".carrito-cabecera{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;",
    "background:#1F5E37;color:#fff}",
    ".carrito-cabecera h2{margin:0;font-size:22px}",
    ".carrito-cerrar{background:none;border:none;color:#fff;font-size:32px;line-height:1;cursor:pointer}",
    ".carrito-lista{flex:1;overflow-y:auto;padding:10px 20px}",
    ".carrito-vacio{text-align:center;color:#666;margin-top:40px}",
    ".carrito-item{border-bottom:1px solid #e0e0e0;padding:12px 0}",
    ".carrito-item-nombre{font-weight:bold}",
    ".carrito-item-precio{font-size:15px;color:#666}",
    ".carrito-item-fila{display:flex;align-items:center;justify-content:space-between;margin-top:8px}",
    ".carrito-cantidad{display:flex;align-items:center;gap:10px}",
    ".carrito-cantidad button{width:40px;height:40px;border-radius:50%;border:1px solid #2F7D4A;background:#fff;",
    "color:#1F5E37;font-size:22px;cursor:pointer}",
    ".carrito-cantidad button:hover{background:#e8f3ec}",
    ".carrito-quitar{background:none;border:none;color:#b00020;cursor:pointer;font-size:15px;text-decoration:underline}",
    ".carrito-pie{padding:16px 20px;border-top:1px solid #e0e0e0;background:#F4F3EF}",
    ".carrito-total{display:flex;justify-content:space-between;font-size:22px;margin-bottom:12px}",
    ".carrito-whatsapp{display:block;text-align:center;background:#25D366;color:#073b1a;font-weight:bold;",
    "text-decoration:none;border-radius:10px;padding:14px;font-size:18px}",
    ".carrito-whatsapp:hover{background:#1fbe5b}",
    ".carrito-whatsapp.inactivo{background:#cfd8d2;color:#6b756e;pointer-events:none}",
    ".carrito-vaciar{display:block;margin:12px auto 0;background:none;border:none;color:#666;cursor:pointer;",
    "text-decoration:underline;font-size:15px}",
    ".btn-agregar{cursor:pointer}",
    "@media (max-width:700px){.btn-carrito{position:static;margin:0 auto}.Banner{flex-wrap:wrap}}"
  ].join("");

  function crear(tag, clase, texto) {
    var el = document.createElement(tag);
    if (clase) { el.className = clase; }
    if (texto !== undefined) { el.textContent = texto; }
    return el;
  }

  function construir() {
    var estilo = document.createElement("style");
    estilo.textContent = CSS;
    document.head.appendChild(estilo);

    btn = crear("button", "btn-carrito");
    btn.type = "button";
    btn.setAttribute("aria-label", "Abrir mi pedido");
    var icono = crear("i", "fa-solid fa-cart-shopping");
    icono.setAttribute("aria-hidden", "true");
    resumen = crear("span", "carrito-resumen", "0 · " + dinero(0));
    btn.appendChild(icono);
    btn.appendChild(crear("span", "", "Mi pedido"));
    btn.appendChild(resumen);

    var banner = document.querySelector(".Banner");
    if (banner) {
      banner.appendChild(btn);
    } else {
      btn.classList.add("btn-carrito-flotante");
      document.body.appendChild(btn);
    }

    fondo = crear("div", "carrito-fondo");
    fondo.hidden = true;

    panel = crear("aside", "carrito-panel");
    panel.setAttribute("aria-label", "Mi pedido");

    var cab = crear("div", "carrito-cabecera");
    cab.appendChild(crear("h2", "", "Mi pedido"));
    var cerrar = crear("button", "carrito-cerrar", "\u00d7");
    cerrar.type = "button";
    cerrar.setAttribute("aria-label", "Cerrar mi pedido");
    cab.appendChild(cerrar);

    lista = crear("div", "carrito-lista");

    var pie = crear("div", "carrito-pie");
    var fila = crear("div", "carrito-total");
    fila.appendChild(crear("span", "", "Total"));
    totalEl = crear("strong", "", dinero(0));
    fila.appendChild(totalEl);
    enviar = crear("a", "carrito-whatsapp", "Enviar pedido por WhatsApp");
    enviar.target = "_blank";
    enviar.rel = "noopener";
    var vaciarBtn = crear("button", "carrito-vaciar", "Vaciar pedido");
    vaciarBtn.type = "button";
    pie.appendChild(fila);
    pie.appendChild(enviar);
    pie.appendChild(vaciarBtn);

    panel.appendChild(cab);
    panel.appendChild(lista);
    panel.appendChild(pie);
    document.body.appendChild(fondo);
    document.body.appendChild(panel);

    btn.addEventListener("click", abrir);
    cerrar.addEventListener("click", cerrarPanel);
    fondo.addEventListener("click", cerrarPanel);
    vaciarBtn.addEventListener("click", vaciar);
    enviar.addEventListener("click", function (e) {
      if (items.length === 0) { e.preventDefault(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { cerrarPanel(); }
    });

    document.addEventListener("click", function (e) {
      var boton = e.target.closest ? e.target.closest(".btn-agregar") : null;
      if (!boton) { return; }
      agregar({
        id: boton.getAttribute("data-id"),
        nombre: boton.getAttribute("data-nombre"),
        precio: boton.getAttribute("data-precio")
      });
      btn.classList.remove("pulso");
      void btn.offsetWidth;
      btn.classList.add("pulso");
      var original = boton.getAttribute("data-texto") || boton.textContent;
      boton.setAttribute("data-texto", original);
      boton.textContent = "Agregado";
      setTimeout(function () { boton.textContent = original; }, 900);
    });

    window.addEventListener("storage", function (e) {
      if (e.key === CLAVE) { items = cargar(); pintar(); }
    });
  }

  function abrir() {
    fondo.hidden = false;
    panel.classList.add("abierto");
  }
  function cerrarPanel() {
    if (!panel) { return; }
    fondo.hidden = true;
    panel.classList.remove("abierto");
  }

  function pintar() {
    if (!btn) { return; }
    resumen.textContent = cantidadTotal() + " \u00b7 " + dinero(precioTotal());
    totalEl.textContent = dinero(precioTotal());
    lista.textContent = "";

    if (items.length === 0) {
      lista.appendChild(crear("p", "carrito-vacio", "Tu pedido está vacío. Entra a una categoría y toca Agregar."));
      enviar.classList.add("inactivo");
      enviar.removeAttribute("href");
      return;
    }

    items.forEach(function (p) {
      var item = crear("div", "carrito-item");
      item.appendChild(crear("div", "carrito-item-nombre", p.nombre));
      item.appendChild(crear("div", "carrito-item-precio", dinero(p.precio) + " c/u"));

      var fila = crear("div", "carrito-item-fila");
      var cant = crear("div", "carrito-cantidad");
      var menos = crear("button", "", "\u2212");
      menos.type = "button";
      menos.setAttribute("aria-label", "Quitar uno de " + p.nombre);
      var num = crear("strong", "", String(p.cantidad));
      var mas = crear("button", "", "+");
      mas.type = "button";
      mas.setAttribute("aria-label", "Agregar uno más de " + p.nombre);
      cant.appendChild(menos);
      cant.appendChild(num);
      cant.appendChild(mas);

      var sub = crear("strong", "", dinero(p.cantidad * p.precio));
      fila.appendChild(cant);
      fila.appendChild(sub);
      item.appendChild(fila);

      var quitarBtn = crear("button", "carrito-quitar", "Quitar");
      quitarBtn.type = "button";
      item.appendChild(quitarBtn);

      menos.addEventListener("click", function () { cambiar(p.id, -1); });
      mas.addEventListener("click", function () { cambiar(p.id, 1); });
      quitarBtn.addEventListener("click", function () { quitar(p.id); });

      lista.appendChild(item);
    });

    enviar.classList.remove("inactivo");
    enviar.href = urlWhatsApp(mensajePedido());
  }

  function iniciar() {
    construir();
    pintar();
  }

  window.Carrito = {
    agregar: agregar,
    abrir: function () { if (panel) { abrir(); } },
    cerrar: cerrarPanel,
    urlWhatsApp: urlWhatsApp
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();