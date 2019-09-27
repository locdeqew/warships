/* 
* Vendor
**/

import * as React from 'react';
import { Switch, Route as ConnectedRoute } from 'react-router-dom';

/**
 * Components
 */

import { 
    Route,
    Dashboard, 
    LoginForm
} from './components';



const AppRouter: React.FC = () => (
    <Switch>
        <Route path='/' component={Dashboard} exact></Route>
        <ConnectedRoute path='/login' component={LoginForm}></ConnectedRoute>
    </Switch>
)

export { AppRouter }