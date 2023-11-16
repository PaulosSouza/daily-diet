import { useCallback, useState } from 'react'
import { Alert } from 'react-native'

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { AppError } from '@utils/AppError'
import { isObjectEmpty } from '@utils/isObjectEmpty'
import { useTheme } from 'styled-components/native'

import { Meal } from '@models/MealModel'

import { EditMealRouteParams } from '@navigations'

import { Header, Loading, MealForm } from '@components'

import { RoutesNames } from '@config/routesNames'
import { mealGetById } from '@storage/meal/mealGetById'
import { mealUpdateById } from '@storage/meal/mealUpdateById'

import { Container, Content, EditNewMealButton } from './styles'

export function EditMeal() {
  const [meal, setMeal] = useState<Meal>({} as Meal)

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()

  const { id } = route.params as EditMealRouteParams

  async function fetchEditMeal() {
    try {
      const currentMealData = await mealGetById(id)

      currentMealData.dateTime = new Date(currentMealData.dateTime)
      currentMealData.date = new Date(currentMealData.date)

      setMeal(currentMealData)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Meal Info', error.message)
      } else {
        Alert.alert('Meal Info', 'Não foi possível encontrar a refeição atual')
        console.error(error)
      }

      navigation.navigate(RoutesNames.Home)
    }
  }

  function handleMealDataChange(mealFormData: Meal): void {
    setMeal(mealFormData)
  }

  async function handleEditNewMeal(): Promise<void> {
    try {
      await mealUpdateById(meal)
      navigation.navigate(RoutesNames.Home)
    } catch (error) {
      let errorMessage = 'Não foi possível editar a refeição atual'

      if (error instanceof AppError) {
        errorMessage = error.message
      }

      Alert.alert('Refeição Info', errorMessage)

      console.error(error)
    } finally {
      navigation.navigate(RoutesNames.Home)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchEditMeal()
    }, []),
  )

  if (isObjectEmpty(meal)) {
    return <Loading />
  }

  return (
    <Container>
      <Content>
        <Header
          title="Editar Refeição"
          backgroundColor={theme.colors.gray_500}
        />

        <MealForm meal={meal} onFormDataChange={handleMealDataChange} />

        <EditNewMealButton
          text="Salvar alterações"
          onPress={handleEditNewMeal}
        />
      </Content>
    </Container>
  )
}
