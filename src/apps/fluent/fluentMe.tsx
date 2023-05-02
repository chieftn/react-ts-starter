import * as React from 'react';
import { useParams } from 'react-router-dom';

export const FluentMe = () => {
    const me = useParams();
    console.log(`id: ${me.id}`);

    return (
        <div>Fluent me</div>
    );
};