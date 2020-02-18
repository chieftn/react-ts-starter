import * as React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

export const HomeView: React.FC = () => {
    const elements = [
        { data: { id: 'one', label: 'Node 1' }},
        { data: { id: 'two', label: 'Node 2' }},
        { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
     ];

    const layout = { name: 'random' };

    return (
        <div style={{margin: '50px'}}>
            <CytoscapeComponent
                elements={elements}
                layout={layout}
                style={{ width: '600px', height: '600px', borderStyle: 'solid', borderWidth: '1px' }}
            />
        </div>
    );
};
