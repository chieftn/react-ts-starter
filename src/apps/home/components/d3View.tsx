import * as React from 'react';
import * as d3 from 'd3';

export const D3View: React.FC = () => {

    const d3Container = React.useRef(null);
    const viewWidth = 400;
    const viewHeight = 200;
    const data = [12, 44, 47, 70, 56]; // tslint:disable-line:no-magic-numbers

    React.useEffect(() => {
        if (d3Container.current) {
            const svg = d3.select(d3Container.current);

            // Bind D3 data
            const update = svg
                .append('g')
                .selectAll('text')
                .data(data);

            // Enter new D3 elements
            update.enter()
                .append('text')
                .attr('x', (d, i) => i * 25) // tslint:disable-line:no-magic-numbers
                .attr('y', 40) // tslint:disable-line:no-magic-numbers
                .style('font-size', 24) // tslint:disable-line:no-magic-numbers
                .text((d: number) => d);

            // Update existing D3 elements
            update
                .attr('x', (d, i) => i * 40) // tslint:disable-line:no-magic-numbers
                .text((d: number) => d);

            // Remove old D3 elements
            update.exit()
                .remove();
        }
    }, [d3Container.current]); // tslint:disable-line:align

    return (
        <svg
            className="d3-component"
            width={viewWidth}
            height={viewHeight}
            ref={d3Container}
        />
    );
};
