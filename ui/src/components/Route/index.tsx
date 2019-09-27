/**
 * Vendor
 */

import * as React from "react";
import { Redirect, Route as ConnectedRoute } from 'react-router-dom';

/**
 * Api
 */

import { isAutorised } from '../../api/token';

export interface RouteProps {
    path: string,
    component: React.FC,
    exact?: boolean
}

const Route = ({path, component, exact=false}: RouteProps) => {
    if (isAutorised) return <ConnectedRoute path={path} component={component} exact={exact}/>;
    return <Redirect to="/login" />
}

export { Route };