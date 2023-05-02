import * as React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorBoundary: React.FC = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <div>Ruh roh -- error logged to console</div>
        </div>
    );
};
