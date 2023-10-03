import {render, screen} from '@testing-library/react';
import {Users} from "./Users";
import axios from "axios";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import {renderWithRouter} from "../tests/helpers/renderWithRouter";

jest.mock('axios');

describe('Users test', () => {

    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: "First"
                },
                {
                    id: 2,
                    name: "Second"
                },
                {
                    id: 3,
                    name: "Third"
                },
            ]
        }

        axios.get.mockReturnValue(response);
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Test users list', async () => {

        render(<MemoryRouter>
            <Users/>
        </MemoryRouter>)

        const users = await screen.findAllByTestId('user-item-test-id');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    })

    it('Test redirect to details page', async () => {

        // render(<MemoryRouter initialEntries={['/users']}>
        //     <Routes>
        //         <Route path={'/users'} element={<Users/>}/>
        //         <Route path={'/users/:id'} element={<UserDetailsPage/>}/>
        //     </Routes>
        // </MemoryRouter>)

        // render(<MemoryRouter>
        //     <AppRouter/>
        //     <Users/>
        // </MemoryRouter>)

        renderWithRouter(null, '/users');

        const users = await screen.findAllByTestId('user-item-test-id');
        expect(users.length).toBe(3);
        screen.debug();

        await userEvent.click(users[0]);
        expect(screen.getByTestId('user-details-page-testid')).toBeInTheDocument()
        screen.debug();
    })
})
