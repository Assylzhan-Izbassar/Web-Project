export interface Post {
  id: number;
  authorID: number;
  title: string;
  summary: string;
  createdAt: string;
  updatedAt?: string;
  content: string;
}
