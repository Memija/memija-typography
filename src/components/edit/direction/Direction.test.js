import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Direction from './Direction';

describe('Direction Component', () => {
    test('renders without crashing', () => {
        render(<Direction onChange={() => {}} />);
        expect(screen.getByText('Direction')).toBeInTheDocument();
    });

    test('calls onChange when direction is changed', () => {
        const handleChange = jest.fn();
        render(<Direction onChange={handleChange} />);
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'rtl' } });
        expect(handleChange).toHaveBeenCalledWith('rtl');
    });
});
