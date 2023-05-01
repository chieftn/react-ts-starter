import * as React from 'react';
import { Button, Input, Field, } from '@fluentui/react-components';
import { useKeyboardNavAttribute, useArrowNavigationGroup, useFocusWithin, useFocusFinders } from '@fluentui/react-tabster';
// import { createTabster, getDeloser } from "tabster";

export const Tabster: React.FC = () => {
    const arrowNavigation = useArrowNavigationGroup({ circular: false, axis: 'horizontal'});
    const helloWorld = useKeyboardNavAttribute<HTMLDivElement>();
    const goodbyeWorld = useKeyboardNavAttribute<HTMLDivElement>();
    const helloWorldAgain = useKeyboardNavAttribute<HTMLDivElement>();
    const focusWithin = useFocusWithin();
    const focusFinders = useFocusFinders();
    const [rerender, setRerender] = React.useState<number>(0);
    // const focusableGroup = useFocusableGroup();
    // const tabsterAttributes = useTabsterAttributes();
    // const modalAttributes = useModalAttributes();


    console.log(focusWithin?.current);
    console.log(helloWorld?.current);

    const onClick = () => {
        setRerender(rerender + 1);
        if (focusWithin?.current) {
            console.log('here');
            const me = focusFinders.findAllFocusable(focusWithin?.current, (el: unknown) => (el as { ariaInvalid: string | undefined }).ariaInvalid === 'true');
            // const me = focusFinders.findLastFocusable(focusWithin?.current);
            me?.[0]?.focus();
            console.log(me);
        }
    };

    return (
        <div>
            <section>
                <div>Arrow Navigation</div>
                <div {...arrowNavigation}>
                    <div ref={helloWorld}>Hello world</div>
                    <div ref={goodbyeWorld}>Goodbye world</div>
                    <div ref={helloWorldAgain}>Hello again world</div>
                </div>

            </section>

            <section ref={focusWithin}>
                <div>Arrow navigation / focus within</div>
                <div {...arrowNavigation}>
                    <Button onClick={onClick}>Hello</Button>
                    <Button>here</Button>
                    <Button>There</Button>
                    <Field
                        label="Example field"
                        validationState="error"
                        validationMessage="This is an error message."
                    >
                        <Input />
                    </Field>
                </div>

            </section>
        </div>
    );
};
