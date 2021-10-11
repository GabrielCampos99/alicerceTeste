import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  margin: 30px;
  border-radius: 10px;
  width: 80%;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;
export const Wrap = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 1px solid black;

  h1 {
    font-size: 24px;
    padding: 20px;
    letter-spacing: 1.5px;
    text-align: left;
  }

  span {
    padding-right: 10px;
  }
`;

export const Dropdown = styled.div`
  border-bottom: 2px solid #ffe81f;
  border-top: 2px solid #ffe81f;
  p {
    background-color: black;
    color: #cecece;
    padding: 20px;
    margin: 0;
    letter-spacing: 1px;
  }
`;
