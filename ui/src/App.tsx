/**
 * Vendor
 */

import * as React from 'react';

/**
 * Components
 */

import { Layout } from './components';
import { AppRouter } from './appRouter';

const App: React.FC = () => (
    <Layout contentChildren={AppRouter}/>
)

export { App };