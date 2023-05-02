import * as React from 'react';
import { useLoaderData } from 'react-router-dom';

export const SiteDetails: React.FC = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);

    return (
        <div>Site Details</div>
    );
};
