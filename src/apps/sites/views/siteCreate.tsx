import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Field, Input, Button, InputOnChangeData } from '@fluentui/react-components';

export const SiteCreate: React.FC = () => {
    const [submitted, setSubmitted] = React.useState<boolean>(false);
    const [entry, setEntry] = React.useState<string>('');
    const navigate = useNavigate();

    const onClick = () => {

        sessionStorage.setItem("key", entry);
        setSubmitted(true);
    };

    React.useEffect(() => {
        console.log('here');
        if (submitted) {
            navigate('../1');
        }
    }, [submitted]);

    const onChange = (_: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        setEntry(data.value);
    }

    return (
        <>
            <div>Site Create</div>
            <Field
                label="Example field"
                validationState="error"
                validationMessage="This is an error message."
            >
                <Input value={entry} onChange={onChange} />
            </Field>
            <Button onClick={onClick}>save</Button>
        </>
    );
};
