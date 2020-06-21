import React, {useState} from 'react';
import { Switch, Route } from 'react-router';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFound from './pages/NotFound/NotFound';
import { UserContextProvider } from './context/userContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';


const App: React.FC = _ => {
    const [isAuth, setAuthorization] = useState<boolean>(false);
    const setAuth = (auth:boolean):void => {
        setAuthorization(auth)
    }
    return <UserContextProvider value={{
        isAuth,
        setAuth
    }}>
        <Switch>
            <Route path='/login' component={LoginPage} />
            <PrivateRoute
                path='/dashboard'
                component={Dashboard}
            />
            <Route component={NotFound}/>
        </Switch>;
    </UserContextProvider>

}

export default App;
