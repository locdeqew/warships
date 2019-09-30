/**
 * Vendors
 */

import * as React from 'react';

/**
 * Styles
 */
import styles from './styles.module.css'

export interface LayoutProps {
    contentChildren: React.FC,
    props?: Object
}

const Header: React.FC = () => (
    <header>
        Header
    </header>
);

const Footer: React.FC = () => (
    <footer>
        Footer
    </footer>
)

const Layout = ({ contentChildren, props={} }: LayoutProps) => (
    <>
        <Header />
        {contentChildren(props)}
        <Footer />
    </>
)

export { Layout };