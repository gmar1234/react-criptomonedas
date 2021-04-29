import { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";

import { Formulario } from "./components/Formulario";
import imagen from "./criptomundo.png";
import Cotizacion from "./components/Cotizacion";
import { Spinner } from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: white;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptomoneda] = useState("");
  const [resultado, guardarResultado] = useState([]);
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      //evitamos la ejecucion
      if (moneda === "") return;

        //  api cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await Axios.get(url);

      guardarCargando(true);

      setTimeout(() => {

        guardarCargando(false);
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);

      }, 3000);

      
    };

    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  //MOSTRAR SPIINER O RESUTALDO

  const componente =  cargando ? <Spinner /> :  <Cotizacion resultado={resultado}/>

  return (
    <Contenedor>
      <div className="">
        <Imagen src={imagen} alt="Imagen cripto" />
      </div>
      <div className="">
        <Heading>Cotiza criptomonedas al instane</Heading>

        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />

       {componente}
      </div>
    </Contenedor>
  );
}

export default App;
