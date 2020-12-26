export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
export type gridType = Array<Array<[number, number]>>;
export type stepsType = Array<[[number, number], [number, number], boolean]>;