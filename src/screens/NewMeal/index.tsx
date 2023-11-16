import React, { useState } from 'react'
import { Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { DietStatus, Meal } from '@models/MealModel'

import { MealForm, Header } from '@components'

import { RoutesNames } from '@config/routesNames'
import { mealCreate } from '@storage/meal/mealCreate'

import { Content, Container, SaveNewMealButton } from './styles'

export function NewMeal() {
  const [meal, setMeal] = useState<Meal>({} as Meal)

  const navigation = useNavigation()
  const theme = useTheme()

  function handleMealDataChange(mealFormData: Meal): void {
    setMeal(mealFormData)
  }

  async function handleAddNewMeal(): Promise<void> {
    try {
      await mealCreate(meal)

      navigation.navigate(RoutesNames.Feedback, {
        isPositiveFeedback: meal.dietStatus === DietStatus.IN_DIET,
      })
    } catch (error) {
      console.error(error)

      Alert.alert(
        'Error ao cadastrar uma nova refeição',
        'Ops! Ocorreu um erro ao cadastrar uma nova refeição, tente novamente mais tarde',
      )
    }
  }

  return (
    <Container>
      <Content>
        <Header title="Nova Refeição" backgroundColor={theme.colors.gray_500} />

        <MealForm meal={meal} onFormDataChange={handleMealDataChange} />

        <SaveNewMealButton
          text="Cadastrar refeição"
          onPress={handleAddNewMeal}
        />
      </Content>
    </Container>
  )
}
