import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native'

export const ContainerView = styled(SafeAreaView)`
  padding: 40px 24px 0;
  align-items: center;

  border-radius: 20px;
  background: ${(props) => props.theme.colors.gray_700};
`
