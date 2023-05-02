import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Field, Input, Button } from '@fluentui/react-components';

export const SiteDetails: React.FC = () => {
    const loaderData = useLoaderData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [value] = React.useState<string>((loaderData as any).a || '')

    console.log(loaderData);

    const onClick = () => {
        console.log('saved details');
    };

    return (
        <>
        <div>Site Details</div>
            <Field
                label="Example field"
                validationState="error"
                validationMessage="This is an error message."
            >
                <Input value={value} />
            </Field>
            <Button onClick={onClick}>save</Button>
        </>
    );
};
