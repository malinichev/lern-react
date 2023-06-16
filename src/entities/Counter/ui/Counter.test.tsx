import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('Test increment', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        userEvent.click(screen.getByTestId('value-inc-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('Test decrement', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        userEvent.click(screen.getByTestId('value-dec-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
