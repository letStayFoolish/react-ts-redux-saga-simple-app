export type PostState = {
  posts: Array<PostObjectType>;
  isLoading?: boolean;
  error?: string;
};

export type PostObjectType = {
  userId?: number;
  id: number;
  title: string;
  body: string;
};
