import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Color from './Color';

describe('Color Component', () => {
    test('renders color input', () => {
        render(<Color onChange={() => {}} />);
        const input = screen.getByTestId('color-input');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'color');
    });

    test('calls onChange when color is selected', () => {
        const handleChange = jest.fn();
        render(<Color onChange={handleChange} />);
        const input = screen.getByTestId('color-input');

        fireEvent.change(input, { target: { value: '#ff0000' } });
        expect(handleChange).toHaveBeenCalledWith('#ff0000');
    });
});
