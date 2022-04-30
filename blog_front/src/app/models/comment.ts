export interface Comment {
  id: number;
  postID: number;
  parentID?: number;
  title: string;
  publishedAt: string;
  content: string;
}

export const comments: Comment[] = [
  {
    id: 0,
    postID: 0,
    title: 'Some title',
    publishedAt: Date().toString(),
    content: 'Post is good'
  }
]

