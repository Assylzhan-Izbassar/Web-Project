export interface Post {
  id: number;
  authorID: number;
  parentID: number;
  title: string;
  summary: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: string;
}
