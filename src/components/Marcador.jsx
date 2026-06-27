function Marcador({
  puntos,
  inspeccionadas,
  tiempo
}){

  const porcentaje = (inspeccionadas / 10) * 100;
  const minutos =
  Math.floor(tiempo / 60);
  const segundos = tiempo % 60;

  return (
    <div className="marcador">

      <div>
        <h3>🏆 Puntaje: {puntos}</h3>
     <h3>
  ⏱️ Tiempo: {minutos}:{segundos}</h3>
      </div>

      <div className="progreso">

        <p>
          Inspeccionados: {inspeccionadas}/10
        </p>

        <div className="barra">

          <div
            className="barra-interna"
            style={{
              width: `${porcentaje}%`
            }}
          ></div>

        </div>

      </div>

    </div>
  );
}

export default Marcador;