import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 16px;
  background-color: #ffffff;
  max-width: 800px;
  margin: auto;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  flex: 0 0 80px;
  margin-right: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const Content = styled.div`
  flex: 1;
  h3 {
    font-size: 1em;
    margin: 0;
    color: #333;
  }

  p {
    color: #555;
    font-size: 0.85em;
    margin: 8px 0 0;
    line-height: 1.4;
  }

  p:first-of-type {
    font-weight: bold;
    display: inline;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  margin-left: 16px;

  .info-text {
    color: #888;
    font-size: 0.85em;
  }

  .icons {
    display: flex;
    margin-top: 8px;

    svg {
      cursor: pointer;
      margin-left: 12px;
      color: #888;
    }
  }
`;

const Cardvela = () => {
  return (
    <Container>
      <ImageContainer>
        <img src="https://via.placeholder.com/80" alt="Candle" />
      </ImageContainer>
      <Content>
        <h3>Vela de Cacau</h3>
        <p>Descrição:</p>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here'.
        </p>
      </Content>
      <InfoContainer>
        <div className="info-text">Dias para vencer: 7 dias</div>
        <div className="icons">
          <FaEdit />
          <FaTrash />
        </div>
      </InfoContainer>
    </Container>
  );
};

export default Cardvela;
