import { DietStatus } from '@models/MealModel'

export interface MealDay {
  id: number
  dateTime: string
  name: string
  dietStatus: DietStatus
}

export interface MealDayList {
  date: string
  meals: MealDay[]
}

export interface StatisticsStyleProps {
  isInDiet: boolean
}