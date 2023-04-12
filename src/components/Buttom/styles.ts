import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 3px;
  
  border: 0;
  padding: 6px;

  font-family: Ubuntu, sans-serif;
  font-size: 0.9em;
  color: #172b4d;

  background-color: transparent;

  cursor: pointer;

  :hover {
    background-color: #dfe1e6;
  }
`;
