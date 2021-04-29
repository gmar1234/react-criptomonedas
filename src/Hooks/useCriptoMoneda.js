import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const SelectCripto = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCriptoMoneda = (label, stateInicial, opciones) => {
  const [state, acutalizarState] = useState(stateInicial);

  console.log(opciones);
  const Seleccionar = () => (
    <>
      <Label>{label}</Label>
      <SelectCripto
        onChange={(e) => acutalizarState(e.target.value)}
        value={state}
      >
        <option value="">-- Seleccione --</option>
        {opciones.map((opcion) => (
          <option value={opcion.CoinInfo.Name} key={opcion.CoinInfo.Id}>
            {opcion.CoinInfo.FullName}
          </option>
        ))}
      </SelectCripto>
    </>
  );

  //Retornar state, interfas y funcion qeue modifica
  return [state, Seleccionar, acutalizarState];
};

export default useCriptoMoneda;
