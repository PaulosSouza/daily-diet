import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import styled, { css } from 'styled-components/native'

import * as T from './types'

export const Container = styled(SafeAreaView)<T.HeaderContainerStyleProps>`
  flex-direction: row;
  padding: 24px 24px 48px;

  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xl}px;
    color: ${theme.colors.gray_100};
  `}

  width: 100%;
  text-align: center;

  pointer-events: none;
`

export const BackButton = styled(TouchableOpacity)`
  z-index: 1;
`

export const BackIcon = styled(ArrowLeft).attrs((props) => ({
  size: 24,
  color: props.theme.colors.gray_200,
}))`
  position: absolute;
`
