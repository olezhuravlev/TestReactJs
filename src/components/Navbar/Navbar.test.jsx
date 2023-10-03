import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";
import {screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('Navbar test', () => {

        it('Test About page link', async () => {

            renderWithRouter(<Navbar/>);

            const aboutLink = screen.getByTestId('about-link-testid');
            expect(aboutLink).toBeInTheDocument();

            await userEvent.click(aboutLink);
            expect(screen.getByTestId('about-page-testid')).toBeInTheDocument();
            screen.debug();
        })

        it('Test Main page link', async () => {

            renderWithRouter(<Navbar/>);

            const mainLink = screen.getByTestId('main-link-testid');
            expect(mainLink).toBeInTheDocument();

            await userEvent.click(mainLink);
            expect(screen.getByTestId('main-page-testid')).toBeInTheDocument();
            screen.debug();
        })

        it('Test Users page link', async () => {

            renderWithRouter(<Navbar/>);

            const usersLink = screen.getByTestId('users-link-testid');
            expect(usersLink).toBeInTheDocument();
            screen.debug();

            await userEvent.click(usersLink);
            expect(screen.getByTestId('users-page-testid')).toBeInTheDocument();
            screen.debug();
        })
    }
)
