import * as React from 'react';
import { Link } from '@fluentui/react-components';

export interface EnrollmentLinkProps {
    id: string;
}
export const EnrollmentLink: React.FC<EnrollmentLinkProps> = ({ id }) => {
    const onClick = () => {
        console.log(`clicking ${id}`);
    };

    return (
        <Link onClick={onClick}>{id}</Link>
    );
};
