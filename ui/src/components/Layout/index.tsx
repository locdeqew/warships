/**
 * Vendors
 */

import * as React from 'react';

/**
 * Styles
 */
import styles from './styles.module.css'

export interface LayoutProps {
    contentChildren: React.FC
}

console.log('sss', styles);

const Layout = ({ contentChildren }: LayoutProps) => (
    <>
        <div>
            te
        </div>
        {contentChildren}
    </>
)

export { Layout };