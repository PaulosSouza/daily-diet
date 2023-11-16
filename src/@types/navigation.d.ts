/* eslint-disable @typescript-eslint/no-empty-interface */

import {
  EditMealRouteParams,
  FeedbacksRouteParams,
  MealRouteParams,
} from '@navigations'

import { RoutesNames } from '@config/routesNames'

interface RouteList {
  [RoutesNames.Home]: undefined
  [RoutesNames.NewMeal]: undefined
  [RoutesNames.Meal]: MealRouteParams
  [RoutesNames.EditMeal]: EditMealRouteParams
  [RoutesNames.Feedback]: FeedbacksRouteParams
  [RoutesNames.Statistic]: undefined
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RouteList {}
  }
}
