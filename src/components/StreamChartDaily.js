import React, {useEffect, useRef} from 'react';
import {
    CategoryScale,
    Chart,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';

Chart.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineController
);

const StreamChartDaily = ({chartData}) => {
    const chartInstance = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        const labels = [];
        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m++) {
                labels.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
            }
        }

        const tooltipTitles = new Array(labels.length).fill(null);
        const roomTopics = new Array(labels.length).fill(null);
        const data = new Array(labels.length).fill(0);

        chartData.forEach(({start, end, title, roomTopic}) => {
            const startIndex = labels.indexOf(start);
            const endIndex = labels.indexOf(end);
            if (startIndex !== -1 && endIndex !== -1) {
                for (let i = startIndex; i <= endIndex; i++) {
                    data[i] = 1;
                    tooltipTitles[i] = title;
                    roomTopics[i] = roomTopic;
                }
            }
        });

        const config = {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        data: data,
                        borderColor: '#ff499c',
                        hitRadius: 35,
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            maxTicksLimit: 24,
                            autoSkip: true,
                            color: '#00ffcc',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            min: 0,
                            max: 1,
                            stepSize: 1,
                            color: '#00ffcc',
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                        displayColors: false,
                        filter: (context) => {
                            return tooltipTitles[context.dataIndex];
                        },
                        callbacks: {
                            title: (tooltipItems) => {
                                const index = tooltipItems[0]?.dataIndex;
                                return index ? tooltipTitles[index] : "";
                            },
                            label: (context) => {
                                const index = context.dataIndex;
                                return index ? roomTopics[index] : "";
                            }
                        }
                    }

                },
                animation: {
                    duration: 0,
                },
            },
        };

        chartInstance.current = new Chart(chartRef.current, config);

        return () => chartInstance.current?.destroy();
    }, [chartData]);

    return <canvas ref={chartRef}/>;
}

export default StreamChartDaily;