import { css } from 'styled-components/native'

import * as T from './types'

function getTitleTextByIsPositiveFeedback(isPositiveFeedback: boolean): string {
  if (isPositiveFeedback) {
    return 'Continue assim!'
  }

  return 'Que pena!'
}

function getSubtitleTextByIsPositiveFeedback(isPositiveFeedback: boolean): {
  leftText: string
  highlightText: string
  rightText: string
} {
  if (isPositiveFeedback) {
    return {
      leftText: 'Você continua ',
      highlightText: 'dentro da dieta',
      rightText: '. Muito bem!',
    }
  }

  return {
    leftText: 'Você ',
    highlightText: 'saiu da dieta ',
    rightText: 'dessa vez, mas continue se esforçando e não desista!',
  }
}

function getImageSourceByIsPositiveFeedback(isPositiveFeedback: boolean) {
  if (isPositiveFeedback) {
    return require('@assets/feedback-success.png')
  }

  return require('@assets/feedback-fail.png')
}

function getTitleStyle(variant: T.Variant) {
  return {
    success: css`
      color: ${(props) => props.theme.colors.green_dark};
    `,
    fail: css`
      color: ${(props) => props.theme.colors.red_dark};
    `,
  }[variant]
}

export {
  getTitleTextByIsPositiveFeedback,
  getSubtitleTextByIsPositiveFeedback,
  getImageSourceByIsPositiveFeedback,
  getTitleStyle,
}
