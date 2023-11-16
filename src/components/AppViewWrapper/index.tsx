import { Container } from './styles'
import * as T from './types'

export function AppViewWrapper({ children, ...rest }: T.AppViewWrapper) {
  return <Container {...rest}>{children}</Container>
}
