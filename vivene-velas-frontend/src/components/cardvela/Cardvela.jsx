import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  border: 1px solid #dcdcdc;
  position: relative;
  border-radius: 8px;
  padding: 16px;
  background-color: #ffffff;
  margin: auto;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  flex: 0 0 80px;
  margin-right: 16px;

  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    font-size: 0.85em;
    margin: 8px 0 0;
    line-height: 1.4;
  }

  label{
  font-weight:500
  }

`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  margin-left: 16px;

  .info-text {
    font-size: 0.85em;
  }

  .icons {
    display: flex;
    margin-top: 8px;
    top: 10px;
    position: absolute;

    svg {
      cursor: pointer;
      margin-left: 12px;
      color: #8C5B55;
    }
  }
`;

const Cardvela = ({img, titulo, descricao, funcaoDeletar, funcaoAlterar, id}) => {
  return (
    <Container id={id}>
      <ImageContainer>
        <img src={img} alt="Candle" />
      </ImageContainer>
      <Content>
        <h3 className="font-padrao titulo-h3">{titulo}</h3>
        <p>
          <label htmlFor="">Descrição: </label>
          &ensp;
          {descricao}
        </p>
      </Content>
      <InfoContainer>
        <div className="icons">
          <FaEdit onClick={funcaoAlterar}/>
          <FaTrash onClick={funcaoDeletar}/>
        </div>
      </InfoContainer>
    </Container>
  );
};

export default Cardvela;
