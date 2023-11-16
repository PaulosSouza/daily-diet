import AsyncStorage from '@react-native-async-storage/async-storage'

import { Meal } from '@models/MealModel'

import { MEAL_COLLECTION } from '../config'

export async function mealGetAll(): Promise<Meal[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: Meal[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    throw error
  }
}
