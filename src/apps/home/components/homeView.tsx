import * as React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const HomeView: React.FC = () => {
    const location = useLocation();
    const params = useParams();
    React.useEffect(() => {
        console.log(location);
        console.log(params);
    }, []);

    return (
        <div>Home</div>
    );
};
