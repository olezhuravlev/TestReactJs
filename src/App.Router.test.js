import {render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import {renderTestAppNoInitsNoAppRouter} from "./tests/helpers/renderTestAppNoInitsNoAppRouter";

describe("Test Router", () => {
    it('Test', async () => {

        renderTestAppNoInitsNoAppRouter(<App/>);

        screen.debug();
        const mainLink = screen.getByTestId('main-link-testid');
        const aboutLink = screen.getByTestId('about-link-testid');
        expect(mainLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();

        screen.debug();
        await userEvent.click(aboutLink);
        screen.debug();
        expect(screen.getByTestId('about-page-testid')).toBeInTheDocument();

        screen.debug();
        await userEvent.click(mainLink);
        expect(screen.getByTestId('main-page-testid')).toBeInTheDocument();
    })
    it('Test Error page', async () => {

        render(<MemoryRouter initialEntries={['/aadfafaas']}>
            <App/>
        </MemoryRouter>);

        screen.debug();
        expect(screen.getByTestId('error-page-testid')).toBeInTheDocument();
    })
})
