import { REGULATORS } from './types'

export function resolveRegulator(value: string) {
  const normalizedValue = value.trim().toLowerCase()
  return REGULATORS.find((regulator) => regulator.code === normalizedValue)
}
