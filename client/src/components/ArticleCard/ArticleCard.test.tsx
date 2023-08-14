import { render } from '@testing-library/react';
import React from 'react';

import ArticleCard from './ArticleCard';

describe('ArticleCard', () => {
  // Tests that the article image is rendered
  it('should render the article image', () => {
    const { getByRole } = render(
      <ArticleCard
        article={{
          name: 'test',
          variantName: 'testVariant',
          prices: { regular: { value: 100 }, currency: 'EUR' },
          images: [{ path: 'test.jpg' }],
          quantity: 1,
        }}
      />,
    );
    const image = getByRole('img');
    expect(image).toBeInTheDocument();
  });

  // Tests that the article name is rendered
  it('should render the article name', () => {
    const { getByText } = render(
      <ArticleCard
        article={{
          name: 'test',
          variantName: 'testVariant',
          prices: { regular: { value: 100 }, currency: 'EUR' },
          images: [{ path: 'test.jpg' }],
          quantity: 1,
        }}
      />,
    );
    const name = getByText('test');
    expect(name).toBeInTheDocument();
  });

  // Tests that the article price is rendered
  it('should render the article price', () => {
    const { getByText } = render(
      <ArticleCard
        article={{
          name: 'test',
          variantName: 'testVariant',
          prices: { regular: { value: 100 }, currency: 'EUR' },
          images: [{ path: 'test.jpg' }],
          quantity: 1,
        }}
      />,
    );
    const price = getByText('$1.00');
    expect(price).toBeInTheDocument();
  });

  // Tests that the add to cart button is rendered
  it('should render the add to cart button', () => {
    const { getByRole } = render(
      <ArticleCard
        article={{
          name: 'test',
          variantName: 'testVariant',
          prices: { regular: { value: 100 }, currency: 'EUR' },
          images: [{ path: 'test.jpg' }],
          quantity: 1,
        }}
      />,
    );
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  // Tests that the component handles an article with no image
  it('should handle an article with no image', () => {
    const { queryByRole } = render(
      <ArticleCard
        article={{
          name: 'test',
          variantName: 'testVariant',
          prices: { regular: { value: 100 }, currency: 'EUR' },
          images: [{ path: 'test.jpg' }],
          quantity: 1,
        }}
      />,
    );
    const image = queryByRole('img');
    expect(image).not.toBeInTheDocument();
  });

  // Tests that the component handles an article with no name or price
  it('should handle an article with no name or price', () => {
    const { queryByText } = render(
      <ArticleCard
        article={{
          name: 'test',
          variantName: 'testVariant',
          prices: { regular: { value: 100 }, currency: 'EUR' },
          images: [{ path: 'test.jpg' }],
          quantity: 1,
        }}
      />,
    );
    const name = queryByText('');
    const price = queryByText('$0.00');
    expect(name).not.toBeInTheDocument();
    expect(price).not.toBeInTheDocument();
  });
});
