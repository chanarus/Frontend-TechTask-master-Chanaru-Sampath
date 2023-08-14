import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
  // Tests that the BrowserRouter component is rendered
  it('should render BrowserRouter component', () => {
    const { getByRole } = render(<App />);
    const browserRouter = getByRole('navigation');
    expect(browserRouter).toBeInTheDocument();
  });

  // Tests that the CategoryContextProvider component is rendered
  it('should render CategoryContextProvider component', () => {
    const { getByTestId } = render(<App />);
    const categoryContextProvider = getByTestId('category-context-provider');
    expect(categoryContextProvider).toBeInTheDocument();
  });

  // Tests that the Routes component is rendered
  it('should render Routes component', () => {
    const { getByRole } = render(<App />);
    const routes = getByRole('region');
    expect(routes).toBeInTheDocument();
  });

  // Tests that the Route component is rendered with path='/' and element={<ProductList />}
  it("should render Route component with path='/' and element={<ProductList />}", () => {
    const { getByRole } = render(<App />);
    const productListRoute = getByRole('article', { name: 'ProductList' });
    expect(productListRoute).toBeInTheDocument();
  });
});
