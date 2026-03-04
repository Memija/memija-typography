import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextOverflow from './TextOverflow';

describe('TextOverflow Component', () => {
    test('renders without crashing', () => {
        render(<TextOverflow onChange={() => {}} />);
        expect(screen.getByText('Text overflow')).toBeInTheDocument();
    });

    test('calls onChange when select is changed', () => {
        const handleChange = jest.fn();
        render(<TextOverflow onChange={handleChange} />);
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'clip' } });
        expect(handleChange).toHaveBeenCalledWith('clip');
    });
});
