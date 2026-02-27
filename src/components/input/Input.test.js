import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input Component', () => {
    test('renders textarea with placeholder', () => {
        render(<Input onChange={() => {}} />);
        const textarea = screen.getByPlaceholderText('Start typing ...');
        expect(textarea).toBeInTheDocument();
    });

    test('calls onChange when typing', () => {
        const handleChange = jest.fn();
        render(<Input onChange={handleChange} />);
        const textarea = screen.getByPlaceholderText('Start typing ...');

        fireEvent.change(textarea, { target: { value: 'Hello' } });
        expect(handleChange).toHaveBeenCalledWith('Hello');
    });
});
