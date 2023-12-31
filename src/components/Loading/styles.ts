import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Spinner = styled.ActivityIndicator`
  font-size: ${(props) => props.theme.font_size.xl}px;
`