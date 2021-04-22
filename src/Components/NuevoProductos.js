import { crearNuevoProductoAction } from "./actions/productoActions";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { mostrarAlerta, ocultarAlertaAction } from "./actions/alertaActions";

const NuevoProductos = ({ history }) => {
  const [nombre, setnombre] = useState("");
  const [precio, setprecio] = useState(0);

  //Utilizar use Dispatch y te crea una función
  const dispatch = useDispatch();

  //Acceder al state del store

  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  // Mandar a llamar el action de productoAction
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //Validar campos

    if (nombre.trim() === "" || precio <= 0) {
      const alerta = {
        message: "Ambos campos son obligatorios",
        classes: "alert alert-danger text-center text-uppercase",
      };
      dispatch(mostrarAlerta(alerta));
      return;
    }
    dispatch(ocultarAlertaAction());

    // Validar formulario
    agregarProducto({
      nombre,
      precio,
    });
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>
            {alerta ? <p className={alerta.classes}>{alerta.message}</p> : null}
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setnombre(e.target.value)}
                />

                <label>Precio Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => setprecio(Number(e.target.value))}
                />

                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Agregar
                </button>
              </div>
            </form>

            {cargando ? <p>Cargando</p> : null}
            {error ? (
              <p className="alert alert-danger p-2 mt-4 text-center">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProductos;
