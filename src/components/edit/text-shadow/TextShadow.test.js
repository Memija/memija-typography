import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextShadow from './TextShadow';

describe('TextShadow Component', () => {
    test('renders without crashing', () => {
        render(<TextShadow onChange={() => {}} />);
        expect(screen.getByText('Text shadow')).toBeInTheDocument();
    });

    test('calls onChange when input is changed', () => {
        const handleChange = jest.fn();
        const { container } = render(<TextShadow onChange={handleChange} />);
        const horizontalInput = container.querySelector('#text-shadow-horizontal');
        fireEvent.change(horizontalInput, { target: { value: '2' } });
        expect(handleChange).toHaveBeenCalled();
    });
});
