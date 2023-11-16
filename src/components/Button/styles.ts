import { TouchableHighlight } from 'react-native'

import styled, { css } from 'styled-components/native'

import * as T from './types'
import { getButtonContainerVariantStyle } from './utils'

export const Container = styled(
  TouchableHighlight,
)<T.ButtonContainerStyleProps>`
  padding: 16px 24px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  ${({ variant }) => getButtonContainerVariantStyle(variant)}

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      flex-direction: row;
      gap: 12px;
    `}
`

export const Text = styled.Text<T.TextStyleProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
    color: ${variant === 'primary'
      ? theme.colors.white
      : theme.colors.gray_100};
  `}
`
