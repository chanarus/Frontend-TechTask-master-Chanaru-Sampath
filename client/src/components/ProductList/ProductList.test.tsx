import { render } from '@testing-library/react';
import React from 'react';

import ProductList from './index';

test('renders the ProductList', () => {
  const { getByText } = render(<ProductList />);
  const linkElement = getByText(/home24/i);
  expect(linkElement).toBeInTheDocument();
});
