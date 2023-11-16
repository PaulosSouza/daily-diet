import { CreateMealStorageDTO } from '@dtos/CreateMealStorageDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Meal } from '@models/MealModel'

import { MEAL_COLLECTION } from '@storage/config'

import { mealGetAll } from './mealGetAll'

export async function mealCreate(newMeal: CreateMealStorageDTO): Promise<void> {
  try {
    const storedMeals = await mealGetAll()

    const mealWithAnId: Meal = {
      ...newMeal,
      id: new Date().getTime(),
    }

    const storage = JSON.stringify([...storedMeals, mealWithAnId])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}