import React from 'react';

import { usePromotionContext } from '../../providers/CategoryContextProvider';
import ArticleCard from '../ArticleCard';

interface ArticleListProps {}

const ArticleList = () => {
  const { categories } = usePromotionContext();

  const articles = categories.map((category) => {
    return category.categoryArticles.articles.map((article, i) => {
      return <ArticleCard key={i} article={article} />;
    });
  });

  return (
    <div className={'content'}>
      {categories.length ? (
        <h1>
          {categories[0].name}
          <small> ({categories[0].articleCount})</small>
        </h1>
      ) : (
        'Loading...'
      )}
      <div className={'articles'}>{articles}</div>
    </div>
  );
};

export default ArticleList;
