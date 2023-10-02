import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe("Test my-app", () => {

    test('Widgets presence', () => {

        render(<App/>);

        const hello = screen.getByText(/hello world/i);
        expect(hello).toBeInTheDocument();
        expect(hello).toMatchSnapshot();

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toMatchSnapshot();

        const input = screen.getByPlaceholderText(/input value/i);
        expect(input).toBeInTheDocument();
        expect(input).toMatchSnapshot();

        screen.debug();
    });

    test('Delayed widgets presence', async () => {

        render(<App/>);

        screen.debug();
        const dataElement = await screen.findByText(/data ready/i);
        expect(dataElement).toBeInTheDocument();
        screen.debug();

        const button = screen.getByRole("button");
        expect(button).toHaveStyle({color: 'red'});
    });

    it('CLICK EVENT', () => {

        render(<App/>);

        const button = screen.getByTestId("button-test-id");
        expect(button).toBeInTheDocument();

        expect(screen.queryByTestId("toggle-div-test-id")).toBeNull();
        fireEvent.click(button);
        expect(screen.queryByTestId("toggle-div-test-id")).toBeInTheDocument();
    })

    it('INPUT EVENT with fireEvent', () => {

        render(<App/>);

        const input = screen.getByTestId('input-test-id');
        expect(input).toBeInTheDocument();

        const h2 = screen.getByTestId('text-test-id');
        expect(h2).toContainHTML('');
        expect(h2).toHaveTextContent('');

        const testText = 'test input value';
        fireEvent.input(input, {
            target: {value: testText}
        });
        expect(h2).toContainHTML(testText);
        expect(h2).toHaveTextContent(testText);

        const text = screen.getByTestId("text-test-id");
        expect(text).toBeInTheDocument();
    })

    it('INPUT EVENT with userEvent', () => {

        render(<App/>);

        const input = screen.getByTestId('input-test-id');
        expect(input).toBeInTheDocument();

        const h2 = screen.getByTestId('text-test-id');
        expect(h2).toContainHTML('');
        expect(h2).toHaveTextContent('');

        const testText = 'test input value';
        userEvent.type(input, testText)
        expect(h2).toContainHTML(testText);
        expect(h2).toHaveTextContent(testText);

        const text = screen.getByTestId("text-test-id");
        expect(text).toBeInTheDocument();
    })
})
