export interface IGenre {
  key: string
  value: string
  label: string
}

export const genres = [
  {
    key: 'all',
    value: 'all',
    label: 'Все',
  },
  {
    key: 'melodrama',
    value: 'melodrama',
    label: 'Мелодрама',
  },
  {
    key: 'fiction',
    value: 'fiction',
    label: 'Фантастика',
  },
  {
    key: 'action',
    value: 'action',
    label: 'Боевик',
  },
  {
    key: 'thriller',
    value: 'thriller',
    label: 'Триллер',
  },
  {
    key: 'detective',
    value: 'detective',
    label: 'Детектив',
  },
];
