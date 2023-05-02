import * as React from 'react';
import { Link } from 'react-router-dom';

export const SiteList: React.FC = () => {
    return (
        <>
            <div>Site List</div>
            <div><Link to={'id1'}>Go to details</Link></div>
            <div><Link to={'add'}>Add new </Link></div>
        </>
    );
};
