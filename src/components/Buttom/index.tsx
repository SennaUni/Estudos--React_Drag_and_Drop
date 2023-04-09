import { ReactNode } from "react"

import { Container } from "./styles";

type ButtonParams = {
  children: ReactNode;
}

const Button = ({ children }: ButtonParams) => {
  return (
    <Container>
      { children }
    </Container>
  )
}

export default Button
