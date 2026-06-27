function ResultadoFinal({ puntos, reiniciar }) {

  let nivel = "Inspector Novato";

  if (puntos >= 80) {
    nivel = "Inspector Experto";
  }

  if (puntos >= 100) {
    nivel = "Inspector Maestro";
  }

  return (
    <div className="resultado-final">

      <h1>🏆 Inspección Finalizada</h1>

      <p>La inspección ha concluido.</p>

      <h2>Puntaje Final: {puntos}</h2>

      <h3>{nivel}</h3>

      <button
        className="btn-iniciar"
        onClick={reiniciar}
      >
        Jugar Nuevamente
      </button>

    </div>
  );
}

export default ResultadoFinal;