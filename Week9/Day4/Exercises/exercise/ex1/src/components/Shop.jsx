import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const Shop = (props) => {
    throw new Error('An error has occurred');
};

export default () => (
    <ErrorBoundary>
        <Shop />
    </ErrorBoundary>
);