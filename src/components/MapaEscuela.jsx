import preguntas from "../data/preguntas";

function MapaEscuela({
  abrirPregunta,
  inspeccionadas
}) {

  return (
    <div className="mapa">
      <div className="contenido-mapa">

      <div className="bienvenida">

    <div className="placa">

        <h1>
            🕵️ Inspector de Calidad Educativa
        </h1>

        <h2>
            Bienvenido, Inspector
        </h2>

        <p>

            Tu misión consiste en recorrer cada ambiente de la Unidad Educativa San Gabriel e identificar fortalezas y debilidades relacionadas con la calidad educativa.

        </p>

        <div className="mision">

            🎯 Completa los 10 ambientes antes de que termine el tiempo.

        </div>

    </div>

    </div>

      <div className="escuela">

        {preguntas.map((item) => (

          <div
            key={item.id}
            className={`zona ${
              inspeccionadas.includes(item.id)
                ? "inspeccionada"
                : ""
            }`}
            onClick={() => abrirPregunta(item)}
          >
            <img
            src={item.imagen}
            alt={item.lugar}
            className="imagen-zona"
            />
            <h3>{item.lugar}</h3>
            <p>
              {inspeccionadas.includes(item.id)
                ? "✅ Inspeccionado"
                : "🔍 Inspeccionar"}
            </p>
          </div>

        ))}

      </div>
        </div>
    </div>
  );
}

export default MapaEscuela;