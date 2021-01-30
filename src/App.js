import Header from "./Components/Header";
import Productos from "./Components/Productos";
import NuevoProductos from "./Components/NuevoProductos";
import EditarProducto from "./Components/EditarProducto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Importar Redux
import { Provider } from "react-redux";
import store from "./Components/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProductos} />
            <Route
              exact
              path="/productos/editar/:id"
              component={EditarProducto}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
