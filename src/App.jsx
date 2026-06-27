import { useState, useEffect } from "react";

import Inicio from "./components/Inicio";
import MapaEscuela from "./components/MapaEscuela";
import ModalPregunta from "./components/ModalPregunta";
import Marcador from "./components/Marcador";
import ResultadoFinal from "./components/ResultadoFinal";
import CargaMision from "./components/CargaMision";

function App() {

  const [pantalla, setPantalla] = useState("inicio");

  const [preguntaActual, setPreguntaActual] = useState(null);

  const [inspeccionadas, setInspeccionadas] = useState([]);

  const [puntos, setPuntos] = useState(0);

  const [tiempo, setTiempo] = useState(180);

  const [mensaje, setMensaje] = useState("");

  const [mostrarExplicacion, setMostrarExplicacion] =
    useState(false);

  useEffect(() => {

  if (pantalla !== "mapa") return;

  const intervalo = setInterval(() => {

    setTiempo((prev) => {

      if (prev <= 1) {

        clearInterval(intervalo);

        setPantalla("final");

        return 0;
      }

      return prev - 1;
    });

  }, 1000);

  return () => clearInterval(intervalo);

}, [pantalla]);

  const abrirPregunta = (pregunta) => {

    if (inspeccionadas.includes(pregunta.id)) {
      return;
    }

    setPreguntaActual(pregunta);

    setMensaje("");

    setMostrarExplicacion(false);
  };

  const responder = (opcion) => {

    if (opcion === preguntaActual.correcta) {

      setPuntos((prev) => prev + 10);

      setMensaje("✅ Respuesta Correcta");

    } else {

      setMensaje(
        `❌ Incorrecto. La respuesta correcta es: ${preguntaActual.correcta}`
      );
    }

    setMostrarExplicacion(true);

    setInspeccionadas((prev) => [
      ...prev,
      preguntaActual.id
    ]);
  };

  const cerrarPregunta = () => {

    setPreguntaActual(null);

    if (inspeccionadas.length === 10) {

      setPantalla("final");
    }
  };

  const reiniciar = () => {

    setPantalla("inicio");

    setPreguntaActual(null);

    setInspeccionadas([]);

    setPuntos(0);

    setTiempo(180);

    setMensaje("");

    setMostrarExplicacion(false);
  };

  return (
    <>
      {pantalla === "inicio" && (
  <Inicio
    iniciarJuego={() => setPantalla("carga")}
        />
      )}

      {pantalla === "carga" && (
        <CargaMision
          finalizar={() => setPantalla("mapa")}
        />
      )}

      {pantalla === "mapa" && (
        <>
          <Marcador
            puntos={puntos}
            inspeccionadas={inspeccionadas.length}
            tiempo={tiempo}
          />

          <MapaEscuela
            abrirPregunta={abrirPregunta}
            inspeccionadas={inspeccionadas}
          />

          <ModalPregunta
            pregunta={preguntaActual}
            responder={responder}
            mensaje={mensaje}
            mostrarExplicacion={mostrarExplicacion}
            cerrarPregunta={cerrarPregunta}
        />
        </>
      )}

      {pantalla === "final" && (
        <ResultadoFinal
          puntos={puntos}
          reiniciar={reiniciar}
        />
      )}
    </>
  );
}

export default App;