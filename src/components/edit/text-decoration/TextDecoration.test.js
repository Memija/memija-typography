import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextDecoration from './TextDecoration';

describe('TextDecoration Component', () => {
    test('renders without crashing', () => {
        render(<TextDecoration onChange={() => {}} />);
        expect(screen.getByText('Text decoration')).toBeInTheDocument();
    });

    test('calls onChange when select is changed', () => {
        const handleChange = jest.fn();
        render(<TextDecoration onChange={handleChange} />);
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'underline' } });
        expect(handleChange).toHaveBeenCalledWith('underline');
    });
});
