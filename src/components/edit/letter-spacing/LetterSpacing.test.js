import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LetterSpacing from './LetterSpacing';

describe('LetterSpacing Component', () => {
    test('renders without crashing', () => {
        render(<LetterSpacing onChange={() => {}} />);
        expect(screen.getByText('Letter spacing')).toBeInTheDocument();
    });

    test('calls onChange when input is changed', () => {
        const handleChange = jest.fn();
        render(<LetterSpacing onChange={handleChange} />);
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '2' } });
        expect(handleChange).toHaveBeenCalledWith('2');
    });
});
