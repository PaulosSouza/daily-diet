import React, { useState } from 'react'

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import format from 'date-fns/format'

import { DietStatus } from '@models/MealModel'

import { DietToggle } from './components/DietToggle'
import {
  Container,
  FormGroup,
  InputDateButton,
  InputContainer,
  InputLabel,
  InputText,
  InputDateText,
} from './styles'
import * as T from './types'

export function MealForm({ onFormDataChange, meal }: T.DietFormProps) {
  const [dateTimeMode, setDateTimeMode] = useState<T.DateTimeMode>('date')
  const [showDateTimeComponent, setShowDateTimeComponent] =
    useState<boolean>(false)

  const dateValue = dateTimeMode === 'date' ? meal.date : meal.dateTime
  const dateFormatted = meal.date ? format(meal.date, 'dd/MM/yyyy') : ''
  const dateTimeFormatted = meal.dateTime ? format(meal.dateTime, 'HH:mm') : ''

  function setNewDateOrDateTimeByMode(newDate: Date): void {
    if (dateTimeMode === 'date') {
      onFormDataChange({
        ...meal,
        date: newDate,
      })
      return
    }

    onFormDataChange({
      ...meal,
      dateTime: newDate,
    })
  }

  function handleDateTimeValueChange(
    event: DateTimePickerEvent,
    newDate?: Date | undefined,
  ): void {
    if (!newDate || event.type === 'dismissed') {
      setShowDateTimeComponent(false)
      return
    }

    setShowDateTimeComponent(false)
    setNewDateOrDateTimeByMode(newDate)
  }

  function handleOpenDateTimePickerComponent(
    dateTimeMode: T.DateTimeMode,
  ): void {
    setDateTimeMode(dateTimeMode)
    setShowDateTimeComponent(true)
  }

  function handleToggleDietStatus(newStatus: DietStatus): void {
    onFormDataChange({
      ...meal,
      dietStatus: newStatus,
    })
  }

  return (
    <>
      <Container>
        <InputContainer>
          <InputLabel>Nome</InputLabel>
          <InputText
            value={meal.name}
            onChangeText={(newName) =>
              onFormDataChange({ ...meal, name: newName })
            }
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Descrição</InputLabel>
          <InputText
            height={92}
            multiline
            textAlignVertical="top"
            value={meal?.description}
            onChangeText={(newDescription) =>
              onFormDataChange({ ...meal, description: newDescription })
            }
          />
        </InputContainer>

        <FormGroup>
          <InputContainer isResizable>
            <InputLabel>Data</InputLabel>
            <InputDateButton
              onPress={() => handleOpenDateTimePickerComponent('date')}
            >
              <InputDateText>{dateFormatted}</InputDateText>
            </InputDateButton>
          </InputContainer>

          <InputContainer isResizable>
            <InputLabel>Hora</InputLabel>
            <InputDateButton
              onPress={() => handleOpenDateTimePickerComponent('time')}
            >
              <InputDateText>{dateTimeFormatted}</InputDateText>
            </InputDateButton>
          </InputContainer>
        </FormGroup>

        <DietToggle
          currentStatus={meal.dietStatus}
          onDietStatusChange={handleToggleDietStatus}
        />
      </Container>

      {showDateTimeComponent && (
        <DateTimePicker
          testID="dateTimePicker"
          mode={dateTimeMode}
          value={dateValue || new Date()}
          is24Hour
          onChange={handleDateTimeValueChange}
        />
      )}
    </>
  )
}
