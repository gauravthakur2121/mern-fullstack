import React from 'react';
import { useUser } from './UserContext';

function Userlogindata() {
    const { user } = useUser();

    return (
        <div>
            {user ? (
                <h1>Welcome to {user.name}!</h1>
            ) : (
                <h1>Please log in.</h1>
            )}
        </div>
    );
}

export default Userlogindata;