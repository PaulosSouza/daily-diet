import { Meal } from '@models/MealModel'

export type DateTimeMode = 'time' | 'date'

export interface InputTextStyleProps {
  height?: number
}

export interface InputContainerStyleProps {
  isResizable?: boolean
}

export interface FormData extends Omit<Meal, 'id'> {}

export interface DietFormProps {
  meal: Meal

  onFormDataChange(data: FormData): void
}
