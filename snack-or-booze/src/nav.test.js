import React from 'react'
import Nav from './NavBar';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    render(<MemoryRouter><Nav /></MemoryRouter>)
}); 

