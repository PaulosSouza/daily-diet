import FailLight from '@assets/fail-light.svg'
import SuccessLight from '@assets/success-light.svg'
import { useNavigation } from '@react-navigation/native'

import { DietStatus } from '@models/MealModel'

import {
  Container,
  Date,
  Divider,
  Meal,
  MealDateTime,
  MealName,
} from './styles'
import * as T from './types'
import { RoutesNames } from '@config/routesNames'

export function MealDaylist({ date, meals }: T.MealDaylistProps) {
  const navigation = useNavigation()

  function handleGoToMealInfo(id: number): void {
    navigation.navigate(RoutesNames.Meal, {
      id
    })
  }

  return (
    <Container>
      <Date>{date}</Date>

      {meals.map(({ id, name, dateTime, dietStatus }) => (
        <Meal key={id} onPress={() => handleGoToMealInfo(id)}>
          <MealDateTime>{dateTime}</MealDateTime>
          <Divider />
          <MealName>{name}</MealName>

          {dietStatus === DietStatus.IN_DIET ? <SuccessLight /> : <FailLight />}
        </Meal>
      ))}
    </Container>
  )
}