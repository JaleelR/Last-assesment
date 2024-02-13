import React from 'react'
import App from './App';
import { getByText, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
it('renders without crashing', () => {
    render((<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>));
    expect(getByText("Welcome to Silicon Valley's premier dive cafe!"))
});

// it('renders without crashing', () => {
//     render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
// });

