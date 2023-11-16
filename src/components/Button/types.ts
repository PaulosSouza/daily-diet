import { TouchableHighlightProps } from 'react-native'

export type Variant = 'primary' | 'secondary'

export interface ButtonProps extends TouchableHighlightProps {
  text: string
  variant?: Variant;
  IconComponent?: React.ReactNode
}

export interface ButtonContainerStyleProps {
  variant: Variant
  hasIcon: boolean
}

export interface TextStyleProps {
  variant: Variant
}
