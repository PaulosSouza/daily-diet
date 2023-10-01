/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native'
import themes from '@themes/default'

declare module 'styled-components/native' {
  type ThemeType = typeof themes

  export interface DefaultTheme extends ThemeType {}
}
