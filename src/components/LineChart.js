import React from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends React.Component {
    // componentDidMount() {
    //     let collectionMonth = getCurrentMonth('month');
    //     let collectionYear = getCurrentMonth('year');
    //     for (let i = 0; i < collectionMonth.length; i++) {
    //         this.props.getCountMonthOrders(this.props.currentCompany, collectionMonth[i], collectionYear[i], i);
    //     }
    // }

    render() {
        const data = {
            labels: [1, 2, 3, 4, 5],
            datasets: [
                {
                    label: 'Критерий',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [55, 66, 44, 88, 99]
                }
            ]
        };
        return (
            <center style={{width: '60%'}}>
                <Line data={data} />
            </center>
        );
    }
};

export default LineChart

