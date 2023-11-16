import { Image } from 'expo-image'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import ArrowUpRight from 'phosphor-react-native/src/icons/ArrowUpRight'
import Plus from 'phosphor-react-native/src/icons/Plus'
import styled, { css } from 'styled-components/native'

import { Button } from '@components'

import * as T from './types'

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 24px 24px 0;
  background-color: ${(props) => props.theme.colors.gray_700};
`

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(Image)`
  width: 82px;
  height: 37px;
`

export const Avatar = styled(Image)`
  width: 50px;
  height: 50px;

  border-radius: 51px;
  border: 2px solid ${(props) => props.theme.colors.gray_200};
`

export const MealText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.lg}px;
    color: ${theme.colors.gray_100};
  `}

  margin-bottom: 8px;
`

export const NewMealButton = styled(Button)`
  margin-bottom: 32px;
`

export const Statistics = styled(TouchableOpacity)<T.StatisticsStyleProps>`
  margin: 36px 0 40px;
  padding: 20px 16px;
  gap: 2px;

  align-items: center;
  justify-content: center;
  border-radius: 6px;

  position: relative;

  ${({ theme, isInDiet }) => css`
    background-color: ${isInDiet
      ? theme.colors.green_light
      : theme.colors.red_light};
  `}
`

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size['4xl']}px;
    color: ${theme.colors.gray_100};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray_200};
  `}
`

export const NewMealButtonIcon = styled(Plus).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 18,
}))``

export const StatisticsIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 28,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`
