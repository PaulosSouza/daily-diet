import { useNavigation, useRoute } from '@react-navigation/native'

import { FeedbacksRouteParams } from '@navigations'

import { RoutesNames } from '@config/routesNames'

import {
  Container,
  HomePageButton,
  Image,
  Highlight,
  Subtitle,
  Title,
} from './styles'
import {
  getImageSourceByIsPositiveFeedback,
  getSubtitleTextByIsPositiveFeedback,
  getTitleTextByIsPositiveFeedback,
} from './utils'

export function Feedbacks() {
  const route = useRoute()
  const navigation = useNavigation()

  const { isPositiveFeedback } = route.params as FeedbacksRouteParams

  const titleText = getTitleTextByIsPositiveFeedback(isPositiveFeedback)
  const subtitle = getSubtitleTextByIsPositiveFeedback(isPositiveFeedback)

  function handleGoBackHome(): void {
    navigation.navigate(RoutesNames.Home)
  }

  return (
    <Container>
      <Title variant={isPositiveFeedback ? 'success' : 'fail'}>
        {titleText}
      </Title>

      <Subtitle>
        {subtitle.leftText}
        <Highlight>{subtitle.highlightText}</Highlight>
        {subtitle.rightText}
      </Subtitle>

      <Image
        source={getImageSourceByIsPositiveFeedback(isPositiveFeedback)}
        alt="feedback"
        contentFit="cover"
      />

      <HomePageButton
        text="Ir para a página inicial"
        onPress={handleGoBackHome}
      />
    </Container>
  )
}
