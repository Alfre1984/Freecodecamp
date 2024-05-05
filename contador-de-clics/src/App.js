import "./App.css";
import Contador from "./componentes/Contador";
import Boton from "./componentes/boton";
import { useState } from "react";
import freeCodeCampLogo from "./imagenes/Logo-freeCodeCamp.png";
function App() {
  const [numClicks, setNumClicks] = useState(0);
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp "
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
