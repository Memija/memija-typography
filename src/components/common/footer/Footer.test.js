import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer Component', () => {
    test('renders without crashing', () => {
        render(<Footer />);
        expect(screen.getByText(/Version/i)).toBeInTheDocument();
        expect(screen.getByText(/Email/i)).toBeInTheDocument();
    });
});
