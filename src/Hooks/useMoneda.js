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

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useMoneda = (label, stateInicial, opciones) => {
  const [state, acutalizarState] = useState(stateInicial);

  const Seleccionar = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => acutalizarState(e.target.value)} value={state}>
        <option value="">-- Seleccione --</option>
        {opciones.map((opcion) => (
          <option value={opcion.codigo} key={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  //Retornar state, interfas y funcion qeue modifica
  return [state, Seleccionar, acutalizarState];
};

export default useMoneda;
