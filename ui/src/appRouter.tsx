/* 
* Vendor
**/

import * as React from 'react';
import { Switch } from 'react-router-dom';

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
        <Route path='/login' component={LoginForm}></Route>
    </Switch>
)

export { AppRouter }