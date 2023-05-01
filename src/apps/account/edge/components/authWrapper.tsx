import * as React from 'react';

export interface AuthWrapperProps {
    children: React.ReactNode;
}
export const  AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};
