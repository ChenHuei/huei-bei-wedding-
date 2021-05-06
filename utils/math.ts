export const getRandomBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomInteger = (range: number, base: number = 0): number => {
  return base + Math.round(Math.random() * range)
}
