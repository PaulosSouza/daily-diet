import { TouchableOpacity } from 'react-native'

import DividerSvg from '@assets/divider.svg'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 24px;

  gap: 8px;
`

export const Date = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xl}px;
    color: ${theme.colors.gray_100};
  `}
`

export const Meal = styled(TouchableOpacity)`
  padding: 14px 16px;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_500};

  align-items: center;
  flex-direction: row;
`

export const MealDateTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xs}px;
    color: ${theme.colors.gray_100};
  `}
`

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.lg}px;
    color: ${theme.colors.gray_200};
  `}

  flex-grow: 1;
`

export const Divider = styled(DividerSvg)`
  margin: 0 12px;
`
