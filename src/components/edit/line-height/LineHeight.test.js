import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LineHeight from './LineHeight';

describe('LineHeight Component', () => {
    test('renders without crashing', () => {
        render(<LineHeight onChange={() => {}} />);
        expect(screen.getByText('Line height')).toBeInTheDocument();
    });

    test('calls onChange when input is changed', () => {
        const handleChange = jest.fn();
        render(<LineHeight onChange={handleChange} />);
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '2' } });
        expect(handleChange).toHaveBeenCalledWith('2');
    });
});
