export type Category = {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: { list: ChildCategory[] };
};

export type Article = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
  quantity: number;
};

export type ChildCategory = {
  name: string;
  urlPath: string;
};

export type Prices = {
  currency: string;
  regular: {
    value: number;
  };
};

export type Image = {
  path: string;
};

export type CategoryArticle = {
  articles: Article[];
};

export type Operation = 'decrease' | 'increase';
