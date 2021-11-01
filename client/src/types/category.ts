import { Article } from 'types';

export type Category = {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory[];
};

export type CategoryArticle = {
  articles: Article[];
};

export type ChildCategory = {
  name: string;
  urlPath: string;
};
