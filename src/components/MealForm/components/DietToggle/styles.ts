import { TouchableOpacity } from 'react-native'

import styled, { css } from 'styled-components/native'

import * as T from './types'
import { getDietStatusStyle } from './utils'

export const Container = styled.View`
  gap: 4px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray_100};
  `}
`

export const OptionsContainer = styled.View`
  flex-direction: row;
  gap: 8px;

  justify-content: space-between;
`

export const ButtonOption = styled(TouchableOpacity)<T.ButtonOptionStyleProps>`
  padding: 16px;
  gap: 8px;

  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.gray_600};

  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${(props) => props.dietStatus && getDietStatusStyle(props.dietStatus)}
`

export const TextOption = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
`
