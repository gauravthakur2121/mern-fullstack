
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loginuser, setloginuser] = useState(null); 


    return (
        <UserContext.Provider value={{loginuser, setloginuser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
