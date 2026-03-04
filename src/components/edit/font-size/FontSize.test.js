import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FontSize from './FontSize';

describe('FontSize Component', () => {
    test('renders without crashing', () => {
        render(<FontSize onChange={() => {}} />);
        expect(screen.getByText('Font size')).toBeInTheDocument();
    });

    test('calls onChange when font size is changed', () => {
        const handleChange = jest.fn();
        render(<FontSize onChange={handleChange} />);
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: '16px' } });
        expect(handleChange).toHaveBeenCalledWith('16px');
    });
});
