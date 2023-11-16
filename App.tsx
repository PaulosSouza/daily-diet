import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'

import { ThemeProvider } from 'styled-components/native'

import { Routes } from '@navigations'

import { AppViewWrapper } from '@components'

import themes from '@themes/default'

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <ThemeProvider theme={themes}>
      <StatusBar translucent backgroundColor="transparent" style="dark" />

      <AppViewWrapper onLayout={onLayoutRootView}>
        <Routes />
      </AppViewWrapper>
    </ThemeProvider>
  )
}
