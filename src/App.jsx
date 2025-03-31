import { useState } from "react";
import "./App.css";
import Color from "./Color";
import Lista from "./Lista";
import Numero from "./Numero";
import Objeto from "./Objeto";
import Texto from "./Texto";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Prueba Tecnica</h2>
      <Color />
      <Lista />
      <Numero />
      <Objeto />
      <Texto />
    </div>
  );
}

export default App;
