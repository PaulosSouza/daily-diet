import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Meal, Feedbacks, Home, NewMeal, Statistics, EditMeal } from '@screens'

import { RoutesNames } from '@config/routesNames'

import { navigatorScreenOptions } from './config'

const Stack = createNativeStackNavigator()

export function AppNativeStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={navigatorScreenOptions}
      initialRouteName={RoutesNames.Home}
    >
      <Stack.Screen name={RoutesNames.Home} component={Home} />
      <Stack.Screen name={RoutesNames.NewMeal} component={NewMeal} />
      <Stack.Screen name={RoutesNames.Feedback} component={Feedbacks} />
      <Stack.Screen name={RoutesNames.Statistic} component={Statistics} />
      <Stack.Screen name={RoutesNames.Meal} component={Meal} />
      <Stack.Screen name={RoutesNames.EditMeal} component={EditMeal} />
    </Stack.Navigator>
  )
}
