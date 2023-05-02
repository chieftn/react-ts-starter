import * as React from 'react';
// import { useMsal } from '@azure/msal-react';
import { useLocation, useParams, Link } from 'react-router-dom';

export const HomeView: React.FC = () => {
    const location = useLocation();
    const params = useParams();
    // const navigate = useNavigate();

    // const { instance } = useMsal();
    // if (instance) {


    // }



    // const navigationClient = new CustomNavigationClient(navigate);
    // pca.setNavigationClient(navigationClient);


    React.useEffect(() => {
        console.log(location);
        console.log(params);
    }, []);

    return (
        <>
            <div>Home</div>
            <Link to={'fluent'}>Fluent</Link>
        </>
    );
};
