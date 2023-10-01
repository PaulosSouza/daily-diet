import { StatusBar } from 'expo-status-bar'

import { Home } from '@screens'

export default function App() {
  return (
    <>
      <Home />
      <StatusBar translucent backgroundColor="transparent" style="inverted" />
    </>
  )
}
