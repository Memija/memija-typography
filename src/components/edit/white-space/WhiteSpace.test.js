import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhiteSpace from './WhiteSpace';

describe('WhiteSpace Component', () => {
    test('renders without crashing', () => {
        render(<WhiteSpace onChange={() => {}} />);
        expect(screen.getByText('White Space')).toBeInTheDocument();
    });

    test('calls onChange when select is changed', () => {
        const handleChange = jest.fn();
        render(<WhiteSpace onChange={handleChange} />);
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'nowrap' } });
        expect(handleChange).toHaveBeenCalledWith('nowrap');
    });
});
