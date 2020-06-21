import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import {useContext, useEffect} from 'react';
import history from '../../history';
import UserContext from '../../context/userContext';



export const PrivateRoute: React.FC<RouteProps> = props => {
    const {isAuth} = useContext(UserContext);
    let redirectPath = '';

    useEffect(()=>{
        if(!isAuth){
            history.push('/');
        }
    }, [isAuth]);

    if (redirectPath) {
        const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
        return <Route {...props} component={renderComponent} render={undefined} />;
    } else {
        return <Route {...props} />;
    }
};

export default PrivateRoute;
