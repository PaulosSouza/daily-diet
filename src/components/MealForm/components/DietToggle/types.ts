import { DietStatus } from '@models/MealModel'

export interface DietToggleProps {
  currentStatus?: DietStatus
  onDietStatusChange(newStatus: DietStatus): void
}

export interface ButtonOptionStyleProps {
  dietStatus?: DietStatus
}
