import { Image as ImageExpo } from 'expo-image'

import styled, { css } from 'styled-components/native'

import { Button } from '@components'

import * as T from './types'
import { getTitleStyle } from './utils'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.gray_700};
`

export const Title = styled.Text<T.TitleStyleProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.font_size['3xl']}px;
    font-family: ${theme.font_family.bold};

    ${getTitleStyle(variant)}
  `}

  margin-bottom: 8px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_100};
  `}

  text-align: center;
`

export const Highlight = styled(Subtitle)`
  font-family: ${(props) => props.theme.font_family.bold};
`

export const Image = styled(ImageExpo)`
  margin-top: 40px;
  margin-bottom: 32px;

  width: 224px;
  height: 288px;
`

export const HomePageButton = styled(Button)``
