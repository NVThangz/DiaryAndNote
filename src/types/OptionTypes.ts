

export type pinCode = {
    code: string[],
    quest: string,
    answer: string,
    enabled: boolean
  }
export type notification = {
  enabled: boolean,
  title: string,
  body: string,
  dayRepeat: number,
  date: string
}