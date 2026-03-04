import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextAlign from './TextAlign';

describe('TextAlign Component', () => {
    test('renders without crashing', () => {
        render(<TextAlign onChange={() => {}} />);
        expect(screen.getByText('Text align')).toBeInTheDocument();
    });

    test('calls onChange when left is clicked', () => {
        const handleChange = jest.fn();
        const { container } = render(<TextAlign onChange={handleChange} />);
        const leftBtn = container.querySelector('.fa-align-left').parentElement;
        fireEvent.click(leftBtn);
        expect(handleChange).toHaveBeenCalledWith('left');
    });

    test('calls onChange when right is clicked', () => {
        const handleChange = jest.fn();
        const { container } = render(<TextAlign onChange={handleChange} />);
        const rightBtn = container.querySelector('.fa-align-right').parentElement;
        fireEvent.click(rightBtn);
        expect(handleChange).toHaveBeenCalledWith('right');
    });

    test('calls onChange when center is clicked', () => {
        const handleChange = jest.fn();
        const { container } = render(<TextAlign onChange={handleChange} />);
        const centerBtn = container.querySelector('.fa-align-center').parentElement;
        fireEvent.click(centerBtn);
        expect(handleChange).toHaveBeenCalledWith('center');
    });

    test('calls onChange when justify is clicked', () => {
        const handleChange = jest.fn();
        const { container } = render(<TextAlign onChange={handleChange} />);
        const justifyBtn = container.querySelector('.fa-align-justify').parentElement;
        fireEvent.click(justifyBtn);
        expect(handleChange).toHaveBeenCalledWith('justify');
    });
});
