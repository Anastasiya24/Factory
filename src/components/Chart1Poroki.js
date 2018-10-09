import React from 'react';
import { Pie } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';
// http://jerairrest.github.io/react-chartjs-2/
// https://github.com/houjiazong/react-chartjs2

const data = {
    labels: [
        'Критерий 1',
        'Критерий 2',
        'Критерий 3'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

class Chart1Poroki extends React.Component {

    render() {
        return (
            <div style={{ width: 600 }}>
                <center>
                    <Pie data={data} />
                    <Typography variant="display1" gutterBottom style={{ display: 'inline-block' }}>
                        Всего: 48.7
                    </Typography>
                </center>
            </div>
        );

    }
};

export default Chart1Poroki;
