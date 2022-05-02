export interface Post {
  id: number;
  authorID: number;
  parentID?: number;
  title: string;
  summary: string;
  published: boolean;
  createdAt: string;
  updatedAt?: string;
  publishedAt?: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 0,
    authorID: 0,
    title: 'My first post',
    summary: 'Your source for breaking news, photos, and videos about New York, sports, business, entertainment, opinion, real estate, culture, fashion, and more.',
    published: true,
    createdAt: Date().toString(),
    content: 'Steven Mendez, 17, accused of shooting 21-year-old Saikou Koma in the head during a botched gang hit last year, was set free Tuesday when Supreme Court Justice Naita Semaj dismissed the indictment against him.'
  },
  {
    id: 1,
    authorID: 0,
    title: 'My second post',
    summary: 'Your source for breaking news, photos, and videos about New York, sports, business, entertainment, opinion, real estate, culture, fashion, and more.',
    published: true,
    createdAt: Date().toString(),
    content: 'Steven Mendez, 17, accused of shooting 21-year-old Saikou Koma in the head during a botched gang hit last year, was set free Tuesday when Supreme Court Justice Naita Semaj dismissed the indictment against him.'
  },
  {
    id: 2,
    authorID: 1,
    title: 'Hello, world!',
    summary: 'Your source for breaking news, photos, and videos about New York, sports, business, entertainment, opinion, real estate, culture, fashion, and more.',
    published: true,
    createdAt: Date().toString(),
    content: 'Steven Mendez, 17, accused of shooting 21-year-old Saikou Koma in the head during a botched gang hit last year, was set free Tuesday when Supreme Court Justice Naita Semaj dismissed the indictment against him.'
  }
];
