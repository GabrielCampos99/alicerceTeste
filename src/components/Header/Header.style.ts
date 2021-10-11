import styled from "styled-components";

export const Container = styled.div`
  height: 30vh;
  width: 100%;
  background-color: black;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const TextHeader = styled.h1`
  text-align: center;
  color: #ffe81f;
  font-size: 78px;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 48px;
  }
`;

export const TextSub = styled.h2`
  color: #ccc;
`;
