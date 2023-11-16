import { TouchableOpacity } from 'react-native'

import styled, { css } from 'styled-components/native'

import * as T from './types'

export const Container = styled.View`
  flex: 1;
  padding: 40px 24px;

  background-color: ${(props) => props.theme.colors.gray_700};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  gap: 24px;

  margin-top: -24px;
`

export const FormGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`

export const InputContainer = styled.View<T.InputContainerStyleProps>`
  gap: 4px;

  ${({ isResizable }) =>
    isResizable &&
    css`
      flex: 1;
    `}
`

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray_200};
  `}
`

export const InputText = styled.TextInput<T.InputTextStyleProps>`
  padding: 14px;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_500};

  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.lg}px;
    color: ${theme.colors.gray_100};
  `}

  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
`

export const InputDateButton = styled(TouchableOpacity)`
  padding: 14px;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_500};
`

export const InputDateText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.lg}px;
    color: ${theme.colors.gray_100};
  `}
`
