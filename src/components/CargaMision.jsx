import { useEffect, useState } from "react";

function CargaMision({ finalizar }) {

  const mensajes = [

    "📡 Conectando con la Unidad Educativa...",

    "🔐 Verificando credenciales...",

    "🪪 Inspector autorizado.",

    "🏫 Cargando escenarios...",

    "✅ Misión lista."
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {

    if (indice < mensajes.length - 1) {

      const timer = setTimeout(() => {

        setIndice(indice + 1);

      }, 900);

      return () => clearTimeout(timer);

    } else {

      const finalizarCarga = setTimeout(() => {

        finalizar();

      }, 1200);

      return () => clearTimeout(finalizarCarga);

    }

  }, [indice]);

  return (

    <div className="carga">

      <div className="terminal">

        <h1>🕵️ Sistema de Inspección</h1>

        {mensajes.slice(0, indice + 1).map((texto, i) => (

          <p key={i}>{texto}</p>

        ))}

      </div>

    </div>

  );

}

export default CargaMision;