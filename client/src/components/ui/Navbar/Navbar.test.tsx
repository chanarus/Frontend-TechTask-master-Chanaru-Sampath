import { render } from '@testing-library/react';
import React from 'react';

import Navbar from '.';

describe('Navbar', () => {
  // Tests that the Navbar component can be rendered without crashing
  it('should render Navbar without crashing', () => {
    render(<Navbar />);
  });

  // Tests that the Navbar header contains the 'home24' text
  it('should contain home24 text', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('home24')).toBeInTheDocument();
  });

  // Tests that the Navbar header contains an input field with the placeholder 'Search'
  it('should contain input field with placeholder Search', () => {
    const { getByPlaceholderText } = render(<Navbar />);
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  // Tests that the className prop is correctly applied to the header element
  it('should have className prop applied to header element', () => {
    const { container } = render(<Navbar />);
    expect(container.firstChild).toHaveClass('header');
  });
});
