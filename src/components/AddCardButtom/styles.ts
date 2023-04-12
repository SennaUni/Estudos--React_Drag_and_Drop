import styled from 'styled-components'

export const Container = styled.footer`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 5px 5px 5px;

  background-color: #EBECF0;

  span {
    margin-left: 3px;
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  div {
    width: 170px;

    display: flex;
    justify-content: start;
    align-items: center;
  }
`