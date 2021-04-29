import { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";

import useMoneda from "../Hooks/useMoneda";
import useCriptoMoneda from "../Hooks/useCriptoMoneda";
import Error from "./Error";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

export const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  const [listacripto, guardarCriptoMonedas] = useState([]);

  // usemoneda

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar Americano" },
    { codigo: "PEN", nombre: "Soles Peruano" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
  ];
  const [error, guardarError] = useState(false);

  const [moneda, SelectMoneda] = useMoneda("Elige tu Moneda", "", MONEDAS);
  const [criptomoneda, SelectCripto] = useCriptoMoneda(
    "Elige tu cripto moneda",
    "",
    listacripto
  );

  //LLAADO AL  API

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await Axios.get(url);

      guardarCriptoMonedas(resultado.data.Data);
    };

    consultarAPI();
  }, []);

  const cotizarMoneda = (e) => {
    e.preventDefault();

    if (moneda === "" || criptomoneda === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todo los campos son obligatorios" /> : null}
      <SelectMoneda />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};
