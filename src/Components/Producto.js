import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import {
  borrarProductoAction,
  obtenerProductoEditarAction,
} from "./actions/productoActions";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();
  const history = useHistory();

  //Confirmar si desea eliminarlo
  const confirmarEliminarProducto = (id) => {
    //Preguntar al usuario
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No se puede deshacer esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //Enviar a action
        dispatch(borrarProductoAction(id));
      }
    });
  };

  //Funcion que redigire de forma programada
  const redireccionarEdicion = (producto) => {
    dispatch(obtenerProductoEditarAction(producto));
    history.push(`/productos/editar/${producto.id}`);
  };

  return (
    <Fragment>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">$ {precio}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => redireccionarEdicion(producto)}
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </Fragment>
  );
};

export default Producto;
