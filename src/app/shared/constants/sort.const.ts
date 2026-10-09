export interface ISort {
  id: string
  name: string
}

export const SORT: ISort[] = [
  {
    id: 'genre',
    name: 'По жанру',
  },
    {
    id: 'title',
    name: 'По названию',
  },
    {
    id: 'rating',
    name: 'По рейтингу',
  },
]
