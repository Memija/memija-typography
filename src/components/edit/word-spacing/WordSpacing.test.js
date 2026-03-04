import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WordSpacing from './WordSpacing';

describe('WordSpacing Component', () => {
    test('renders without crashing', () => {
        render(<WordSpacing onChange={() => {}} />);
        expect(screen.getByText('Word spacing')).toBeInTheDocument();
    });

    test('calls onChange when input is changed', () => {
        const handleChange = jest.fn();
        render(<WordSpacing onChange={handleChange} />);
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '10' } });
        expect(handleChange).toHaveBeenCalledWith('10');
    });
});
