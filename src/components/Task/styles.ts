import styled, { css } from 'styled-components'

type TypeParams = {
  isDragging: boolean;
}

export const Container = styled.div<TypeParams>`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  border-bottom: 1px solid #D3D3D3;
  
  background-color: #FFFFFF;
  /* background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')}; */

  /* ${props => props.isDragging && css`
    transform: rotate(2deg) !important;
  `} */
`