import styled from "styled-components";

const ResultadpDiv = styled.div`
  color: #fff;
  font-family: sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  console.log(resultado);
  return (
    <ResultadpDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        El precio mas alto del dia: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        El precio mas bajo del dia: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variacion en 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Ultima actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadpDiv>
  );
};

export default Cotizacion;
