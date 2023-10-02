import {screen, render} from '@testing-library/react';
import {Users} from "./Users";
import axios from "axios";

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
    })

    it('Test', async () => {

        axios.get.mockReturnValue(response);

        render(<Users/>)

        const users = await screen.findAllByTestId('user-item-test-id');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    })
})
