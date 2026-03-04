import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextIndent from './TextIndent';

describe('TextIndent Component', () => {
    test('renders without crashing', () => {
        render(<TextIndent onChange={() => {}} />);
        expect(screen.getByText('Text indent')).toBeInTheDocument();
    });

    test('calls onChange when input is changed', () => {
        const handleChange = jest.fn();
        render(<TextIndent onChange={handleChange} />);
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '10' } });
        expect(handleChange).toHaveBeenCalledWith('10');
    });
});
