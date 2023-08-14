import { render } from '@testing-library/react';
import React from 'react';

import Layout from '.';

describe('Layout', () => {
  // Tests that Navbar, Sidebar, children and Footer components are rendered
  it('should render Navbar, Sidebar, children and Footer components', () => {
    const { getByRole } = render(
      <Layout>
        <div>Test</div>
      </Layout>,
    );
    expect(getByRole('header')).toBeInTheDocument();
    expect(getByRole('complementary')).toBeInTheDocument();
    expect(getByRole('main')).toBeInTheDocument();
    expect(getByRole('contentinfo')).toBeInTheDocument();
  });

  // Tests that children prop is passed to the Layout component
  it('should pass children prop to Layout component', () => {
    const { getByText } = render(
      <Layout>
        <div>Test</div>
      </Layout>,
    );
    expect(getByText('Test')).toBeInTheDocument();
  });
});
