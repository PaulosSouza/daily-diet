export enum DietStatus {
  IN_DIET = 'in-diet',
  OFF_DIET = 'off-diet',
}

export interface Meal {
  id: number
  name: string
  description: string
  date: Date
  dateTime: Date
  dietStatus: DietStatus
}
