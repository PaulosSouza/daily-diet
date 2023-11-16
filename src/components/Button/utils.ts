import { css } from 'styled-components/native'

import * as T from './types'

function getButtonContainerVariantStyle(variant: T.Variant) {
  return {
    primary: css`
      background: ${(props) => props.theme.colors.gray_200};
    `,
    secondary: css`
      ${({ theme }) => css`
        border: 1px solid ${theme.colors.gray_100};
        background: ${theme.colors.gray_700};
      `}
    `,
  }[variant]
}

export { getButtonContainerVariantStyle }
