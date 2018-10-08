import React from 'react';
import { Pie } from 'react-chartjs-2';

class Chart1Poroki extends React.Component {
    render() {
        const data = {
            datasets: [{
                data: [10, 20, 30],
                label: 'Client'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        };

        return (
            <center>
                <Pie data={data} />
            </center>
        );
    }
};

export default Chart1Poroki
