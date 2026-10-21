class Inventario {
    constructor() {
        this.inicio = null;
    }

    agregar(producto) {
        let nuevo = new Nodo(producto);
        if (this.inicio === null) {
            this.inicio = nuevo;
        } else {
            let actual = this.inicio;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevo;
        }
    }

    agregarInicio(producto) {
        let nuevo = new Nodo(producto);
        nuevo.siguiente = this.inicio;
        this.inicio = nuevo;
    }

    insertar(producto, posicion) {
        posicion = Number(posicion);
        if (posicion <= 1) {
            this.agregarInicio(producto);
            return true;
        }

        let nuevo = new Nodo(producto);
        let actual = this.inicio;
        let i = 1;

        while (actual !== null && i < posicion - 1) {
            actual = actual.siguiente;
            i++;
        }

        if (actual !== null) {
            nuevo.siguiente = actual.siguiente;
            actual.siguiente = nuevo;
            return true;
        }

        return false;
    }

    buscar(codigo) {
        codigo = Number(codigo);
        let actual = this.inicio;

        while (actual !== null) {
            if (actual.producto.codigo === codigo) {
                return actual.producto;
            }
            actual = actual.siguiente;
        }

        return null;
    }

    eliminar(codigo) {
        codigo = Number(codigo);
        if (this.inicio === null) return null;

        if (this.inicio.producto.codigo === codigo) {
            let eliminado = this.inicio.producto;
            this.inicio = this.inicio.siguiente;
            return eliminado;
        }

        let actual = this.inicio;
        while (actual.siguiente !== null && actual.siguiente.producto.codigo !== codigo) {
            actual = actual.siguiente;
        }

        if (actual.siguiente !== null) {
            let eliminado = actual.siguiente.producto;
            actual.siguiente = actual.siguiente.siguiente;
            return eliminado;
        }

        return null;
    }

    extraerPrimero() {
        if (this.inicio === null) return null;
        let primero = this.inicio.producto;
        this.inicio = this.inicio.siguiente;
        return primero;
    }

    listar() {
        let texto = "";
        let actual = this.inicio;

        while (actual !== null) {
            texto += actual.producto.infoHTML();
            actual = actual.siguiente;
        }

        return texto;
    }
}