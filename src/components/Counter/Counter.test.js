import Counter from "./Counter";
import {render} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";
import {renderWithRedux} from "../../tests/helpers/renderWithRedux";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Tests Counter', () => {
    it('Test Counter without initial value', async () => {

        const {getByTestId} = render(
            <Provider store={createReduxStore()}>
                <Counter/>
            </Provider>
        );

        const dataHeader1 = getByTestId('h1-testid')
        expect(dataHeader1).toBeInTheDocument();
        expect(dataHeader1).toHaveTextContent(/value =/i);

        const incrementButton = getByTestId('increment-button-testid')
        expect(incrementButton).toBeInTheDocument();
        await userEvent.click(incrementButton);
        expect(dataHeader1).toHaveTextContent(/value = 1/i);

        const decrementButton = getByTestId('decrement-button-testid')
        expect(decrementButton).toBeInTheDocument();
        await userEvent.click(decrementButton);
        await userEvent.click(decrementButton);
        expect(dataHeader1).toHaveTextContent(/value = -1/i);
    })

    it('Test Counter with initial value', async () => {

        const {getByTestId} = render(
            <Provider store={createReduxStore({
                counter: {
                    value: 10
                }
            })}>
                <Counter/>
            </Provider>
        );

        const dataHeader1 = getByTestId('h1-testid')
        expect(dataHeader1).toBeInTheDocument();
        expect(dataHeader1).toHaveTextContent(/value =/i);

        const incrementButton = getByTestId('increment-button-testid')
        expect(incrementButton).toBeInTheDocument();
        await userEvent.click(incrementButton);
        expect(dataHeader1).toHaveTextContent(/value = 11/i);

        const decrementButton = getByTestId('decrement-button-testid')
        expect(decrementButton).toBeInTheDocument();
        await userEvent.click(decrementButton);
        await userEvent.click(decrementButton);
        expect(dataHeader1).toHaveTextContent(/value = 9/i);
    })

    it('Test Counter with using renderWithRedux helper', async () => {

        const {getByTestId} = renderWithRedux(<Counter/>, {
            counter: {
                value: 999
            }
        });

        const dataHeader1 = getByTestId('h1-testid')
        expect(dataHeader1).toBeInTheDocument();
        expect(dataHeader1).toHaveTextContent(/value =/i);

        const incrementButton = getByTestId('increment-button-testid')
        expect(incrementButton).toBeInTheDocument();
        await userEvent.click(incrementButton);
        expect(dataHeader1).toHaveTextContent(/value = 1000/i);

        const decrementButton = getByTestId('decrement-button-testid')
        expect(decrementButton).toBeInTheDocument();
        await userEvent.click(decrementButton);
        await userEvent.click(decrementButton);
        expect(dataHeader1).toHaveTextContent(/value = 998/i);
    })

    it('Test Counter with using renderTestApp helper', async () => {

        const {getByTestId} = renderTestApp(null, {
            initialRoute: '/',
            initialState: {
                counter: {
                    value: 666
                }
            }
        });

        const dataHeader1 = getByTestId('h1-testid')
        expect(dataHeader1).toBeInTheDocument();
        expect(dataHeader1).toHaveTextContent(/value =/i);

        const incrementButton = getByTestId('increment-button-testid')
        expect(incrementButton).toBeInTheDocument();
        await userEvent.click(incrementButton);
        expect(dataHeader1).toHaveTextContent(/value = 667/i);

        const decrementButton = getByTestId('decrement-button-testid')
        expect(decrementButton).toBeInTheDocument();
        await userEvent.click(decrementButton);
        await userEvent.click(decrementButton);
        expect(dataHeader1).toHaveTextContent(/value = 665/i);
    })
})
