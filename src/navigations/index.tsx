import { NavigationContainer } from '@react-navigation/native'

import { AppNativeStackNavigation } from './AppNativeStackNavigation'

export * from './types'

export function Routes() {
  return (
    <NavigationContainer>
      <AppNativeStackNavigation />
    </NavigationContainer>
  )
}
