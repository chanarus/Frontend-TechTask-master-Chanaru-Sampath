import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Category } from '../types';

interface CategoryContextValue {
  categories: Array<Category>;
}

const CategoryContext = createContext<CategoryContextValue>(
  {} as CategoryContextValue,
);

const CategoryContextProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/graphql');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(
      JSON.stringify({
        query: `{
          categories: productLists(ids: "156126", locale: de_DE) {
              name
              articleCount
              childrenCategories: childrenProductLists {
                  list {
                      name
                      urlPath
                  }
              }
              categoryArticles: articlesList(first: 50) {
                  articles {
                    name
                    variantName
                    prices {
                      currency
                      regular {
                        value
                      }
                    }
                    images(
                      format: WEBP
                      maxWidth: 200
                      maxHeight: 200
                      limit: 1
                    ) {
                      path
                    }
                  }
              }
          }
      }`,
      }),
    );

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        setCategories(response.data.categories);
      }
    };
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const usePromotionContext = (): CategoryContextValue =>
  useContext(CategoryContext);

export default CategoryContextProvider;
