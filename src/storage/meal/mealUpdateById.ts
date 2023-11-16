import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'

import { Meal } from '@models/MealModel'

import { MEAL_COLLECTION } from '@storage/config'

import { mealGetAll } from './mealGetAll'

export async function mealUpdateById(updatedMeal: Meal): Promise<void> {
  try {
    const meals = await mealGetAll()

    const currentUpdatedMealIndex = meals.findIndex(
      (meal) => meal.id === updatedMeal.id,
    )

    if (currentUpdatedMealIndex === -1) {
      throw new AppError('Refeição não encontrada!')
    }

    const updatedMealWithAnId: Meal = {
      ...updatedMeal,
      id: new Date().getTime(),
    }

    meals[currentUpdatedMealIndex] = updatedMealWithAnId

    const storage = JSON.stringify(meals)

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
