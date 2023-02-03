import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import {Line} from "react-chartjs-2";

import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';

export const Graph = (props) => {
    const [data] = useState({
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
        ],
        datasets: [
            {
                label: "First dataset",
                backgroundColor: "yellow",
                borderColor: "yellow",
                borderWidth: 1,
                hoverBackgroundColor: "yellow",
                hoverBorderColor: "yellow",
                data: [65, 59, 100, 81, 56, 55, 40]
            }
        ]
    });

    const [dataZwei, setDataZwei] = useState({
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
        ],
        datasets: [
            {
                type: "line",
                label: "Chart",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#0069b4",
                borderColor: "#0069b4",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "#0069b447",
                pointBackgroundColor: "#fff",
                // pointBorderWidth: 1,
                // pointHoverRadius: 5,
                pointHoverBackgroundColor: "#0069b447",
                pointHoverBorderColor: "#0069b4",
                // pointHoverBorderWidth: 2,
                // pointRadius: 1,
                // pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            // {
            //     type: "bar",
            //     label: "My First dataset",
            //     fill: false,
            //     lineTension: 0.1,
            //     backgroundColor: "#0069b4",
            //     borderColor: "#0069b4",
            //     borderCapStyle: "butt",
            //     borderDash: [],
            //     borderDashOffset: 0.0,
            //     borderJoinStyle: "miter",
            //     pointBorderColor: "#0069b447",
            //     pointBackgroundColor: "#fff",
            //     pointBorderWidth: 1,
            //     pointHoverRadius: 5,
            //     pointHoverBackgroundColor: "#0069b447",
            //     pointHoverBorderColor: "#0069b4",
            //     pointHoverBorderWidth: 2,
            //     pointRadius: 1,
            //     pointHitRadius: 10,
            //     data: [65, 59, 80, 81, 56, 55, 40]
            // }

        ]
    });

    const [dataNeu] = useState({
        labels: ["above", "down"],
        datasets: [
            {
                data: [60, 40],
                backgroundColor: ["green", "red"],
                hoverBackgroundColor: ["gray"]
            }
        ]
    });

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        ArcElement,
        Title,
        Tooltip,
        Legend
    );

    // useEffect(() => {
    //     let dataForDataZwei = [];
    //     let labelsForDataZwei = [];
    //     let volume = []
    //
    //     props.data.map(value => {
    //         // volume.push(value.Volume);
    //         dataForDataZwei.push(value.Close);
    //         const date = new Date(value.Close_time)
    //         const dateTime = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}`
    //         labelsForDataZwei.push(dateTime);
    //         return true
    //     });
    //
    //     setDataZwei({
    //         labels: labelsForDataZwei,
    //         datasets: [
    //             {
    //                 type: "line",
    //                 label: "My First dataset",
    //                 fill: false,
    //                 lineTension: 0.1,
    //                 backgroundColor: "#0069b4",
    //                 borderColor: "#0069b4",
    //                 borderCapStyle: "butt",
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: "miter",
    //                 pointBorderColor: "#0069b447",
    //                 pointBackgroundColor: "#fff",
    //                 pointBorderWidth: 1,
    //                 pointHoverRadius: 5,
    //                 pointHoverBackgroundColor: "#0069b447",
    //                 pointHoverBorderColor: "#0069b4",
    //                 pointHoverBorderWidth: 2,
    //                 pointRadius: 1,
    //                 pointHitRadius: 10,
    //                 data: dataForDataZwei
    //             },
    //             // {
    //             //     type: "bar",
    //             //     label: "volume",
    //             //     fill: false,
    //             //     lineTension: 0.1,
    //             //     backgroundColor: "#ff4c4c",
    //             //     borderColor: "#ff1e5c",
    //             //     borderCapStyle: "butt",
    //             //     borderDash: [],
    //             //     borderDashOffset: 0.0,
    //             //     borderJoinStyle: "miter",
    //             //     pointBorderColor: "#0069b447",
    //             //     pointBackgroundColor: "#fff",
    //             //     pointBorderWidth: 1,
    //             //     pointHoverRadius: 5,
    //             //     pointHoverBackgroundColor: "#0069b447",
    //             //     pointHoverBorderColor: "#0069b4",
    //             //     pointHoverBorderWidth: 2,
    //             //     pointRadius: 1,
    //             //     pointHitRadius: 10,
    //             //     data: volume
    //             // }
    //         ]
    //     });
    // }, [props]);

    return (
        <div>
            {data && dataZwei && dataNeu ? <Container >🙂  {/* style={{overflow: 'hidden'}} */}
                    <Row
                        // style={{width: "50%", height: "25%"}}
                    >
                        <Col>
                            <Line
                                style={{width: "50%", height: "25%"}}
                                data={dataZwei}
                            />
                        </Col>
                    </Row>

        {/*todo додати майбутній можливий об'єм за допомогою списку ордерів візуально другий графік https://codesandbox.io/s/reactd3linebar-3kq6u?file=/src/Barchart.js:169-194*/}
                    {/*<div>*/}
                    {/*    <svg width={700} height={300}>*/}
                    {/*        <g transform={`translate(50, 50)`}>*/}
                    {/*            {data.map((item, i) => {*/}
                    {/*                let svgHeight;*/}
                    {/*                return (*/}
                    {/*                    <rect*/}
                    {/*                        key={i}*/}
                    {/*                        x={i * 10}*/}
                    {/*                        y={svgHeight - item.temperature - 100}*/}
                    {/*                        height={item.temperature}*/}
                    {/*                        width={6}*/}
                    {/*                        fill={i % 2 === 0 ? color[0] : color[1]}*/}
                    {/*                        className="barClass"*/}
                    {/*                    />*/}
                    {/*                );*/}
                    {/*            })}*/}
                    {/*        </g>*/}
                    {/*    </svg>*/}
                    {/*</div>*/}
                    {/*<Row*/}
                    {/*    style={{width: "50%", height: "25%"}}*/}
                    {/*>*/}
                    {/*    <Col>*/}
                    {/*        <Bar*/}
                    {/*            data={data}*/}
                    {/*            style={{width: "50%", height: "25%"}}*/}
                    {/*            options={{*/}
                    {/*                maintainAspectRatio: true*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row*/}
                    {/*    style={{width: "50%", height: "25%"}}*/}
                    {/*>*/}
                    {/*    <Col>*/}
                    {/*        <Doughnut*/}
                    {/*            style={{width: "50%", height: "25%"}}*/}
                    {/*            data={dataNeu}*/}
                    {/*        />*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Container>
                : <Spinner animation="border"/>}
        </div>
    );
}


// line and bar on one graph
// import React from "react";
// import { Bar } from "react-chartjs-2";
//
// const optionsChart = {
//   maintainAspectRatio: false,
//
//   legend: {
//     display: true,
//     position: "top",
//     labels: {
//       fontColor: "#8898AA"
//     }
//   },
//   scales: {
//     yAxes: [
//       {
//         gridLines: {
//           display: false
//         },
//         ticks: {
//           fontColor: "black",
//           callback: function (value) {
//             if (!(value % 2)) {
//               //return '$' + value + 'k'
//               return value;
//             }
//           }
//         }
//       }
//     ],
//     xAxes: [
//       {
//         gridLines: {
//           display: false
//         },
//         ticks: {
//           fontColor: "black"
//         }
//       }
//     ]
//   },
//
//   tooltips: {
//     enabled: true,
//     mode: "index",
//     intersect: true
//   }
// };
//
// const data = {
//   labels: ["EA", "EAD", "EDM", "EIM", "ERP", "ISM", "TECHNO"],
//   datasets: [
//     {
//       type: "line",
//       label: "Kuota Peminatan",
//       backgroundColor: "transparent",
//       tension: 0,
//       borderColor: "#303D60",
//       data: [70, 40, 30, 60, 70, 30, 30]
//     },
//     {
//       type: "bar",
//       label: "Mahasiswa",
//       borderRadius: 2,
//       data: [80, 24, 25, 52, 73, 22, 22],
//       backgroundColor: "#75A1DE",
//       fontColor: "white"
//     }
//   ]
// };
//
// export function Graph() {
//   return (
//     <>
//       <div className="App">
//         <div className="wrapper" style={{ height: "15rem" }}>
//           <Bar data={data} options={optionsChart} />
//         </div>
//       </div>
//     </>
//   );
// }
