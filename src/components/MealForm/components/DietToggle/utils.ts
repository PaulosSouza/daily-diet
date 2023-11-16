import { css } from 'styled-components/native'

import { DietStatus } from '@models/MealModel'

function getDietStatusStyle(status: DietStatus) {
  return {
    [DietStatus.IN_DIET]: css`
      background-color: ${(props) => props.theme.colors.green_light};
      border: 1px solid ${(props) => props.theme.colors.green_dark};
    `,
    [DietStatus.OFF_DIET]: css`
      background-color: ${(props) => props.theme.colors.red_light};
      border: 1px solid ${(props) => props.theme.colors.red_dark};
    `,
  }[status]
}

export { getDietStatusStyle }
