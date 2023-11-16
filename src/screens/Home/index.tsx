import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getMealsInDietPercentage } from '@utils/getMealsInDietPercentage'
import { useTheme } from 'styled-components/native'

import { Meal } from '@models/MealModel'

import { RoutesNames } from '@config/routesNames'
import { mealGetAll } from '@storage/meal/mealGetAll'

import { MealDaylist } from './components/MealDaylist'
import {
  Avatar,
  Container,
  Description,
  Header,
  Logo,
  MealText,
  NewMealButton,
  NewMealButtonIcon,
  Percentage,
  Statistics,
  StatisticsIcon,
} from './styles'
import { MealDay, MealDayList } from './types'
import { formatDatetime, groupMealsByDate } from './utils'

export function Home() {
  const [mealsDayList, setMealsDayList] = useState<MealDayList[]>([])
  const [meals, setMeals] = useState<Meal[]>([])

  const navigation = useNavigation()
  const theme = useTheme()

  const mealsInDietPercentage = getMealsInDietPercentage(meals)
  const haveMoreInDietMeals = mealsInDietPercentage >= 50

  function handleGoAddNewMeal(): void {
    navigation.navigate(RoutesNames.NewMeal)
  }

  function handleGoToStatistics(): void {
    navigation.navigate(RoutesNames.Statistic)
  }

  async function fetchMealsDayList() {
    const meals = await mealGetAll()
    const mealsGroupped = groupMealsByDate(meals)

    const mealsDayList = [] as MealDayList[]

    for (const [date, mealsMap] of mealsGroupped.entries()) {
      const mealsDay: MealDay[] = mealsMap.map((meal) => ({
        id: meal.id,
        dateTime: formatDatetime(new Date(meal.dateTime)),
        name: meal.name,
        dietStatus: meal.dietStatus,
      }))

      const mealDayList = {
        date,
        meals: mealsDay,
      }

      mealsDayList.push(mealDayList)
    }

    setMeals(meals)
    setMealsDayList(mealsDayList)
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealsDayList()
    }, []),
  )

  return (
    <Container>
      <Header>
        <Logo source={require('@assets/logo.png')} />

        <Avatar
          source={'https://avatars.githubusercontent.com/u/40366139?v=4'}
        />
      </Header>

      <Statistics isInDiet={haveMoreInDietMeals} onPress={handleGoToStatistics}>
        <Percentage>
          {mealsInDietPercentage.toFixed(2).replace('.', ',')}%
        </Percentage>

        <Description>das refeições dentro da dieta</Description>

        <StatisticsIcon
          color={
            haveMoreInDietMeals
              ? theme.colors.green_dark
              : theme.colors.red_dark
          }
        />
      </Statistics>

      <MealText>Refeições</MealText>

      <NewMealButton
        text="Nova refeição"
        IconComponent={<NewMealButtonIcon />}
        onPress={handleGoAddNewMeal}
      />

      <FlatList
        data={mealsDayList}
        keyExtractor={(item) => item.date}
        renderItem={({ item: meal }) => (
          <MealDaylist key={meal.date} date={meal.date} meals={meal.meals} />
        )}
      />
    </Container>
  )
}
