import { AppError } from '@utils/AppError'

import { Meal } from '@models/MealModel'

import { mealGetAll } from './mealGetAll'

export async function mealGetById(id: number): Promise<Meal> {
  try {
    const meals = await mealGetAll()

    const currentMeal = meals.find((meal) => meal.id === id)

    if (!currentMeal) {
      throw new AppError('Refeiç ão atual não foi encontrada')
    }

    return currentMeal
  } catch (error) {
    throw error
  }
}
