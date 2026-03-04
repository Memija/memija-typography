import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CSSOutput from './CSSOutput';
import fileDownload from 'js-file-download';

jest.mock('js-file-download', () => jest.fn());

describe('CSSOutput Component', () => {
    const props = {
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

    test('renders without crashing', () => {
        render(<CSSOutput {...props} />);
        expect(screen.getByText(/color: red/i)).toBeInTheDocument();
        expect(screen.getByText(/font-size: 16px/i)).toBeInTheDocument();
    });

    test('saves file on button click', () => {
        render(<CSSOutput {...props} />);
        const button = screen.getByText('Save CSS data');
        fireEvent.click(button);
        expect(fileDownload).toHaveBeenCalled();
    });
});
