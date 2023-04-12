import { ReactNode } from "react"

import { Container } from "./styles";

type ButtonParams = {
  children: ReactNode;
  onClick?: (event: any) => void;
}

const Button = ({ children, onClick}: ButtonParams) => {
  return (
    <Container onClick={onClick}>
      { children }
    </Container>
  )
}

export default Button
