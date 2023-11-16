import styled from 'styled-components/native'

import { Button } from '@components'

export const Content = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray_700};
  margin-bottom: 40px;
`

export const EditNewMealButton = styled(Button)`
  margin: 0 24px;
`

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  background-color: ${(props) => props.theme.colors.gray_700};
`
