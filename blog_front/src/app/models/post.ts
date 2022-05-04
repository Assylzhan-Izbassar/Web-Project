export interface Post {
  id: number;
  author_id: number;
  title: string;
  summary: string;
  createdAt: Date;
  updatedAt?: string;
  content: string;
}
