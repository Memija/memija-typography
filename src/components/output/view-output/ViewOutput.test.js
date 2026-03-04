import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ViewOutput from './ViewOutput';

describe('ViewOutput Component', () => {
    const props = {
        value: 'Hello World',
        color: 'red',
        direction: 'ltr',
        fontSize: '16px',
        letterSpacing: '1px',
        lineHeight: '1.5',
        textAlign: 'center',
        textDecoration: 'underline',
        textIndent: '10px',
        textOverflow: 'ellipsis',
        textShadow: '1px 1px 2px black',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        wordSpacing: '2px',
    };

    test('renders with correct styles and value', () => {
        render(<ViewOutput {...props} />);
        const element = screen.getByText('Hello World');
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyle('color: red');
        expect(element).toHaveStyle('font-size: 16px');
        expect(element).toHaveStyle('text-align: center');
    });
});
