import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/config'

import { mealGetAll } from './mealGetAll'

export async function mealDeleteById(id: number): Promise<void> {
  try {
    const meals = await mealGetAll()

    const filteredMeals = meals.filter((meal) => meal.id !== id)

    const storage = JSON.stringify(filteredMeals)

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
