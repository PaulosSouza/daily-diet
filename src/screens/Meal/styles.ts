import PencilSimpleLine from 'phosphor-react-native/src/icons/PencilSimpleLine'
import Trash from 'phosphor-react-native/src/icons/Trash'
import styled, { css } from 'styled-components/native'

import { Button } from '@components'

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray_700};
`

export const Content = styled.View`
  flex: 1;
  margin-top: -24px;
  padding: 40px 24px 0;

  border-radius: 20px;
  background: ${(props) => props.theme.colors.gray_700};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size['2xl']}px;
    color: ${theme.colors.gray_100};
  `}

  margin-bottom: 8px;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.lg}px;
    color: ${theme.colors.gray_200};
  `}

  margin-bottom: 24px;
`

export const DateTimeTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray_100};
  `}

  margin-bottom: 8px;
`

export const DateTimeDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.lg}px;
    color: ${theme.colors.gray_200};
  `}

  margin-bottom: 8px;
`

export const RemoveMealButton = styled(Button)`
  margin: 0 24px;
  margin-bottom: 8px;
`

export const RemoveMealButtonIcon = styled(Trash).attrs(({ theme }) => ({
  color: theme.colors.gray_100,
  size: 18,
}))``

export const EditMealButton = styled(Button)`
  margin: 0 24px;
  margin-bottom: 8px;
`

export const EditMealButtonIcon = styled(PencilSimpleLine).attrs(
  ({ theme }) => ({
    color: theme.colors.white,
    size: 18,
  }),
)``
