import * as React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";


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
        <div>
            {users.map(user => <div key={user.id} data-testid="user-item-test-id">{user.name}</div>)}
        </div>
    );
};
