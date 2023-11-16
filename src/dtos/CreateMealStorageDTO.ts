import { Meal } from '@models/MealModel'

type MealWithoutId = Omit<Meal, 'id'>

export interface CreateMealStorageDTO extends MealWithoutId {}
