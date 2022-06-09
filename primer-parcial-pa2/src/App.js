import Header from "./components/Header";
import { Listado } from "./components/Listado";
import {useState} from "react";
function App() {

  const [busqueda, setBusqueda] = useState(null);

  return (
      <>
        <Header busqueda={busqueda} setBusqueda={setBusqueda}/>
        <Listado busqueda={busqueda} />
      </>
  );
}

export default App;
