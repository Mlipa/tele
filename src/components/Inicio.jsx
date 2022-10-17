import Navbar from "./Navbar";
import canalesCabezera from "../assets/canalesCabezera.jpeg";
import canalesUsuario from "../assets/canalesUsuario.jpeg";
import { useState } from "react";
import Mostrar from "./Mostrar";
// import { animated, useSpring } from "react-spring";

const Inicio = () => {
  const btnSelection = ['GRILLA DE CANALES USUARIO PAYE_R', 'GANANCIA', 'GRILLA DE CANALES EN CABECERA'];
  const [miDato, setMiDato] = useState("");

  return (
    <>
      <Navbar />
      <div className="row w-100">
        <div className="col mb-3 col-12 text-center">
          <h2>Seleccione una opción</h2>
          <br />
          <div className="btn-group" role="group" aria-label="Basic example">
            {btnSelection.map((btn) => (
              <button
                type="button"
                key={btn}
                className={"btn btn-outline-warning"}
                onClick={() => setMiDato(btn)}
              >
                {btn.toLocaleUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="col text-center">
          <p>
            {miDato === "GRILLA DE CANALES USUARIO PAYE_R" && (
              <DataImagen src={canalesCabezera} />
            )}
            {miDato === "GANANCIA" && (
              <Mostrar />
            )}
            {miDato === "GRILLA DE CANALES EN CABECERA" && (
              <DataImagen src={canalesUsuario} />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

const DataImagen = ({ src }) => {
  return (
    <img src={src} alt="" srcset="" />
  );
};

export default Inicio;
