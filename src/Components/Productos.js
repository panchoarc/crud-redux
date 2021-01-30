import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "./actions/productoActions";
import Producto from "./Producto";

const Productos = () => {
  //Utilizar el dispatch para crear una nueva función
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);
  useEffect(() => {
    //Consultar api
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <h2 className="text-center my-5"> Listado de Productos</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}
      {cargando ? <p className="text-center">Cargando...</p> : null}
      <table className="table table-stripped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td className="text-center" colSpan="3">
                No hay productos
              </td>
            </tr>
          ) : (
            productos.map((producto) => (
              <tr key={producto.id}>
                <Producto key={producto.id} producto={producto} />
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Productos;
