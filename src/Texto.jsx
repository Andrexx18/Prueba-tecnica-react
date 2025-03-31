import React, { useState } from "react";

function Texto() {
  const [texto, setTexto] = useState({
    //Textos iniciales.
    uno: "Real Madrid va a ganar la Champions League",
    dos: "Cristiano Vencera",
    tres: "Colombia me esta desilucionando en el mundial",
  });
  const textos = () => {
    //Despues de dar click al boton se modifica a estos textos.
    setTexto({
      uno: "Como vamo",
      dos: "texto ",
      tres: "perdidos.",
    });
  };

  return (
    <div>
      <h2>{texto.uno}</h2>
      <h2>{texto.dos}</h2>
      <h2>{texto.tres}</h2>
      <button onClick={textos}>Actualizar Textos</button>
    </div>
  );
}

export default Texto;
