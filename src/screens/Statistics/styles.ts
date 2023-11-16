import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import styled, { css } from 'styled-components/native'

import * as T from './types'

export const Container = styled(SafeAreaView)<T.ContainerStyleProps>`
  flex: 1;

  ${({ theme, isInDiet }) => css`
    background-color: ${isInDiet
      ? theme.colors.green_light
      : theme.colors.red_light};
  `}
`

export const HighlightContainer = styled.View`
  gap: 2px;
  align-items: center;
  justify-content: center;

  padding-bottom: 48px;
`

export const HighlightTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size['4xl']}px;
    color: ${theme.colors.gray_100};
  `}
`

export const HighlightSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray_200};
  `}
`

export const BackButton = styled(TouchableOpacity)`
  padding: 24px 24px 0;
`

export const BackIcon = styled(ArrowLeft).attrs(() => ({
  size: 24,
}))``

export const Content = styled.View`
  flex: 1;
  align-items: center;
  gap: 12px;

  padding: 33px 24px 24px;
  margin-top: -24px;

  border-radius: 20px;
  background: ${(props) => props.theme.colors.gray_700};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray_100};
  `}

  margin-bottom: 12px;
`

export const MealDataContainer = styled.View<T.DataStyleProps>`
  align-items: center;
  flex-direction: column;
  gap: 8px;

  width: 100%;

  padding: 16px;
  border-radius: 8px;

  ${({ backgroundColor }) => css`
    background: ${backgroundColor};
  `}

  ${({ shouldShrink }) =>
    shouldShrink &&
    css`
      flex-shrink: 1;
    `}
`

export const MealDataTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size['3xl']}px;
    color: ${theme.colors.gray_100};
  `}

  text-align: center;
`

export const MealDataSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray_200};
  `}
  text-align: center;
`

export const MealsDataContainer = styled.View`
  flex-direction: row;

  gap: 8px;
  width: 100%;
`
