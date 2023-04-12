import styled from 'styled-components'

export const Container = styled.div`
  margin: 8px;
  border-radius: 5px;
  width:220px;
  overflow: hidden;

  display:flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 5px;

  background-color: #EBECF0;
`;

export const Title = styled.h3`
  margin: 0;
  margin-left: 5px;

  font-weight: bolder;
  font-family: Ubuntu, sans-serif;
  font-size: 0.9em;
  color: #172b4d;
`;

export const TaskList = styled.div`
  padding: 0 5px;

  background-color: #EBECF0;
`;