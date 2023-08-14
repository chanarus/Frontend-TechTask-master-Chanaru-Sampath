import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Cart from './Cart';

describe('Cart', () => {
  // Tests that the Cart component renders without crashing
  it('should render without crashing', () => {
    render(<Cart />);
  });

  // Tests that the Cart component displays the correct title
  it('should display the correct title', () => {
    const { getByText } = render(<Cart />);
    const title = getByText('Cart');
    expect(title).toBeInTheDocument();
  });

  // Tests that the Cart component displays the correct product name, image, and quantity
  it('should display the correct product name, image, and quantity', () => {
    const product = {
      name: 'Test Product',
      variantName: 'Test Variant',
      prices: {
        regular: {
          value: 1000,
        },
      },
      images: [
        {
          path: 'test-image.jpg',
        },
      ],
      quantity: 2,
    };
    const cart = {
      'test-product': product,
    };
    const { getByText, getByAltText, getByDisplayValue } = render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
    );
    const productName = getByText(product.name);
    const productImage = getByAltText(product.name);
    const productQuantity = getByDisplayValue(product.quantity.toString());
    expect(productName).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(productQuantity).toBeInTheDocument();
  });
});
