import React, { useCallback, useState } from 'react'

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getMealsInDietPercentage } from '@utils/getMealsInDietPercentage'
import { useTheme } from 'styled-components/native'

import { Meal } from '@models/MealModel'

import { RoutesNames } from '@config/routesNames'
import { mealGetAll } from '@storage/meal/mealGetAll'

import {
  BackButton,
  BackIcon,
  Content,
  MealDataContainer,
  MealDataSubtitle,
  MealDataTitle,
  HighlightContainer,
  HighlightSubtitle,
  HighlightTitle,
  MealsDataContainer,
  Title,
  Container,
} from './styles'
import {
  getBestInDietSequence,
  getTotalOfMealsInDiet,
  getTotalOfMealsOffDiet,
} from './utils'

export function Statistics() {
  const [meals, setMeals] = useState<Meal[]>([])

  const theme = useTheme()
  const navigation = useNavigation()

  const mealsInDietPercentage = getMealsInDietPercentage(meals)
  const mealsInDietPercentageFormatted = mealsInDietPercentage
    .toFixed(2)
    .replace('.', ',')

  const totalOfMealsInDiet = getTotalOfMealsInDiet(meals)
  const totalOfMealsOffDiet = getTotalOfMealsOffDiet(meals)

  const haveMoreInDietMeals = mealsInDietPercentage >= 50
  const totalMeals = meals.length

  const bestInDietSequence = getBestInDietSequence(meals)

  function handleGoBack(): void {
    navigation.navigate(RoutesNames.Home)
  }

  async function fetchMeals() {
    const meals = await mealGetAll()
    setMeals(meals)
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  return (
    <Container isInDiet={haveMoreInDietMeals}>
      <BackButton onPress={handleGoBack}>
        <BackIcon
          color={
            haveMoreInDietMeals
              ? theme.colors.green_dark
              : theme.colors.red_dark
          }
        />
      </BackButton>

      <HighlightContainer>
        <HighlightTitle>{mealsInDietPercentageFormatted}%</HighlightTitle>
        <HighlightSubtitle>das refeições dentro da dieta</HighlightSubtitle>
      </HighlightContainer>

      <Content>
        <Title>Estatísticas Gerais</Title>

        <MealDataContainer backgroundColor={theme.colors.gray_600}>
          <MealDataTitle>{bestInDietSequence}</MealDataTitle>

          <MealDataSubtitle>
            melhor sequência de pratos dentro da dieta
          </MealDataSubtitle>
        </MealDataContainer>

        <MealDataContainer backgroundColor={theme.colors.gray_600}>
          <MealDataTitle>{totalMeals}</MealDataTitle>

          <MealDataSubtitle>refeições registradas</MealDataSubtitle>
        </MealDataContainer>

        <MealsDataContainer>
          <MealDataContainer
            shouldShrink
            backgroundColor={theme.colors.green_light}
          >
            <MealDataTitle>{totalOfMealsInDiet}</MealDataTitle>
            <MealDataSubtitle>refeições dentro da dieta</MealDataSubtitle>
          </MealDataContainer>

          <MealDataContainer
            shouldShrink
            backgroundColor={theme.colors.red_light}
          >
            <MealDataTitle>{totalOfMealsOffDiet}</MealDataTitle>
            <MealDataSubtitle>refeições fora da dieta</MealDataSubtitle>
          </MealDataContainer>
        </MealsDataContainer>
      </Content>
    </Container>
  )
}
