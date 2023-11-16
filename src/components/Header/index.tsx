import { useNavigation } from '@react-navigation/native'

import { BackButton, BackIcon, Container, Title } from './styles'
import * as T from './types'

export function Header({ title, backgroundColor }: T.HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack(): void {
    navigation.goBack()
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  )
}
