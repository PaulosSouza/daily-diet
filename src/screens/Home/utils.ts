import format from 'date-fns/format'

import { Meal } from '@models/MealModel'

function formatDate(date: Date): string {
  return format(date, 'dd.MM.yy')
}

function formatDatetime(date: Date): string {
  return format(date, 'HH:mm')
}

function groupMealsByDate(meals: Meal[]): Map<string, Meal[]> {
  const mealMap = new Map<string, Meal[]>()

  for (const meal of meals) {
    const mealDate = formatDate(new Date(meal.date))

    if (!mealMap.has(mealDate)) {
      mealMap.set(mealDate, [])
    }

    mealMap.get(mealDate)?.push(meal)
  }

  return mealMap
}

export { formatDate, formatDatetime, groupMealsByDate }
