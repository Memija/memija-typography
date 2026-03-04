import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
    test('renders without crashing', () => {
        render(<Header />);
        const img = screen.getByAltText('Brand logo');
        expect(img).toBeInTheDocument();
    });
});
