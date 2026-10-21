const inv = new Inventario();
const divDetalles = document.getElementById("detalles");

document.getElementById("btnAdd").addEventListener("click", () => {
    let codigo = document.getElementById("txtCod").value;
    let nombre = document.getElementById("txtNom").value;
    let cantidad = document.getElementById("txtCant").value;
    let costo = document.getElementById("txtCosto").value;

    if (codigo === "" || nombre === "") {
        divDetalles.innerHTML = "<p style='color:red;'><b>Error:</b> Ingresa código y nombre.</p>";
        return;
    }

    let nuevo = new Producto(codigo, nombre, cantidad, costo);
    inv.agregar(nuevo);
    divDetalles.innerHTML = "<div><h3>Producto agregado al final</h3>" + nuevo.infoHTML() + "</div>";
});

document.getElementById("btnAddInicio").addEventListener("click", () => {
    let codigo = document.getElementById("txtCod").value;
    let nombre = document.getElementById("txtNom").value;
    let cantidad = document.getElementById("txtCant").value;
    let costo = document.getElementById("txtCosto").value;

    if (codigo === "" || nombre === "") {
        divDetalles.innerHTML = "<p style='color:red;'><b>Error:</b> Ingresa código y nombre.</p>";
        return;
    }

    let nuevo = new Producto(codigo, nombre, cantidad, costo);
    inv.agregarInicio(nuevo);
    divDetalles.innerHTML = "<div><h3>Producto agregado al inicio</h3>" + nuevo.infoHTML() + "</div>";
});

document.getElementById("btnInsertar").addEventListener("click", () => {
    let codigo = document.getElementById("txtCod").value;
    let nombre = document.getElementById("txtNom").value;
    let cantidad = document.getElementById("txtCant").value;
    let costo = document.getElementById("txtCosto").value;
    let posicion = document.getElementById("txtPos").value;

    if (codigo === "" || nombre === "" || posicion === "") {
        divDetalles.innerHTML = "<p style='color:red;'><b>Error:</b> Ingresa datos completos y la posición.</p>";
        return;
    }

    let nuevo = new Producto(codigo, nombre, cantidad, costo);
    let exito = inv.insertar(nuevo, posicion);

    if (exito) {
        divDetalles.innerHTML = "<div><h3>Producto insertado en la posición " + posicion + "</h3>" + nuevo.infoHTML() + "</div>";
    } else {
        divDetalles.innerHTML = "<p style='color:red;'><b>Error:</b> Posición fuera de rango.</p>";
    }
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    let codigo = document.getElementById("txtCod").value;
    let res = inv.buscar(codigo);

    if (res !== null) {
        divDetalles.innerHTML = "<div><h3>Producto encontrado</h3>" + res.infoHTML() + "</div>";
    } else {
        divDetalles.innerHTML = "<p style='color:red;'>El código " + codigo + " no existe.</p>";
    }
});

document.getElementById("btnEliminar").addEventListener("click", () => {
    let codigo = document.getElementById("txtCod").value;
    let res = inv.eliminar(codigo);

    if (res !== null) {
        divDetalles.innerHTML = "<div><h3>Producto eliminado</h3>" + res.infoHTML() + "</div>";
    } else {
        divDetalles.innerHTML = "<p style='color:red;'>No existe el producto con código " + codigo + "</p>";
    }
});

document.getElementById("btnExtraerPrimero").addEventListener("click", () => {
    let res = inv.extraerPrimero();

    if (res !== null) {
        divDetalles.innerHTML = "<div><h3>Primer producto extraído</h3>" + res.infoHTML() + "</div>";
    } else {
        divDetalles.innerHTML = "<p style='color:red;'>El inventario está vacío.</p>";
    }
});

document.getElementById("btnListar").addEventListener("click", () => {
    let listado = inv.listar();

    if (listado === "") {
        divDetalles.innerHTML = "<p>El inventario está vacío.</p>";
    } else {
        divDetalles.innerHTML = "<h3>Listado de Productos (Lista Enlazada)</h3>" + listado;
    }
});