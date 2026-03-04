import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextTransform from './TextTransform';

describe('TextTransform Component', () => {
    test('renders without crashing', () => {
        render(<TextTransform onChange={() => {}} />);
        expect(screen.getByText('Text transform')).toBeInTheDocument();
    });

    test('calls onChange when select is changed', () => {
        const handleChange = jest.fn();
        render(<TextTransform onChange={handleChange} />);
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'uppercase' } });
        expect(handleChange).toHaveBeenCalledWith('uppercase');
    });
});
