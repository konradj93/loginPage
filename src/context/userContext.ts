import React from 'react';
import { UserContextInterface } from '../interfaces/interfaces';

const UserContext = React.createContext<UserContextInterface>({isAuth:false, setAuth(auth: boolean) {
    }});

export const UserContextProvider = UserContext.Provider;

export default UserContext;