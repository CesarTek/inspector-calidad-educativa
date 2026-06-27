import portada from "../assets/portada/portada.png";

function Inicio({ iniciarJuego }) {

  return (

    <div className="inicio">

      <div className="hero">

        <div className="hero-texto">

          <span className="badge">
              NUEVA MISIÓN
          </span>

          <h1>

            🕵️ Inspector de Calidad Educativa

          </h1>

          <p>

            Acepta la misión de inspeccionar una unidad educativa e identifica fortalezas y oportunidades de mejora relacionadas con la calidad educativa.

          </p>

          <div className="estadisticas">

            <div>

              🏫

              <h3>10</h3>

              <p>Ambientes</p>

            </div>

            <div>

              ⏱

              <h3>3 min</h3>

              <p>Tiempo</p>

            </div>

            <div>

              🏆

              <h3>4</h3>

              <p>Rangos</p>

            </div>

          </div>

          <button
            className="btn-iniciar"
            onClick={iniciarJuego}
          >

            🚀 ACEPTAR MISIÓN

          </button>

        </div>

        <div className="hero-imagen">

          

          <img
            src={portada}
            alt="Unidad educativa"
          />

        </div>

      </div>

    </div>

  );

}

export default Inicio;