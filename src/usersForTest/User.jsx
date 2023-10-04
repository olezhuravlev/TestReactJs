import React from 'react';

const User = ({user, onDelete}) => {
    return (
        <div>
            {user.name}
            <button id='user-delete' onClick={() => onDelete(user.id)}>DEL</button>
        </div>
    );
};

export default User;
