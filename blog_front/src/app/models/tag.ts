export interface Tag {
  id: number;
  title: string;
  content?: string;
}

export const tags: Tag[] = [
  {
    id: 0,
    title: 'Self'
  },
  {
    id: 1,
    title: 'Relationships'
  },
  {
    id: 2,
    title: 'Data Science'
  },
  {
    id: 3,
    title: 'Programming'
  }
]
