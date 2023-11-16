import { useCallback, useState } from 'react'
import { Alert } from 'react-native'

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { AppError } from '@utils/AppError'
import { isObjectEmpty } from '@utils/isObjectEmpty'
import format from 'date-fns/format'
import { useTheme } from 'styled-components/native'

import { DietStatus, type Meal } from '@models/MealModel'

import { MealRouteParams } from '@navigations'

import { Header, Loading } from '@components'

import { RoutesNames } from '@config/routesNames'
import { mealDeleteById } from '@storage/meal/mealDeleteById'
import { mealGetById } from '@storage/meal/mealGetById'

import {
  Container,
  Content,
  DateTimeDescription,
  DateTimeTitle,
  Description,
  EditMealButton,
  EditMealButtonIcon,
  RemoveMealButton,
  RemoveMealButtonIcon,
  Title,
} from './styles'

export function Meal() {
  const [meal, setMeal] = useState<Meal>({} as Meal)

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()

  const { id } = route.params as MealRouteParams

  async function fetchMeal() {
    try {
      const currentMealData = await mealGetById(id)

      setMeal(currentMealData)
    } catch (error) {
      let errorMessage = 'Não foi possível remover a refeição atual'

      if (error instanceof AppError) {
        errorMessage = error.message
      }

      Alert.alert('Meal Info', errorMessage)

      console.error(error)
    }
  }

  async function handleRemoveMeal(): Promise<void> {
    try {
      await mealDeleteById(meal.id as number)
    } catch (error) {
      let errorMessage = 'Não foi possível remover a refeição atual'

      if (error instanceof AppError) {
        errorMessage = error.message
      }

      Alert.alert('Refeição Info', errorMessage)

      console.error(error)
    } finally {
      navigation.navigate(RoutesNames.Home)
    }
  }

  function handleEditMeal(): void {
    navigation.navigate(RoutesNames.EditMeal, {
      id: meal.id,
    })
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal()
    }, []),
  )

  if (isObjectEmpty(meal)) {
    return <Loading />
  }

  const mealDateFormatted = format(
    new Date(meal.dateTime),
    "dd/MM/yyyy 'às' HH:mm",
  )

  const headerBackgroundColor =
    meal.dietStatus === DietStatus.IN_DIET
      ? theme.colors.green_light
      : theme.colors.red_light

  return (
    <Container>
      <Header title="Refeição" backgroundColor={headerBackgroundColor} />

      <Content>
        <Title>{meal.name}</Title>
        <Description>{meal.description}</Description>

        <DateTimeTitle>Data e hora</DateTimeTitle>
        <DateTimeDescription>{mealDateFormatted}</DateTimeDescription>
      </Content>

      <EditMealButton
        text="Editar refeição"
        variant="primary"
        IconComponent={<EditMealButtonIcon />}
        onPress={handleEditMeal}
      />

      <RemoveMealButton
        text="Excluir refeição"
        variant="secondary"
        IconComponent={<RemoveMealButtonIcon />}
        onPress={handleRemoveMeal}
      />
    </Container>
  )
}
