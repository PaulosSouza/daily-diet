import { DietStatus, Meal } from '@models/MealModel'

export function getMealsInDietPercentage(meals: Meal[]): number {
  const mealsInDietQuantity = meals.filter(
    (meal) => meal.dietStatus === DietStatus.IN_DIET,
  ).length

  const totalMeals = meals.length
  const percentageInDiet = (mealsInDietQuantity * 100) / totalMeals

  const fixedPercentage = percentageInDiet.toFixed(2)

  return Number(fixedPercentage)
}
