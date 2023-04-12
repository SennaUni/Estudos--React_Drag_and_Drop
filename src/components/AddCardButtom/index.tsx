import { GoPlus } from 'react-icons/go'
import { FiCopy } from 'react-icons/fi'

import Buttom from '../Buttom';

import { Container, Content } from './styles'

const AddCardButtom = () => {
  return (
    <Container>
      <Content>
        <Buttom>
          <div>
            <GoPlus /> 
            <span> Adicionar um cartão </span>
          </div>
        </Buttom>

        <Buttom>
          <FiCopy /> 
        </Buttom>
      </Content>
    </Container>
  )
}

export default AddCardButtom