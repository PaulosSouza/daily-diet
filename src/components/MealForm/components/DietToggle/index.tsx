import Fail from '@assets/fail.svg'
import Success from '@assets/success.svg'

import { DietStatus } from '@models/MealModel'

import {
  ButtonOption,
  Container,
  Label,
  OptionsContainer,
  TextOption,
} from './styles'
import * as T from './types'

export function DietToggle({
  onDietStatusChange,
  currentStatus,
}: T.DietToggleProps) {
  const inDietStatus =
    currentStatus === DietStatus.IN_DIET ? DietStatus.IN_DIET : undefined
  const offDietStatus =
    currentStatus === DietStatus.OFF_DIET ? DietStatus.OFF_DIET : undefined

  function handleToggleDietStatus(toggleStatus: DietStatus) {
    onDietStatusChange(toggleStatus)
  }

  return (
    <Container>
      <Label>Está na dieta?</Label>

      <OptionsContainer>
        <ButtonOption
          dietStatus={inDietStatus}
          onPress={() => handleToggleDietStatus(DietStatus.IN_DIET)}
        >
          <Success />
          <TextOption>Sim</TextOption>
        </ButtonOption>

        <ButtonOption
          dietStatus={offDietStatus}
          onPress={() => handleToggleDietStatus(DietStatus.OFF_DIET)}
        >
          <Fail />
          <TextOption>Não</TextOption>
        </ButtonOption>
      </OptionsContainer>
    </Container>
  )
}