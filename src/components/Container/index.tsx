import { ContainerView } from "./styles";
import * as T from './types'

export function Container({ children}: T.ContainerProps) {
  return (
    <ContainerView>
      {children}
    </ContainerView>
  )
}
