import * as React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


export const Users = () => {

    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div data-testid={'users-page-testid'}>
            {users.map(user => <Link
                to='/users/${user.id}'
                key={user.id}
                data-testid='user-item-test-id'>
                {user.name}
            </Link>)}
        </div>
    );
};
