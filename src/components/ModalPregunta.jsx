function ModalPregunta({
  pregunta,
  responder,
  mensaje,
  mostrarExplicacion,
  cerrarPregunta
}) {

  if (!pregunta) return null;

  const respondida = mensaje !== "";

  return (
    <div className="modal">

      <div className="modal-contenido">

         <img
            src={pregunta.imagen}
            alt={pregunta.lugar}
            className="imagen-modal"
        />

        <h2>{pregunta.lugar}</h2>

        <p>{pregunta.descripcion}</p>

        <h3>{pregunta.pregunta}</h3>

        {pregunta.opciones.map((opcion) => (
          <button
            key={opcion}
            className="btn-opcion"
            disabled={respondida}
            onClick={() => responder(opcion)}
          >
            {opcion}
          </button>
        ))}

        {mensaje && (
          <div className="retroalimentacion">

            <p>{mensaje}</p>

            {mostrarExplicacion && (
              <p>{pregunta.explicacion}</p>
            )}

            <button
              className="btn-continuar"
              onClick={cerrarPregunta}
            >
              Continuar
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default ModalPregunta;