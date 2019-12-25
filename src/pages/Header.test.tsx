import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
    const { getByText } = render(<Header />);
    const queryByTest = getByText('CompanyLogo');
    expect(queryByTest).toBeInTheDocument();
});
