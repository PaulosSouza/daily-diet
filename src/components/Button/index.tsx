import { Container, Text } from './styles'
import * as T from './types'

export function Button({
  text,
  variant = 'primary',
  IconComponent,
  ...rest
}: T.ButtonProps) {
  return (
    <Container variant={variant} hasIcon={Boolean(IconComponent)} {...rest}>
      <>
        {IconComponent}
        <Text variant={variant}>{text}</Text>
      </>
    </Container>
  )
}
