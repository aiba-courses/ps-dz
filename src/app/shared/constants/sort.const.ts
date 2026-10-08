export interface ISort {
  key: string
  value: string
  label: string
}

export const sort: ISort[] = [
  {
    key: 'genre',
    value: 'genre',
    label: 'По жанру',
  },
    {
    key: 'title',
    value: 'title',
    label: 'По названию',
  },
    {
    key: 'rating',
    value: 'rating',
    label: 'По рейтингу',
  },
]
