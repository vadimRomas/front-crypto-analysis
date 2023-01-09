import React, {useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const BBAARR = (props) => {
    const [options] = useState({
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            },
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
            },
        }
    )
    const [datasets] = useState({
        labels: props.labels,
        datasets: [
            {
                label: 'Long',
                backgroundColor: 'rgba(155,231,91,0.2)',
                borderColor: 'rgba(155,231,91,0.2)',
                borderWidth: 1,
                stack: 1,
                hoverBackgroundColor: 'rgba(35,108,5,0.4)',
                hoverBorderColor: 'rgb(12,114,9)',
                data: props.longData
            },
            {
                label: 'Short',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                stack: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: props.shortData
            },
        ],
    })
    // <Button variant="secondary" size="lg" disabled>
    //   Button
    // </Button>{' '}
    return <Bar options={options} data={datasets} height={30} />
}
