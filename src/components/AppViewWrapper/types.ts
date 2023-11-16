import React from 'react'
import { ViewProps } from 'react-native'

export interface AppViewWrapper extends ViewProps {
  children: React.ReactNode
}
