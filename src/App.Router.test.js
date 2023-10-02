import {render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe("Test Router", () => {
    it('Test', async () => {

        render(<App/>);

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
})
