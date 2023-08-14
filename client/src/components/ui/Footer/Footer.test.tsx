import { render } from '@testing-library/react';
import React from 'react';

import Footer from '.';

describe('Footer', () => {
  // Tests that Footer component renders without errors
  it('should render without errors', () => {
    render(<Footer />);
  });

  // Tests that Footer displays correct text
  it('should display correct text', () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText(
        'Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.',
      ),
    ).toBeInTheDocument();
  });
});
