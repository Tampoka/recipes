import React from 'react';
import {SiteLayout} from '../SiteLayout/SiteLayout';
import {Callout} from '../Callout/Callout';
import {ErrorBoundary} from '../ErrorBoundary/ErrorBoundary';
import {Menu} from '../Menu/Menu';

export default function Main  () {
    return (
        <SiteLayout menu={<Menu/>}>
            <Callout>Welcome to the site</Callout>
            <ErrorBoundary>
                <h1>TODO: Home Page</h1>
                <p>Complete the main contents for this home page</p>
            </ErrorBoundary>
        </SiteLayout>
    );
}

