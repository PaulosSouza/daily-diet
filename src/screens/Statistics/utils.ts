import { DietStatus, Meal } from '@models/MealModel'

function getTotalOfMealsInDiet(meals: Meal[]): number {
  const mealsInDiet = meals.filter(
    (meal) => meal.dietStatus === DietStatus.IN_DIET,
  )
  return mealsInDiet.length
}

function getTotalOfMealsOffDiet(meals: Meal[]): number {
  const mealsOffDiet = meals.filter(
    (meal) => meal.dietStatus === DietStatus.OFF_DIET,
  )
  return mealsOffDiet.length
}

function getBestInDietSequence(meals: Meal[]): number {
  let currentSequence = []
  let bestSequences = []

  for (const meal of meals) {
    if (meal.dietStatus === DietStatus.IN_DIET) {
      currentSequence.push(meal)
    } else {
      if (currentSequence.length > bestSequences.length) {
        bestSequences = [...currentSequence]
      }

      currentSequence = []
    }
  }

  if (currentSequence.length > bestSequences.length) {
    bestSequences = [...currentSequence]
  }

  return bestSequences.length
}

export { getTotalOfMealsInDiet, getTotalOfMealsOffDiet, getBestInDietSequence }
