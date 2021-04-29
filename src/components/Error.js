import styled from "styled-components";

const MensajeError = styled.div`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Bebas Neue", cursive;
`;

const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

export default Error;
