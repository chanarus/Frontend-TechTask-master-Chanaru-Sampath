import { render } from '@testing-library/react';
import React from 'react';

import { Category } from '../../types';
import ArticleList from './index';

describe('ArticleList', () => {
  // Tests that the component renders correctly with categories and articles
  it('should render the component with categories and articles', () => {
    const categories: Array<Category> = [
      {
        name: 'Category 1',
        articleCount: 2,
        childrenCategories: {
          list: [
            {
              name: 'Child Category 1',
              urlPath: 'child-category-1',
            },
          ],
        },
        categoryArticles: {
          articles: [
            {
              name: 'Article 1',
              variantName: 'testVariant',
              prices: {
                regular: { value: 1000 },
                currency: 'EUR',
              },
              images: [
                {
                  path: 'image-1.jpg',
                },
              ],
            },
            {
              name: 'Article 2',
              variantName: 'testVariant',
              prices: {
                regular: { value: 2000 },
                currency: 'EUR',
              },
              images: [
                {
                  path: 'image-2.jpg',
                },
              ],
            },
          ],
        },
      },
    ];
    const { getByText, getByPlaceholderText, getAllByText } = render(
      <ArticleList categories={categories} />,
    );
    const header = getByText('home24');
    const searchInput = getByPlaceholderText('Search');
    const sidebar = getByText('Kategorien');
    const categoryLink = getByText('Child Category 1');
    const content = getAllByText(/Category 1/);
    const article1 = getByText('Article 1');
    const article2 = getByText('Article 2');
    expect(header).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(sidebar).toBeInTheDocument();
    expect(categoryLink).toBeInTheDocument();
    expect(content[0]).toBeInTheDocument();
    expect(article1).toBeInTheDocument();
    expect(article2).toBeInTheDocument();
  });

  // Tests that the component renders correctly with empty categories and shows loading message
  it('should render the component with empty categories and show loading message', () => {
    const categories: Array<Category> = [];
    const { getAllByText } = render(<ArticleList categories={categories} />);
    const loadingMessages = getAllByText('Loading...');
    expect(loadingMessages.length).toBe(2);
  });

  // Tests that the component renders correctly with empty categories and shows error message
  it('should render the component with empty categories and show error message', () => {
    const categories: Array<Category> = [];
    const { getAllByText } = render(<ArticleList categories={categories} />);
    const errorMessage = getAllByText('Loading...');
    expect(errorMessage.length).toBe(2);
  });

  // Tests that the component renders correctly with multiple categories and articles
  it('should render the component with multiple categories and articles', () => {
    const categories: Array<Category> = [
      {
        name: 'Category 1',
        articleCount: 2,
        childrenCategories: {
          list: [
            {
              name: 'Child Category 1',
              urlPath: 'child-category-1',
            },
          ],
        },
        categoryArticles: {
          articles: [
            {
              name: 'Article 1',
              prices: {
                regular: {
                  value: 1000,
                },
              },
              images: [
                {
                  path: 'image-1.jpg',
                },
              ],
            },
            {
              name: 'Article 2',
              prices: {
                regular: {
                  value: 2000,
                },
              },
              images: [
                {
                  path: 'image-2.jpg',
                },
              ],
            },
          ],
        },
      },
      {
        name: 'Category 2',
        articleCount: 0,
        childrenCategories: {
          list: [],
        },
        categoryArticles: {
          articles: [],
        },
      },
    ];
    render(<ArticleList categories={categories} />);
    const header = screen.getByText('home24');
    const searchInput = screen.getByPlaceholderText('Search');
    const sidebar = screen.getByText('Kategorien');
    const categoryLink = screen.getByText('Child Category 1');
    const content1 = screen.getByText(/Category 1 \(2\)/);
    const article1 = screen.getByText('Article 1');
    const article2 = screen.getByText('Article 2');
    const content2 = screen.getByText('Category 2 (0)');
    expect(header).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(sidebar).toBeInTheDocument();
    expect(categoryLink).toBeInTheDocument();
    expect(content1).toBeInTheDocument();
    expect(article1).toBeInTheDocument();
    expect(article2).toBeInTheDocument();
    expect(content2).toBeInTheDocument();
  });

  // Tests that the component renders correctly with multiple categories and no articles
  it('should render the component with multiple categories and no articles', () => {
    const categories = [
      {
        name: 'Category 1',
        articleCount: 0,
        childrenCategories: {
          list: [
            {
              name: 'Child Category 1',
              urlPath: 'child-category-1',
            },
          ],
        },
        categoryArticles: {
          articles: [],
        },
      },
      {
        name: 'Category 2',
        articleCount: 0,
        childrenCategories: {
          list: [],
        },
        categoryArticles: {
          articles: [],
        },
      },
    ];
    render(<ArticleList categories={categories} />);
    const header = screen.getByText('home24');
    const searchInput = screen.getByPlaceholderText('Search');
    const sidebar = screen.getByText('Kategorien');
    const categoryLink = screen.getByText('Child Category 1');
    const content1 = screen.getByText('Category 1 (0)');
    const content2 = screen.getByText('Category 2 (0)');
    expect(header).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(sidebar).toBeInTheDocument();
    expect(categoryLink).toBeInTheDocument();
    expect(content1).toBeInTheDocument();
    expect(content2).toBeInTheDocument();
  });

  // Tests that the component renders correctly with a long category name
  it('should render the component with a long category name', () => {
    const categories = [
      {
        name: 'This is a very long category name that should be truncated',
        articleCount: 0,
        childrenCategories: {
          list: [],
        },
        categoryArticles: {
          articles: [],
        },
      },
    ];
    render(<ArticleList categories={categories} />);
    const content = screen.getByText(
      'This is a very long category name that should be truncated (0)',
    );
    expect(content).toBeInTheDocument();
  });

  // Tests that the component renders correctly with a long article name
  it('should render the component with a long article name', () => {
    const categories = [
      {
        name: 'Category 1',
        articleCount: 1,
        childrenCategories: {
          list: [],
        },
        categoryArticles: {
          articles: [
            {
              name: 'This is a very long article name that should be truncated',
              prices: {
                regular: {
                  value: 1000,
                },
              },
              images: [
                {
                  path: 'image-1.jpg',
                },
              ],
            },
          ],
        },
      },
    ];
    render(<ArticleList categories={categories} />);
    const article = screen.getByText(
      'This is a very long article name that should be truncated',
    );
    expect(article).toBeInTheDocument();
  });

  // Tests that clicking on the 'Add to cart' button triggers the correct action
  it('should trigger the correct action when clicking on the Add to cart button', () => {
    const categories = [
      {
        name: 'Category 1',
        articleCount: 1,
        childrenCategories: {
          list: [],
        },
        categoryArticles: {
          articles: [
            {
              name: 'Article 1',
              prices: {
                regular: {
                  value: 1000,
                },
              },
              images: [
                {
                  path: 'image-1.jpg',
                },
              ],
            },
          ],
        },
      },
    ];
    const addToCart = jest.fn();
    render(<ArticleList categories={categories} addToCart={addToCart} />);
    const button = screen.getByRole('button', { name: 'Add to cart' });
    fireEvent.click(button);
    expect(addToCart).toHaveBeenCalledTimes(1);
  });

  // Tests that the component renders correctly with empty categories and shows loading message in sidebar
  it('should render the component with empty categories and show loading message in sidebar', () => {
    const categories = [];
    render(<ArticleList categories={categories} />);
    const loadingMessage = screen.getByText('Loading...');
    const sidebar = screen.getByText('Kategorien');
    expect(loadingMessage).toBeInTheDocument();
    expect(sidebar).toBeInTheDocument();
  });
});
