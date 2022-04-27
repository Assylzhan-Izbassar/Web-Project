export interface Comment {
  id: number;
  postID: number;
  parentID: number;
  title: string;
  published: boolean;
  createdAt: string;
  publishedAt: string;
  content: string;
}
