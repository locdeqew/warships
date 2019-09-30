/**
 * Vendors
 */

import * as React from 'react';

/**
 * Styles
 */

import styles from './styles.module.css'

export interface LayoutProps {
    children: React.ReactElement
}

const Layout = (props: LayoutProps) => (
    <div className={styles.wrapper}>
        {props.children}
    </div>
)

export { Layout };