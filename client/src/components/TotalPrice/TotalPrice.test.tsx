import { render } from '@testing-library/react';
import React from 'react';

import TotalPrice from './TotalPrice';

describe('TotalPrice', () => {
  // Tests that the component renders with the correct class name and the amount is formatted correctly
  it('should render with correct class name and formatted amount', () => {
    const { getByText, container } = render(<TotalPrice amount={1000} />);
    expect(container.firstChild).toHaveClass('totalPrice');
    expect(getByText('Total: $1,000.00')).toBeInTheDocument();
  });

  // Tests that the component renders with a zero amount
  it('should render with zero amount', () => {
    const { getByText } = render(<TotalPrice amount={0} />);
    expect(getByText('Total: $0.00')).toBeInTheDocument();
  });

  // Tests that the component renders with a large amount (e.g. 1 million)
  it('should render with large amount', () => {
    const { getByText } = render(<TotalPrice amount={1000000} />);
    expect(getByText('Total: $1,000,000.00')).toBeInTheDocument();
  });

  // Tests that the component renders with a small amount (e.g. 0.01)
  it('should render with small amount', () => {
    const { getByText } = render(<TotalPrice amount={0.01} />);
    expect(getByText('Total: $0.01')).toBeInTheDocument();
  });
});
