/**
 * Vendor
 */

import * as React from "react";
import { Redirect, Route as ConnectedRoute } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Store
 */

import { AppState } from "../../store/reducers";

export interface RouteProps {
    path: string,
    component: React.FC,
    logged: boolean,
    exact?: boolean
}

const RouteComponent = ({path, component, logged, exact=false}: RouteProps) => {
    if (logged) return <ConnectedRoute path={path} component={component} exact={exact}/>;
    return <Redirect to="/login" />
}

const mapStateToProps = ({auth}: AppState) => ({
    logged: auth.logged
});

const Route = connect(mapStateToProps, null)(RouteComponent);

export { Route };